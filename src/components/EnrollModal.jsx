import { X, Globe2, Sparkles, Cpu, Code2 } from "lucide-react";
import { useState } from "react";
import enrollImg from "@/assets/enroll-img.png";

export default function EnrollModal({ isOpen, onClose, courseTitle }) {
    const [formData, setFormData] = useState({
        email: "",
        fullName: "",
        graduationYear: "",
        jobTitle: "",
        program: "",
        mobileNumber: "",
    });

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6 lg:p-8 overflow-y-auto">
            <div
                className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden my-auto"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                {/* Close button - Desktop (outside image) / Mobile (floating) */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 rounded-full p-2 bg-white/80 md:bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* ── Left Column (Image & Copy) ── */}
                <div
                    className="relative w-full md:w-5/12 lg:w-1/2 min-h-[300px] md:min-h-[500px] flex flex-col justify-between p-8 xl:p-12 overflow-hidden bg-gradient-dark"
                >
                    {/* Background overlay using primary tint */}
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ background: "linear-gradient(to bottom, hsl(var(--primary)/0.25), transparent)" }}
                    />

                    <div className="relative z-10 text-center animate-fade-in">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                            Build your career -{" "}
                            <span
                                className="italic block mt-1"
                                style={{ color: "hsl(var(--primary) / 0.85)" }}
                            >
                                AI takes you further!
                            </span>
                        </h2>
                        <p className="text-white/75 text-sm md:text-base leading-relaxed mb-8 max-w-sm mx-auto">
                            Master the skills that matter. By 2030, AI could automate 30% of work hours, making AI-skilled professionals indispensable.
                        </p>
                    </div>

                    {/* Decorative icons */}
                    <div className="absolute bottom-1/4 left-8 animate-pulse" style={{ color: "hsl(var(--primary)/0.5)" }}>
                        <Code2 className="h-10 w-10" />
                    </div>
                    <div className="absolute top-1/3 right-8 animate-pulse delay-700" style={{ color: "hsl(var(--accent)/0.6)" }}>
                        <Sparkles className="h-12 w-12" />
                    </div>
                    <div className="absolute bottom-12 right-12 animate-pulse delay-300" style={{ color: "hsl(var(--primary)/0.4)" }}>
                        <Cpu className="h-10 w-10" />
                    </div>

                    {/* Instructor image */}
                    <div className="absolute top-[15%] bottom-20 left-1/2 -translate-x-1/2 w-[50vw]">
                        <img
                            src={enrollImg}
                            alt="Instructor"
                            className="w-full h-auto object-cover mask-image-bottom drop-shadow-2xl rounded-t-full brightness-110"
                            style={{ maskImage: "linear-gradient(to top, transparent 0%, black 20%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 20%)" }}
                        />
                    </div>
                </div>

                {/* ── Right Column (Form) ── */}
                <div className="w-full md:w-7/12 lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center bg-white">
                    <div className="mb-6">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                            Get{" "}
                            <span style={{ color: "hsl(var(--primary))" }}>1:1 Expert Guidance</span>{" "}
                            &{" "}
                            <span style={{ color: "hsl(var(--primary))" }}>FREE Roadmap</span>{" "}
                            to stay ahead
                        </h3>
                        {courseTitle && (
                            <p className="text-sm text-gray-500 font-medium">Enrolling in: <span className="text-gray-900 font-bold">{courseTitle}</span></p>
                        )}
                    </div>

                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); alert('Successfully enrolled!'); }}>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-1.5">Email Id <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                required
                                placeholder="Enter your Email ID"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors"
                                style={{ "--tw-ring-color": "hsl(var(--primary))" }}
                                onFocus={e => { e.target.style.borderColor = "hsl(var(--primary))"; e.target.style.boxShadow = "0 0 0 1px hsl(var(--primary))"; }}
                                onBlur={e => { e.target.style.borderColor = ""; e.target.style.boxShadow = ""; }}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your Full Name"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors"
                                    onFocus={e => { e.target.style.borderColor = "hsl(var(--primary))"; e.target.style.boxShadow = "0 0 0 1px hsl(var(--primary))"; }}
                                    onBlur={e => { e.target.style.borderColor = ""; e.target.style.boxShadow = ""; }}
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                            </div>

                            {/* Graduation Year */}
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-1.5">Graduation Year <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Year of Graduation"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors"
                                    onFocus={e => { e.target.style.borderColor = "hsl(var(--primary))"; e.target.style.boxShadow = "0 0 0 1px hsl(var(--primary))"; }}
                                    onBlur={e => { e.target.style.borderColor = ""; e.target.style.boxShadow = ""; }}
                                    value={formData.graduationYear}
                                    onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Job Title */}
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-1.5">Job Title <span className="text-red-500">*</span></label>
                                <select
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors text-gray-600 bg-white"
                                    onFocus={e => { e.target.style.borderColor = "hsl(var(--primary))"; e.target.style.boxShadow = "0 0 0 1px hsl(var(--primary))"; }}
                                    onBlur={e => { e.target.style.borderColor = ""; e.target.style.boxShadow = ""; }}
                                    value={formData.jobTitle}
                                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                                >
                                    <option value="" disabled>Select Job title *</option>
                                    <option value="student">Student</option>
                                    <option value="software_engineer">Software Engineer</option>
                                    <option value="data_scientist">Data Scientist</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Program */}
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-1.5">Program <span className="text-red-500">*</span></label>
                                <select
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors text-gray-600 bg-white"
                                    onFocus={e => { e.target.style.borderColor = "hsl(var(--primary))"; e.target.style.boxShadow = "0 0 0 1px hsl(var(--primary))"; }}
                                    onBlur={e => { e.target.style.borderColor = ""; e.target.style.boxShadow = ""; }}
                                    value={formData.program}
                                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                                >
                                    <option value="" disabled>Select Program *</option>
                                    <option value="full_stack">Full Stack Development</option>
                                    <option value="data_science">Data Science &amp; ML</option>
                                    <option value="cloud">Cloud Computing</option>
                                </select>
                            </div>
                        </div>

                        {/* Mobile Number */}
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-1.5">Mobile Number <span className="text-red-500">*</span></label>
                            <div className="flex">
                                <div className="flex -mr-px bg-gray-50 border border-gray-300 border-r-0 rounded-l-lg px-3 items-center text-sm font-medium text-gray-700">
                                    <Globe2 className="h-4 w-4 mr-1 text-gray-400" />
                                    +91
                                </div>
                                <input
                                    type="tel"
                                    required
                                    placeholder="Enter your mobile number"
                                    className="w-full rounded-r-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors"
                                    onFocus={e => { e.target.style.borderColor = "hsl(var(--primary))"; e.target.style.boxShadow = "0 0 0 1px hsl(var(--primary))"; }}
                                    onBlur={e => { e.target.style.borderColor = ""; e.target.style.boxShadow = ""; }}
                                    value={formData.mobileNumber}
                                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                                />
                            </div>
                            <p className="text-xs mt-2 font-medium" style={{ color: "hsl(var(--primary))" }}>
                                You'll receive an OTP on this number for verification
                            </p>
                        </div>

                        <p className="text-[10px] text-gray-500 mt-4 leading-tight">
                            By continuing, I have read and agree to SkillMedha's <a href="#" className="font-bold underline hover:text-gray-700">Terms</a> and <a href="#" className="font-bold underline hover:text-gray-700">Privacy Policy</a>
                        </p>

                        <button
                            type="submit"
                            className="w-full text-white font-bold text-lg py-4 rounded-lg mt-6 transition-all shadow-md hover:shadow-lg hover:opacity-90 active:scale-[0.98]"
                            style={{ background: "hsl(var(--primary))" }}
                        >
                            Enroll Now
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}
