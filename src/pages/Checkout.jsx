import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Lock, CreditCard, Landmark, Wallet, ShieldCheck, ChevronDown, CheckCircle2 } from "lucide-react";
import skillmedhaLogo from "@/assets/skillmedha-logo.png";

export default function Checkout() {
    const location = useLocation();
    const navigate = useNavigate();
    const course = location.state?.course;

    // If no course in state, redirect home or to courses
    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">No course selected</h2>
                    <button onClick={() => navigate("/courses")} className="text-primary hover:underline">
                        Browse Courses
                    </button>
                </div>
            </div>
        );
    }

    const [paymentMethod, setPaymentMethod] = useState("upi");

    const originalPrice = course.originalPrice > 0 ? course.originalPrice * 83 : 0;
    const currentPrice = course.isFree ? 0 : course.price !== undefined ? course.price * 83 : 0;
    const discountAmount = originalPrice - currentPrice;

    return (
        <div className="min-h-screen bg-background">
            {/* ── Minimal Header ── */}
            <header className="border-b border-border bg-card/80 backdrop-blur sticky top-0 z-50">
                <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 shrink-0 group">
                        <img
                            src={skillmedhaLogo}
                            alt="SkillMedha"
                            className="h-10 w-auto group-hover:scale-105 transition-transform"
                        />
                        <span className="text-xl font-bold text-foreground tracking-tight">
                            Skill<span className="text-primary">Medha</span>
                        </span>
                    </Link>
                    <button onClick={() => navigate(-1)} className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                        Cancel checkout
                    </button>
                </div>
            </header>

            {/* ── Main Content ── */}
            <main className="container mx-auto px-4 lg:px-8 py-10 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* ── Left Column (Billing & Payment) ── */}
                    <div className="lg:col-span-7 xl:col-span-8">
                        <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>

                        {/* Billing Address */}
                        <section className="mb-10">
                            <h2 className="text-xl font-bold text-foreground mb-4">Billing address</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-foreground mb-1.5">Country</label>
                                    <div className="relative">
                                        <select className="w-full appearance-none rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm">
                                            <option>India</option>
                                            <option>United States</option>
                                            <option>United Kingdom</option>
                                            <option>Australia</option>
                                            <option>Canada</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-foreground mb-1.5">State / Union Territory</label>
                                    <div className="relative">
                                        <select className="w-full appearance-none rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm">
                                            <option>Andhra Pradesh</option>
                                            <option>Karnataka</option>
                                            <option>Maharashtra</option>
                                            <option>Tamil Nadu</option>
                                            <option>Telangana</option>
                                            <option>Delhi</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-2 text-[11px] text-muted-foreground">
                                SkillMedha is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.
                            </p>
                        </section>

                        {/* Payment Method */}
                        <section className="mb-10">
                            <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
                                <h2 className="text-xl font-bold text-foreground">Payment method</h2>
                                <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                                    Secure and encrypted <Lock className="h-3 w-3" />
                                </div>
                            </div>

                            <div className="rounded-xl border border-border/60 overflow-hidden bg-card shadow-sm divide-y divide-border/60">

                                {/* UPI Option */}
                                <div className={`transition-all ${paymentMethod === "upi" ? "bg-primary/5 border-l-4 border-l-primary" : "hover:bg-muted/50 border-l-4 border-l-transparent"}`}>
                                    <label className="flex items-center gap-4 p-4 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="upi"
                                            checked={paymentMethod === "upi"}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="h-4 w-4 text-primary focus:ring-primary"
                                        />
                                        <div className="flex items-center gap-2 font-bold text-foreground">
                                            <div className="h-6 px-1 bg-white border border-gray-200 rounded flex items-center shrink-0">
                                                <span className="text-xs font-black italic text-gray-800">UPI</span>
                                            </div>
                                            UPI
                                        </div>
                                    </label>
                                    {paymentMethod === "upi" && (
                                        <div className="px-4 pb-4 pl-12">
                                            <div className="border border-border rounded p-4 bg-background">
                                                <p className="text-sm font-semibold text-muted-foreground mb-4">
                                                    After generating the QR code you can use your preferred UPI app to complete the payment.
                                                </p>
                                                <p className="text-sm font-semibold text-foreground">
                                                    Click the "Proceed" button to generate a QR code for UPI payment.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Cards Option */}
                                <div className={`transition-all border-t border-border/60 ${paymentMethod === "cards" ? "bg-primary/5 border-l-4 border-l-primary" : "hover:bg-muted/50 border-l-4 border-l-transparent"}`}>
                                    <label className="flex items-center justify-between p-4 cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="radio"
                                                name="payment"
                                                value="cards"
                                                checked={paymentMethod === "cards"}
                                                onChange={(e) => setPaymentMethod(e.target.value)}
                                                className="h-4 w-4 text-primary focus:ring-primary"
                                            />
                                            <div className="flex items-center gap-2 font-bold text-foreground">
                                                <CreditCard className="h-5 w-5 text-muted-foreground" />
                                                Cards
                                            </div>
                                        </div>
                                        <div className="flex gap-1">
                                            <div className="h-6 w-10 bg-blue-600 rounded flex items-center justify-center text-[8px] text-white font-bold">VISA</div>
                                            <div className="h-6 w-10 bg-red-500 rounded flex items-center justify-center flex-col">
                                                <div className="flex -space-x-2">
                                                    <div className="h-3 w-3 rounded-full bg-red-600"></div>
                                                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>

                                {/* Net Banking Option */}
                                <div className={`transition-all border-t border-border/60 ${paymentMethod === "netbanking" ? "bg-primary/5 border-l-4 border-l-primary" : "hover:bg-muted/50 border-l-4 border-l-transparent"}`}>
                                    <label className="flex items-center gap-4 p-4 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="netbanking"
                                            checked={paymentMethod === "netbanking"}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="h-4 w-4 text-primary focus:ring-primary"
                                        />
                                        <div className="flex items-center gap-2 font-bold text-foreground">
                                            <Landmark className="h-5 w-5 text-muted-foreground" />
                                            Net Banking
                                        </div>
                                    </label>
                                </div>

                                {/* Mobile Wallets Option */}
                                <div className={`transition-all border-t border-border/60 ${paymentMethod === "wallets" ? "bg-primary/5 border-l-4 border-l-primary" : "hover:bg-muted/50 border-l-4 border-l-transparent"}`}>
                                    <label className="flex items-center gap-4 p-4 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="wallets"
                                            checked={paymentMethod === "wallets"}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="h-4 w-4 text-primary focus:ring-primary"
                                        />
                                        <div className="flex items-center gap-2 font-bold text-foreground">
                                            <Wallet className="h-5 w-5 text-muted-foreground" />
                                            Mobile Wallets
                                        </div>
                                    </label>
                                </div>

                            </div>
                        </section>

                        {/* Order Details */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">Order details <span className="text-sm font-normal text-muted-foreground">(1 course)</span></h2>
                            <div className="flex gap-4">
                                <img src={course.image || course.previewImage} alt={course.title} className="w-16 h-12 object-cover rounded shadow-sm shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-bold text-foreground leading-tight mb-1 line-clamp-2">{course.title}</h3>
                                </div>
                                <div className="text-right shrink-0">
                                    <div className="text-sm font-bold text-foreground">₹{currentPrice.toLocaleString()}</div>
                                    {originalPrice > 0 && <div className="text-xs text-muted-foreground line-through">₹{originalPrice.toLocaleString()}</div>}
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* ── Right Column (Summary) ── */}
                    <div className="lg:col-span-5 xl:col-span-4">
                        <div className="sticky top-28">
                            <div className="bg-card border border-border/40 sm:p-8 p-6 rounded-2xl shadow-card bg-muted/10">
                                <h2 className="text-2xl font-bold text-foreground mb-4">Order summary</h2>

                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground font-medium">Original Price:</span>
                                        <span className="text-foreground">₹{originalPrice.toLocaleString()}</span>
                                    </div>
                                    {discountAmount > 0 && (
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground font-medium">Discounts ({Math.round((discountAmount / originalPrice) * 100)}% Off):</span>
                                            <span className="text-foreground">-₹{discountAmount.toLocaleString()}</span>
                                        </div>
                                    )}

                                    <div className="border-t border-border/60 my-3"></div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-foreground">Total <span className="text-sm font-medium text-muted-foreground ml-1">(1 course):</span></span>
                                        <span className="text-lg font-bold text-foreground">₹{currentPrice.toLocaleString()}</span>
                                    </div>
                                </div>

                                <p className="text-[11px] text-muted-foreground mb-4">
                                    By completing your purchase, you agree to these <a href="#" className="text-primary hover:underline">Terms of Use</a>.
                                </p>

                                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 mb-8 shadow-glow-primary hover:-translate-y-1 text-lg">
                                    <Lock className="h-5 w-5" />
                                    Complete Checkout
                                </button>

                                {/* Guarantee */}
                                <div className="text-center px-4">
                                    <h4 className="font-bold text-foreground text-sm mb-1">30-Day Money-Back Guarantee</h4>
                                    <p className="text-xs text-muted-foreground">Not satisfied? Get a full refund within 30 days. Simple and straightforward!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
