(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/hero-image.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function HeroImage(param) {
    let { src, fallbackSrc, fallbackRemotes, onError, ...rest } = param;
    _s();
    const [useFallback, setUseFallback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [remoteIndex, setRemoteIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroImage.useCallback[handleError]": (e)=>{
            // try next remote candidate first
            const remotes = [
                src,
                ...fallbackRemotes || []
            ];
            if (remoteIndex < remotes.length - 1) {
                setRemoteIndex({
                    "HeroImage.useCallback[handleError]": (i)=>i + 1
                }["HeroImage.useCallback[handleError]"]);
            } else if (!useFallback && fallbackSrc) {
                setUseFallback(true);
            }
            onError === null || onError === void 0 ? void 0 : onError(e);
        }
    }["HeroImage.useCallback[handleError]"], [
        remoteIndex,
        src,
        fallbackRemotes,
        useFallback,
        fallbackSrc,
        onError
    ]);
    const remotes = [
        src,
        ...fallbackRemotes || []
    ];
    const currentRemote = remotes[Math.min(remoteIndex, remotes.length - 1)];
    const finalSrc = useFallback && fallbackSrc ? fallbackSrc : currentRemote;
    var _rest_alt;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: finalSrc,
        onError: handleError,
        ...rest,
        alt: (_rest_alt = rest.alt) !== null && _rest_alt !== void 0 ? _rest_alt : ""
    }, void 0, false, {
        fileName: "[project]/app/components/hero-image.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
_s(HeroImage, "CYM5uwrWVsGNJV2GTEMPiE2EpUs=");
_c = HeroImage;
var _c;
__turbopack_context__.k.register(_c, "HeroImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/contact/components/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/queries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ContactForm() {
    _s();
    const { push } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Vietnamese mobile phone regex (accepts +84 or leading 0 followed by valid carrier prefixes)
    const vnPhoneRegex = /^(?:\+84|0)(?:3[2-9]|5[25689]|7[06-9]|8[1-689]|9[0-46-9])[0-9]{7}$/;
    const validators = {
        name: (v)=>{
            const t = v.trim();
            if (!t) return "Tên là bắt buộc";
            if (t.length <= 5) return "Tên phải có ít nhất 6 ký tự";
            return null;
        },
        email: (v)=>{
            const t = v.trim();
            if (!t) return "Email là bắt buộc";
            // Simple RFC5322-ish pattern (good enough for client-side)
            const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t);
            return ok ? null : "Định dạng email không hợp lệ";
        },
        phone: (v)=>{
            const t = v.replace(/[\s-]/g, "");
            if (!t) return "Số điện thoại là bắt buộc";
            return vnPhoneRegex.test(t) ? null : "Số điện thoại Việt Nam không hợp lệ";
        },
        subject: (v)=>{
            const t = v.trim();
            if (!t) return "Chủ đề là bắt buộc";
            return null;
        },
        message: (v)=>{
            const t = v.trim();
            if (!t) return "Nội dung là bắt buộc";
            return null;
        }
    };
    let patient;
    const checkIfCustomerExisted = async (phone)=>{
        // Placeholder: integrate API call here.
        const patientData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPatient"])("".concat(phone));
        if (!patientData.Patients.docs.length) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const newPatient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPatient"])(form.name, form.phone, form.email).catch((error)=>{
                console.error("Error creating patient:", error);
            });
            patient = newPatient.createPatient.id;
        } else {
            patient = patientData.Patients.docs[0].id;
        }
        return patient;
    };
    const validateField = (name, value)=>{
        const fn = validators[name];
        if (!fn) return;
        const error = fn(value);
        setErrors((prev)=>{
            if (error) return {
                ...prev,
                [name]: error
            };
            // Remove cleared error key; we intentionally ignore the discarded value.
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { [name]: _ignored, ...remaining } = prev;
            return remaining;
        });
    };
    const validateAll = ()=>{
        const newErrors = {};
        Object.keys(form).forEach((k)=>{
            const err = validators[k](form[k]);
            if (err) newErrors[k] = err;
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setForm((prev)=>({
                ...prev,
                [name]: value
            }));
        validateField(name, value);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (submitting) return;
        // Final validation pass
        if (!validateAll()) return;
        setSubmitting(true);
        try {
            await checkIfCustomerExisted(form.phone);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessage"])(patient, form.subject, form.message);
            setSubmitted(true);
            push("Gửi tin nhắn thành công", "success");
        } catch (err) {
            console.error(err);
            push("Gửi tin nhắn thất bại", "error");
        } finally{
            setSubmitting(false);
        }
    };
    if (submitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-black/10 dark:border-white/10 p-6 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-medium",
                    children: "Cảm ơn bạn! Tin nhắn đã được gửi."
                }, void 0, false, {
                    fileName: "[project]/app/contact/components/ContactForm.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "mt-4 btn-secondary text-xs",
                    onClick: ()=>{
                        setSubmitted(false);
                        setForm({
                            name: "",
                            email: "",
                            phone: "",
                            subject: "",
                            message: ""
                        });
                        setErrors({});
                    },
                    type: "button",
                    children: "Gửi tin nhắn khác"
                }, void 0, false, {
                    fileName: "[project]/app/contact/components/ContactForm.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/contact/components/ContactForm.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "rounded-2xl border border-black/10 dark:border-white/10 p-6 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm mb-1",
                        htmlFor: "contact-name",
                        children: "Họ và tên"
                    }, void 0, false, {
                        fileName: "[project]/app/contact/components/ContactForm.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "contact-name",
                        name: "name",
                        value: form.name,
                        onChange: handleChange,
                        className: "w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm",
                        placeholder: "Tên của bạn",
                        required: true,
                        "aria-invalid": !!errors.name
                    }, void 0, false, {
                        fileName: "[project]/app/contact/components/ContactForm.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-red-600 dark:text-red-400",
                        children: errors.name
                    }, void 0, false, {
                        fileName: "[project]/app/contact/components/ContactForm.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/contact/components/ContactForm.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm mb-1",
                        htmlFor: "contact-email",
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/app/contact/components/ContactForm.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "contact-email",
                        type: "email",
                        name: "email",
                        value: form.email,
                        onChange: handleChange,
                        className: "w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm",
                        placeholder: "ban@vidu.com",
                        required: true,
                        "aria-invalid": !!errors.email
                    }, void 0, false, {
                        fileName: "[project]/app/contact/components/ContactForm.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-red-600 dark:text-red-400",
                        children: errors.email
                    }, void 0, false, {
                        fileName: "[project]/app/contact/components/ContactForm.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/contact/components/ContactForm.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm mb-1",
                        htmlFor: "contact-phone",
                        children: "Số điện thoại"
                    }, void 0, false, {
                        fileName: "[project]/app/contact/components/ContactForm.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "contact-phone",
                        name: "phone",
                        value: form.phone,
                        onChange: handleChange,
                        className: "w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm",
                        placeholder: "0xx… or +84…",
                        required: true,
                        "aria-invalid": !!errors.phone
                    }, void 0, false, {
                        fileName: "[project]/app/contact/components/ContactForm.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-red-600 dark:text-red-400",
                        children: errors.phone
                    }, void 0, false, {
                        fileName: "[project]/app/contact/components/ContactForm.tsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/contact/components/ContactForm.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm mb-1",
                        htmlFor: "contact-subject",
                        children: "Chủ đề"
                    }, void 0, false, {
                        fileName: "[project]/app/contact/components/ContactForm.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "contact-subject",
                        name: "subject",
                        value: form.subject,
                        onChange: handleChange,
                        className: "w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm",
                        placeholder: "Chủ đề",
                        required: true,
                        "aria-invalid": !!errors.subject
                    }, void 0, false, {
                        fileName: "[project]/app/contact/components/ContactForm.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    errors.subject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-red-600 dark:text-red-400",
                        children: errors.subject
                    }, void 0, false, {
                        fileName: "[project]/app/contact/components/ContactForm.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/contact/components/ContactForm.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm mb-1",
                        htmlFor: "contact-message",
                        children: "Nội dung"
                    }, void 0, false, {
                        fileName: "[project]/app/contact/components/ContactForm.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "contact-message",
                        name: "message",
                        value: form.message,
                        onChange: handleChange,
                        className: "w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm",
                        rows: 4,
                        placeholder: "Chúng tôi có thể giúp gì cho bạn?",
                        required: true,
                        "aria-invalid": !!errors.message
                    }, void 0, false, {
                        fileName: "[project]/app/contact/components/ContactForm.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    errors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-red-600 dark:text-red-400",
                        children: errors.message
                    }, void 0, false, {
                        fileName: "[project]/app/contact/components/ContactForm.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/contact/components/ContactForm.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: submitting,
                className: "btn-primary disabled:opacity-55",
                children: submitting ? "Đang gửi..." : "Gửi"
            }, void 0, false, {
                fileName: "[project]/app/contact/components/ContactForm.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/contact/components/ContactForm.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, this);
}
_s(ContactForm, "U0hlUv3Rs4q2ZHTec6/8GQCFXSM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_f9f42ece._.js.map