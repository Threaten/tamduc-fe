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
"[project]/app/components/icons/home-icon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeIcon",
    ()=>HomeIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function HomeIcon(param) {
    let { className = "w-4 h-4" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 11.5 12 4l9 7.5"
            }, void 0, false, {
                fileName: "[project]/app/components/icons/home-icon.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 10v10h14V10"
            }, void 0, false, {
                fileName: "[project]/app/components/icons/home-icon.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/icons/home-icon.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = HomeIcon;
var _c;
__turbopack_context__.k.register(_c, "HomeIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/StaticBreadcrumb.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StaticBreadcrumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icons$2f$home$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/icons/home-icon.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function StaticBreadcrumb(param) {
    let { items, className = "", separator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "opacity-40",
        children: "/"
    }, void 0, false, {
        fileName: "[project]/app/components/StaticBreadcrumb.tsx",
        lineNumber: 19,
        columnNumber: 15
    }, this), hideCurrentLink = true, showHomeIcon = true } = param;
    if (!items || !items.length) return null;
    const lastIndex = items.length - 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full mt-1 mb-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 flex justify-start relative z-10 overflow-x-auto",
            style: {
                WebkitOverflowScrolling: "touch"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Breadcrumb",
                className: "text-sm min-w-fit ".concat(className).trim(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "flex flex-wrap items-center gap-2",
                    children: items.map((item, idx)=>{
                        const isLast = idx === lastIndex;
                        const labelContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: isLast ? "font-medium" : "hover:underline",
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/app/components/StaticBreadcrumb.tsx",
                            lineNumber: 39,
                            columnNumber: 17
                        }, this);
                        const content = idx === 0 && showHomeIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icons$2f$home$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeIcon"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/StaticBreadcrumb.tsx",
                                    lineNumber: 46,
                                    columnNumber: 21
                                }, this),
                                labelContent
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/StaticBreadcrumb.tsx",
                            lineNumber: 45,
                            columnNumber: 19
                        }, this) : labelContent;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center gap-2",
                            children: [
                                isLast && hideCurrentLink ? content : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    prefetch: false,
                                    className: "transition-colors",
                                    children: content
                                }, void 0, false, {
                                    fileName: "[project]/app/components/StaticBreadcrumb.tsx",
                                    lineNumber: 57,
                                    columnNumber: 21
                                }, this),
                                !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "select-none",
                                    children: separator
                                }, void 0, false, {
                                    fileName: "[project]/app/components/StaticBreadcrumb.tsx",
                                    lineNumber: 65,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/app/components/StaticBreadcrumb.tsx",
                            lineNumber: 53,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/components/StaticBreadcrumb.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/StaticBreadcrumb.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/StaticBreadcrumb.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/StaticBreadcrumb.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = StaticBreadcrumb;
var _c;
__turbopack_context__.k.register(_c, "StaticBreadcrumb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/reservation/components/reservation-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReservationForm",
    ()=>ReservationForm
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
const genders = [
    {
        value: "",
        label: "Chọn giới tính (không bắt buộc)"
    },
    {
        value: "Male",
        label: "Nam"
    },
    {
        value: "Female",
        label: "Nữ"
    },
    {
        value: "Other",
        label: "Khác"
    }
];
const VN_PHONE = /^(?:\+?84|0)(3|5|7|8|9)\d{8}$/;
/**
 * Combine separate form date (YYYY-MM-DD) and time (HH:MM) strings
 * into a single Date object using the user's local timezone.
 * Also returns a "local" ISO-like string without converting to UTC
 * (so 2025-09-26 09:30 local stays 2025-09-26T09:30:00 for persistence if needed).
 */ function combineDateAndTime(dateStr, timeStr) {
    if (!dateStr || !timeStr) return null;
    const dateParts = dateStr.split("-").map(Number);
    const timeParts = timeStr.split(":").map(Number);
    if (dateParts.length !== 3 || timeParts.length < 2) return null;
    const [y, m, d] = dateParts;
    const [hh, mm] = timeParts;
    if ([
        y,
        m,
        d,
        hh,
        mm
    ].some((n)=>Number.isNaN(n)) || m < 1 || m > 12 || d < 1 || d > 31 || hh < 0 || hh > 23 || mm < 0 || mm > 59) {
        return null;
    }
    const localDate = new Date(y, m - 1, d, hh, mm, 0, 0);
    // Build a local ISO-like string without timezone shifting to UTC
    const pad = (n)=>n.toString().padStart(2, "0");
    const isoLocal = "".concat(y, "-").concat(pad(m), "-").concat(pad(d), "T").concat(pad(hh), ":").concat(pad(mm), ":00");
    return {
        date: localDate,
        isoLocal
    };
}
function ReservationForm(departmentsProp) {
    _s();
    const departments = departmentsProp.departmentsProp;
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        email: "",
        dob: "",
        gender: "",
        date: "",
        time: "",
        symptoms: "",
        department: ""
    });
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Local (non-UTC-shifted) YYYY-MM-DD for comparisons & input constraints
    const todayStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReservationForm.useMemo[todayStr]": ()=>{
            const d = new Date();
            const pad = {
                "ReservationForm.useMemo[todayStr].pad": (n)=>n.toString().padStart(2, "0")
            }["ReservationForm.useMemo[todayStr].pad"];
            return "".concat(d.getFullYear(), "-").concat(pad(d.getMonth() + 1), "-").concat(pad(d.getDate()));
        }
    }["ReservationForm.useMemo[todayStr]"], []);
    // Maximum booking horizon (e.g., 90 days from today)
    const horizonStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReservationForm.useMemo[horizonStr]": ()=>{
            const d = new Date();
            d.setDate(d.getDate() + 90);
            const pad = {
                "ReservationForm.useMemo[horizonStr].pad": (n)=>n.toString().padStart(2, "0")
            }["ReservationForm.useMemo[horizonStr].pad"];
            return "".concat(d.getFullYear(), "-").concat(pad(d.getMonth() + 1), "-").concat(pad(d.getDate()));
        }
    }["ReservationForm.useMemo[horizonStr]"], []);
    const LEAD_MINUTES = 30; // Minimum lead time buffer
    const { push } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    // Validation logic aligned with contact form style
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const validators = {
        name: (v)=>{
            const t = v.trim();
            if (!t) return "Họ và tên là bắt buộc";
            if (t.length < 2) return "Tên phải có ít nhất 2 ký tự";
            return null;
        },
        phone: (v)=>{
            const t = v.trim();
            if (!t) return "Số điện thoại là bắt buộc";
            return VN_PHONE.test(t) ? null : "Số điện thoại Việt Nam không hợp lệ";
        },
        email: (v)=>{
            const t = v.trim();
            if (!t) return ""; // optional
            return emailRegex.test(t) ? null : "Email không hợp lệ";
        },
        dob: (v)=>{
            if (!v) return "Ngày sinh là bắt buộc";
            if (v >= todayStr) return "Ngày sinh phải trước hôm nay";
            return null;
        },
        gender: ()=>null,
        date: (v)=>{
            if (!v) return "Ngày khám là bắt buộc";
            if (v < todayStr) return "Ngày phải từ hôm nay trở đi";
            if (v > horizonStr) return "Ngày không được quá 90 ngày";
            return null;
        },
        time: (v)=>{
            if (!v) return "Giờ là bắt buộc";
            return null; // combined datetime validation handled separately once both date & time exist
        },
        symptoms: (v)=>v.trim() ? null : "Triệu chứng là bắt buộc",
        department: (v)=>v ? null : "Chuyên khoa là bắt buộc"
    };
    const validateField = (name, value, full)=>{
        const fn = validators[name];
        if (!fn) return;
        const err = fn(value, full);
        setErrors((prev)=>{
            if (err) return {
                ...prev,
                [name]: err
            };
            const clone = {
                ...prev
            };
            delete clone[name];
            return clone;
        });
    };
    const validateAll = (f)=>{
        const newErr = {};
        Object.keys(f).forEach((k)=>{
            const msg = validators[k](f[k], f);
            if (msg) newErr[k] = msg;
        });
        // Combined date+time future & lead-time validation
        if (!newErr.date && !newErr.time && f.date && f.time) {
            const combined = combineDateAndTime(f.date, f.time);
            if (!combined) {
                newErr.time = "Ngày/giờ không hợp lệ";
            } else {
                const now = new Date();
                const lead = new Date(now.getTime() + LEAD_MINUTES * 60 * 1000);
                if (combined.date.getTime() <= lead.getTime()) {
                    newErr.time = "Lịch hẹn phải cách hiện tại ít nhất ".concat(LEAD_MINUTES, " phút");
                }
                // Horizon already enforced by date, but extra guard if user manipulated inputs
                const horizonDate = combineDateAndTime(horizonStr, "23:59");
                if (horizonDate && combined.date.getTime() > horizonDate.date.getTime()) {
                    newErr.date = "Lịch hẹn vượt quá giới hạn cho phép";
                }
            }
        }
        setErrors(newErr);
        return Object.keys(newErr).length === 0;
    };
    let patient;
    const checkIfCustomerExisted = async (phone)=>{
        // Placeholder: integrate API call here.
        const patientData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPatient"])("".concat(phone));
        if (!patientData.Patients.docs.length) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const newPatient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPatient"])(form.name, form.phone, form.email, form.gender, form.dob).catch((error)=>{
                console.error("Error creating patient:", error);
            });
            patient = newPatient.createPatient.id;
        } else {
            patient = patientData.Patients.docs[0].id;
        }
        return patient;
    };
    async function onSubmit(ev) {
        ev.preventDefault();
        if (submitting) return;
        // Final validation pass
        if (!validateAll(form)) return;
        const combined = combineDateAndTime(form.date, form.time);
        // Debug log removed
        if (!combined) {
            setErrors((prev)=>({
                    ...prev,
                    time: prev.time || "Ngày/giờ không hợp lệ"
                }));
            return;
        }
        // Send combined.isoLocal as datetime to backend createReservation
        setSubmitting(true);
        await checkIfCustomerExisted(form.phone);
        // Debug log removed
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createReservation"])(patient, combined.isoLocal, form.symptoms, form.department);
            setSubmitted(true);
            push("Đặt lịch thành công", "success");
        } catch (err) {
            console.error(err);
            push("Đặt lịch thất bại", "error");
        } finally{
            setSubmitting(false);
        }
    }
    if (submitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 rounded-2xl border border-black/10 dark:border-white/10 p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm",
                children: "Cảm ơn bạn, chúng tôi đã nhận được yêu cầu đặt lịch."
            }, void 0, false, {
                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                lineNumber: 264,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/reservation/components/reservation-form.tsx",
            lineNumber: 263,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        className: "mt-6 rounded-2xl border border-black/10 dark:border-white/10 p-6 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm mb-1",
                        children: "Họ và tên"
                    }, void 0, false, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm",
                        value: form.name,
                        onChange: (e)=>{
                            const value = e.target.value;
                            setForm((prev)=>({
                                    ...prev,
                                    name: value
                                }));
                            validateField("name", value, {
                                ...form,
                                name: value
                            });
                        },
                        placeholder: "Nguyen Van A",
                        required: true,
                        "aria-invalid": !!errors.name
                    }, void 0, false, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: errors.name
                    }, void 0, false, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 291,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm mb-1",
                        children: "Số điện thoại"
                    }, void 0, false, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm",
                        value: form.phone,
                        onChange: (e)=>{
                            const value = e.target.value;
                            setForm((prev)=>({
                                    ...prev,
                                    phone: value
                                }));
                            validateField("phone", value, {
                                ...form,
                                phone: value
                            });
                        },
                        placeholder: "0xxxxxxxxx or +84xxxxxxxxx",
                        required: true,
                        "aria-invalid": !!errors.phone
                    }, void 0, false, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: errors.phone
                    }, void 0, false, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 310,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm mb-1",
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        className: "w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm",
                        value: form.email,
                        onChange: (e)=>{
                            const value = e.target.value;
                            setForm((prev)=>({
                                    ...prev,
                                    email: value
                                }));
                            validateField("email", value, {
                                ...form,
                                email: value
                            });
                        },
                        placeholder: "you@example.com",
                        "aria-invalid": !!errors.email
                    }, void 0, false, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: errors.email
                    }, void 0, false, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm mb-1",
                                children: "Ngày sinh"
                            }, void 0, false, {
                                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                max: todayStr,
                                className: "w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm",
                                value: form.dob,
                                onChange: (e)=>{
                                    const value = e.target.value;
                                    setForm((prev)=>({
                                            ...prev,
                                            dob: value
                                        }));
                                    validateField("dob", value, {
                                        ...form,
                                        dob: value
                                    });
                                },
                                required: true,
                                "aria-invalid": !!errors.dob
                            }, void 0, false, {
                                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this),
                            errors.dob && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: errors.dob
                            }, void 0, false, {
                                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                lineNumber: 350,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm mb-1",
                                children: "Giới tính"
                            }, void 0, false, {
                                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                lineNumber: 354,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-full appearance-none rounded-md border border-black/10 dark:border-white/10 bg-transparent backdrop-blur px-3 py-2 pr-8 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 transition-colors",
                                        value: form.gender,
                                        onChange: (e)=>setForm({
                                                ...form,
                                                gender: e.target.value
                                            }),
                                        children: genders.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: g.value,
                                                className: "bg-white dark:bg-black text-inherit",
                                                children: g.label
                                            }, g.value, false, {
                                                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                        lineNumber: 356,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pointer-events-none absolute inset-y-0 right-2 flex items-center text-xs opacity-60",
                                        children: "▾"
                                    }, void 0, false, {
                                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                        lineNumber: 371,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm mb-1",
                                children: "Ngày"
                            }, void 0, false, {
                                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                min: todayStr,
                                max: horizonStr,
                                className: "w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm",
                                value: form.date,
                                onChange: (e)=>{
                                    const value = e.target.value;
                                    setForm((prev)=>({
                                            ...prev,
                                            date: value
                                        }));
                                    validateField("date", value, {
                                        ...form,
                                        date: value
                                    });
                                    // If time already selected, re-run combined validation
                                    if (form.time) validateAll({
                                        ...form,
                                        date: value
                                    });
                                },
                                required: true,
                                "aria-invalid": !!errors.date
                            }, void 0, false, {
                                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, this),
                            errors.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: errors.date
                            }, void 0, false, {
                                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                lineNumber: 398,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm mb-1",
                                children: "Giờ"
                            }, void 0, false, {
                                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "time",
                                className: "w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm",
                                value: form.time,
                                onChange: (e)=>{
                                    const value = e.target.value;
                                    setForm((prev)=>({
                                            ...prev,
                                            time: value
                                        }));
                                    validateField("time", value, {
                                        ...form,
                                        time: value
                                    });
                                    if (form.date) validateAll({
                                        ...form,
                                        time: value
                                    });
                                },
                                required: true,
                                "aria-invalid": !!errors.time
                            }, void 0, false, {
                                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this),
                            errors.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: errors.time
                            }, void 0, false, {
                                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                lineNumber: 417,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm mb-1",
                        children: "Triệu chứng"
                    }, void 0, false, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        rows: 3,
                        className: "w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm",
                        value: form.symptoms,
                        onChange: (e)=>{
                            const value = e.target.value;
                            setForm((prev)=>({
                                    ...prev,
                                    symptoms: value
                                }));
                            validateField("symptoms", value, {
                                ...form,
                                symptoms: value
                            });
                        },
                        placeholder: "Mô tả triệu chứng của bạn",
                        required: true,
                        "aria-invalid": !!errors.symptoms
                    }, void 0, false, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 424,
                        columnNumber: 9
                    }, this),
                    errors.symptoms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: errors.symptoms
                    }, void 0, false, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 438,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                lineNumber: 422,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm mb-1",
                        children: "Chuyên khoa"
                    }, void 0, false, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 443,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full appearance-none rounded-md border border-black/10 dark:border-white/10 bg-transparent backdrop-blur px-3 py-2 pr-8 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 transition-colors",
                                value: form.department,
                                onChange: (e)=>{
                                    const value = e.target.value;
                                    setForm((prev)=>({
                                            ...prev,
                                            department: value
                                        }));
                                    validateField("department", value, {
                                        ...form,
                                        department: value
                                    });
                                },
                                required: true,
                                "aria-invalid": !!errors.department,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        disabled: true,
                                        children: "Chọn một chuyên khoa"
                                    }, "default", false, {
                                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                        lineNumber: 459,
                                        columnNumber: 13
                                    }, this),
                                    departments.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: d.id,
                                            className: "bg-white dark:bg-black text-inherit",
                                            children: d.title
                                        }, d.slug, false, {
                                            fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                            lineNumber: 465,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pointer-events-none absolute inset-y-0 right-2 flex items-center text-xs opacity-60",
                                children: "▾"
                            }, void 0, false, {
                                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this),
                    errors.department && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: errors.department
                    }, void 0, false, {
                        fileName: "[project]/app/reservation/components/reservation-form.tsx",
                        lineNumber: 480,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                lineNumber: 442,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    disabled: submitting,
                    className: "btn-primary disabled:opacity-50",
                    children: submitting ? "Đang gửi..." : "Đặt lịch"
                }, void 0, false, {
                    fileName: "[project]/app/reservation/components/reservation-form.tsx",
                    lineNumber: 485,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/reservation/components/reservation-form.tsx",
                lineNumber: 484,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/reservation/components/reservation-form.tsx",
        lineNumber: 272,
        columnNumber: 5
    }, this);
}
_s(ReservationForm, "ZDC1VHcbGH8wNh/7RiFrq0af518=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = ReservationForm;
var _c;
__turbopack_context__.k.register(_c, "ReservationForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_324ed30b._.js.map