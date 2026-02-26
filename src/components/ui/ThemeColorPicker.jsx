import { useState, useEffect, useRef } from "react";
import { Palette, X, GripHorizontal } from "lucide-react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";

// ─── Preset themes ────────────────────────────────────────────────────────────
const PRESETS = [
    { label: "Violet (Default)", primary: "#5b21f0", dark: "#120a3b", accent: "#00e676" },
    { label: "Ocean Blue", primary: "#1d6feb", dark: "#071530", accent: "#00e5c4" },
    { label: "Rose", primary: "#e11d48", dark: "#1a0510", accent: "#fbbf24" },
    { label: "Emerald", primary: "#059669", dark: "#052e16", accent: "#f59e0b" },
    { label: "Amber", primary: "#d97706", dark: "#1c0f00", accent: "#6366f1" },
    { label: "Slate", primary: "#475569", dark: "#0f172a", accent: "#22d3ee" },
    { label: "Fuchsia", primary: "#a21caf", dark: "#1a0020", accent: "#4ade80" },
    { label: "Crimson", primary: "#dc2626", dark: "#1a0000", accent: "#06b6d4" },
];

// ─── Color conversion helpers ─────────────────────────────────────────────────
function hexToHsl(hex) {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToHex(h, s, l) {
    s /= 100; l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(-1, Math.min(k - 3, Math.min(9 - k, 1)));
        return Math.round(255 * color).toString(16).padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function hslStr(h, s, l) { return `${h} ${s}% ${l}%`; }

// ─── Apply theme to CSS variables ─────────────────────────────────────────────
function applyTheme(primaryHex, darkHex, accentHex) {
    const root = document.documentElement;
    const [ph, ps] = hexToHsl(primaryHex);
    const [dh, ds, dl] = hexToHsl(darkHex);
    const [ah, as_, al] = hexToHsl(accentHex);

    root.style.setProperty("--primary", hslStr(ph, ps, 50));
    root.style.setProperty("--ring", hslStr(ph, ps, 50));
    root.style.setProperty("--sidebar-primary", hslStr(ph, ps, 50));
    root.style.setProperty("--sidebar-ring", hslStr(ph, ps, 50));
    root.style.setProperty("--primary-dark", hslStr(dh, ds, dl));
    root.style.setProperty("--sidebar-background", hslStr(dh, ds, dl));
    root.style.setProperty("--secondary-foreground", hslStr(dh, ds, dl));
    root.style.setProperty("--accent-foreground", hslStr(dh, ds, dl));
    root.style.setProperty("--sidebar-accent", hslStr(dh, Math.max(ds - 10, 0), Math.min(dl + 8, 100)));
    root.style.setProperty("--sidebar-border", hslStr(dh, Math.max(ds - 10, 0), Math.min(dl + 8, 100)));
    root.style.setProperty("--accent", hslStr(ah, as_, al));

    const style = document.getElementById("__theme_override__") || (() => {
        const s = document.createElement("style");
        s.id = "__theme_override__";
        document.head.appendChild(s);
        return s;
    })();

    style.textContent = `
    .bg-gradient-primary { background: linear-gradient(135deg, hsl(${ph},${ps}%,60%), hsl(${ph},${ps}%,45%)) !important; }
    .text-gradient-primary { background-image: linear-gradient(135deg, hsl(${ph},${ps}%,60%), hsl(${ph},${ps}%,45%)) !important; }
    .bg-gradient-hero { background: linear-gradient(135deg, hsl(${dh},${ds}%,${dl}%), hsl(${dh},${Math.max(ds - 10, 0)}%,${Math.min(dl + 7, 100)}%)) !important; }
    .bg-gradient-dark { background: linear-gradient(180deg, hsl(${dh},${ds}%,${dl}%), hsl(${dh},${ds}%,${Math.max(dl - 6, 0)}%)) !important; }
    .bg-gradient-accent { background: linear-gradient(135deg, hsl(${ah},${as_}%,${al}%), hsl(${ah},${as_}%,${Math.max(al - 7, 0)}%)) !important; }
    .shadow-glow-primary { box-shadow: 0 4px 20px hsla(${ph},${ps}%,50%,0.35) !important; }
  `;
}

// ─── Inline draggable color picker ───────────────────────────────────────────
function ColorPickerPopup({ initialHex, onApply, onClose }) {
    const dragControls = useDragControls();
    const [hsl, setHsl] = useState(() => {
        const [h, s, l] = hexToHsl(initialHex);
        return { h, s, l };
    });
    const [hexInput, setHexInput] = useState(initialHex);
    const slRef = useRef(null);
    const hueRef = useRef(null);
    const draggingSL = useRef(false);
    const draggingHue = useRef(false);

    const currentHex = hslToHex(hsl.h, hsl.s, hsl.l);

    function pickSL(e) {
        const rect = slRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
        // x = saturation 0→100, y = lightness 100→0 (but we want HSL lightness)
        // In a SL square with white top-left, pure hue top-right, black bottom:
        // s = x*100, l = (1 - y/2 - x*y/2) * 100 simplified:
        const s = Math.round(x * 100);
        const l = Math.round((1 - y * 0.5 - x * (1 - y) * 0) * (100 - y * 50));
        const newL = Math.round(100 - y * 50 - x * (1 - y) * 0);
        // Simpler: standard HSL picker: s=x, l=(1-y*(1+x)/2)*100
        const sl = Math.round(x * 100);
        const ll = Math.round((1 - y * (1 + x) / 2) * 100);
        setHsl(prev => ({ ...prev, s: sl, l: Math.max(0, Math.min(100, ll)) }));
    }

    function pickHue(e) {
        const rect = hueRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        setHsl(prev => ({ ...prev, h: Math.round(x * 360) }));
    }

    useEffect(() => {
        setHexInput(hslToHex(hsl.h, hsl.s, hsl.l));
    }, [hsl]);

    useEffect(() => {
        const onMove = (e) => {
            if (draggingSL.current) pickSL(e);
            if (draggingHue.current) pickHue(e);
        };
        const onUp = () => { draggingSL.current = false; draggingHue.current = false; };
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
        return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
    }, []);

    function handleHexInput(v) {
        setHexInput(v);
        if (/^#[0-9a-fA-F]{6}$/.test(v)) {
            const [h, s, l] = hexToHsl(v);
            setHsl({ h, s, l });
        }
    }

    // cursor position in SL box
    // x = s/100, y = inverse of l formula
    const cursorX = hsl.s;
    // From ll = (1 - y*(1+x)/2)*100 → y = (1 - ll/100)*2/(1+x)
    const sx = hsl.s / 100;
    const cursorY = Math.max(0, Math.min(100, (1 - hsl.l / 100) * 2 / (1 + sx) * 100));

    return (
        <motion.div
            drag
            dragControls={dragControls}
            dragListener={false}
            dragMomentum={false}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="fixed z-[10000] w-64 rounded-2xl border border-border bg-card shadow-2xl overflow-hidden select-none"
            style={{ bottom: "22rem", right: "1.5rem" }}
        >
            {/* Drag handle — only this bar starts the drag */}
            <div
                className="flex items-center justify-between px-3 py-2 bg-muted cursor-grab active:cursor-grabbing border-b border-border"
                onPointerDown={(e) => dragControls.start(e)}
            >
                <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                    <GripHorizontal className="h-3.5 w-3.5" /> Color Picker
                </span>
                <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                    <X className="h-3.5 w-3.5" />
                </button>
            </div>

            <div className="p-3 space-y-3">
                {/* SL gradient square */}
                <div
                    ref={slRef}
                    className="relative h-36 w-full rounded-lg cursor-crosshair overflow-hidden"
                    style={{
                        background: `hsl(${hsl.h}, 100%, 50%)`,
                    }}
                    onMouseDown={(e) => { draggingSL.current = true; pickSL(e); }}
                >
                    {/* White gradient (left to right: white → transparent) */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #fff, transparent)" }} />
                    {/* Black gradient (top to bottom: transparent → black) */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent, #000)" }} />
                    {/* Cursor */}
                    <div
                        className="absolute h-4 w-4 rounded-full border-2 border-white shadow-md pointer-events-none -translate-x-1/2 -translate-y-1/2"
                        style={{
                            left: `${cursorX}%`,
                            top: `${cursorY}%`,
                            background: currentHex,
                        }}
                    />
                </div>

                {/* Hue bar */}
                <div
                    ref={hueRef}
                    className="relative h-4 w-full rounded-full cursor-crosshair"
                    style={{ background: "linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)" }}
                    onMouseDown={(e) => { draggingHue.current = true; pickHue(e); }}
                >
                    <div
                        className="absolute top-1/2 h-5 w-5 rounded-full border-2 border-white shadow-md pointer-events-none -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${(hsl.h / 360) * 100}%`, background: `hsl(${hsl.h},100%,50%)` }}
                    />
                </div>

                {/* Preview + hex input */}
                <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-lg border border-border shadow-sm shrink-0" style={{ background: currentHex }} />
                    <input
                        type="text"
                        value={hexInput}
                        onChange={(e) => handleHexInput(e.target.value)}
                        className="flex-1 rounded-lg border border-border bg-background px-2 py-1.5 text-xs font-mono text-foreground outline-none focus:ring-1 focus:ring-primary"
                        placeholder="#000000"
                        maxLength={7}
                    />
                </div>

                {/* Apply */}
                <button
                    onClick={() => onApply(currentHex)}
                    className="w-full rounded-lg py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ background: currentHex }}
                >
                    Apply Color
                </button>
            </div>
        </motion.div>
    );
}

// ─── Main component ───────────────────────────────────────────────────────────
const STORAGE_KEY = "sm_theme";

export default function ThemeColorPicker() {
    const [open, setOpen] = useState(false);
    const [primaryHex, setPrimaryHex] = useState("#1d6feb");
    const [darkHex, setDarkHex] = useState("#071530");
    const [accentHex, setAccentHex] = useState("#008ee6");
    // Which picker is open: "primary" | "dark" | "accent" | null
    const [activePicker, setActivePicker] = useState(null);
    const panelRef = useRef(null);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const { primary, dark, accent } = JSON.parse(saved);
                setPrimaryHex(primary); setDarkHex(dark); setAccentHex(accent);
                applyTheme(primary, dark, accent);
            } catch (_) { }
        }
    }, []);

    // Close main panel on outside click (but not when color picker is open)
    useEffect(() => {
        if (!open || activePicker) return;
        const handler = (e) => {
            if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [open, activePicker]);

    function handleChange(primary, dark, accent) {
        setPrimaryHex(primary); setDarkHex(dark); setAccentHex(accent);
        applyTheme(primary, dark, accent);
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ primary, dark, accent }));
    }

    function applyPickerColor(hex) {
        if (activePicker === "primary") handleChange(hex, darkHex, accentHex);
        if (activePicker === "dark") handleChange(primaryHex, hex, accentHex);
        if (activePicker === "accent") handleChange(primaryHex, darkHex, hex);
        setActivePicker(null);
    }

    const activeHex = activePicker === "primary" ? primaryHex
        : activePicker === "dark" ? darkHex
            : activePicker === "accent" ? accentHex
                : "#000000";

    return (
        <>
            {/* Floating trigger */}
            <button
                onClick={() => { setOpen(v => !v); setActivePicker(null); }}
                title="Change Color Theme"
                className="fixed bottom-6 right-6 z-[9999] flex h-12 w-12 items-center justify-center rounded-full shadow-xl border-2 border-white/20 transition-transform hover:scale-110 active:scale-95"
                style={{ background: primaryHex }}
            >
                <Palette className="h-5 w-5 text-white" />
            </button>

            {/* Draggable custom color picker */}
            <AnimatePresence>
                {activePicker && (
                    <ColorPickerPopup
                        key={activePicker}
                        initialHex={activeHex}
                        onApply={applyPickerColor}
                        onClose={() => setActivePicker(null)}
                    />
                )}
            </AnimatePresence>

            {/* Main theme panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        ref={panelRef}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-20 right-6 z-[9999] w-72 rounded-2xl border border-border bg-card shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-border px-4 py-3">
                            <span className="text-sm font-semibold text-card-foreground flex items-center gap-2">
                                <Palette className="h-4 w-4" style={{ color: primaryHex }} />
                                Theme Color
                            </span>
                            <button onClick={() => { setOpen(false); setActivePicker(null); }} className="text-muted-foreground hover:text-card-foreground transition-colors">
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="p-4 space-y-4">
                            {/* Preset swatches */}
                            <div>
                                <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">Presets</p>
                                <div className="grid grid-cols-4 gap-2">
                                    {PRESETS.map((p) => (
                                        <button
                                            key={p.label}
                                            title={p.label}
                                            onClick={() => { handleChange(p.primary, p.dark, p.accent); setActivePicker(null); }}
                                            className="group relative flex items-center justify-center"
                                        >
                                            <span
                                                className="h-9 w-9 rounded-full border-2 transition-transform group-hover:scale-110 shadow-md block"
                                                style={{
                                                    background: `linear-gradient(135deg, ${p.primary}, ${p.dark})`,
                                                    borderColor: primaryHex === p.primary ? primaryHex : "transparent",
                                                    outline: primaryHex === p.primary ? `2px solid ${p.primary}` : "none",
                                                    outlineOffset: "2px",
                                                }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Custom pickers */}
                            <div>
                                <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">Custom</p>
                                <div className="space-y-2">
                                    {[
                                        { label: "Primary", value: primaryHex, key: "primary" },
                                        { label: "Background", value: darkHex, key: "dark" },
                                        { label: "Accent", value: accentHex, key: "accent" },
                                    ].map(({ label, value, key }) => (
                                        <div key={key} className="flex items-center justify-between">
                                            <span className="text-xs text-muted-foreground">{label}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-mono text-muted-foreground">{value.toUpperCase()}</span>
                                                <button
                                                    onClick={() => setActivePicker(activePicker === key ? null : key)}
                                                    className="h-7 w-10 rounded border-2 shadow-sm transition-transform hover:scale-105 cursor-pointer"
                                                    style={{
                                                        background: value,
                                                        borderColor: activePicker === key ? "#fff" : "transparent",
                                                        outline: activePicker === key ? `2px solid ${value}` : "none",
                                                        outlineOffset: "1px",
                                                    }}
                                                    aria-label={`Pick ${label} color`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Reset */}
                            <button
                                onClick={() => { handleChange("#1d6feb", "#071530", "#008ee6"); setActivePicker(null); }}
                                className="w-full rounded-lg border border-border py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                            >
                                Reset to Default
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
