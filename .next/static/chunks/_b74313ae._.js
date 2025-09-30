(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ThemeToggle() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            try {
                const saved = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
                setTheme(saved);
            } catch (e) {}
        }
    }["ThemeToggle.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            document.documentElement.setAttribute("data-theme", theme);
            // Also maintain Tailwind's dark class for utilities
            if (theme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            try {
                localStorage.setItem("theme", theme);
            } catch (e) {}
        }
    }["ThemeToggle.useEffect"], [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-label": "Toggle theme",
        className: "rounded-full border border-black/30 dark:border-white/40 px-3 py-2 text-sm hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/50 dark:focus-visible:ring-white/60",
        onClick: ()=>setTheme((t)=>t === "light" ? "dark" : "light"),
        children: theme === "dark" ? "☀️" : "🌙"
    }, void 0, false, {
        fileName: "[project]/app/components/theme-toggle.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "+6C7zX0KFXKdtXxqQH7LMHLz9vo=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FOOTER_DEPARTMENT_LINKS",
    ()=>FOOTER_DEPARTMENT_LINKS,
    "FOOTER_RESOURCE_LINKS",
    ()=>FOOTER_RESOURCE_LINKS,
    "NAV_LINKS",
    ()=>NAV_LINKS
]);
const NAV_LINKS = [
    {
        href: "/about",
        label: "Giới thiệu"
    },
    {
        href: "/teams",
        label: "Đội ngũ"
    },
    {
        href: "/departments",
        label: "Chuyên khoa"
    },
    {
        href: "/services",
        label: "Dịch vụ"
    },
    {
        href: "/gallery",
        label: "Thư viện"
    },
    {
        href: "/blogs",
        label: "Bài viết"
    },
    {
        href: "/contact",
        label: "Liên hệ"
    }
];
const FOOTER_DEPARTMENT_LINKS = [
    {
        href: "/departments/cardiology",
        label: "Tim mạch"
    },
    {
        href: "/departments/pediatrics",
        label: "Nhi"
    },
    {
        href: "/departments/orthopedics",
        label: "Chấn thương chỉnh hình"
    },
    {
        href: "/departments/dermatology",
        label: "Da liễu"
    },
    {
        href: "/departments/neurology",
        label: "Thần kinh"
    }
];
const FOOTER_RESOURCE_LINKS = [
    {
        href: "/blogs",
        label: "Bài viết"
    },
    {
        href: "/faq",
        label: "Hỏi đáp"
    },
    {
        href: "/emergency",
        label: "Cấp cứu"
    },
    {
        href: "/reservation",
        label: "Đặt lịch"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/MobileMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MobileMenu() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Mark mounted to avoid hydration mismatch for dynamic style changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileMenu.useEffect": ()=>{
            setMounted(true);
        }
    }["MobileMenu.useEffect"], []);
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MobileMenu.useCallback[close]": ()=>setOpen(false)
    }["MobileMenu.useCallback[close]"], []);
    // Close on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileMenu.useEffect": ()=>{
            close();
        }
    }["MobileMenu.useEffect"], [
        pathname,
        close
    ]);
    // Prevent body scroll when open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileMenu.useEffect": ()=>{
            if (open) {
                const original = document.body.style.overflow;
                document.body.style.overflow = "hidden";
                return ({
                    "MobileMenu.useEffect": ()=>{
                        document.body.style.overflow = original;
                    }
                })["MobileMenu.useEffect"];
            }
        }
    }["MobileMenu.useEffect"], [
        open
    ]);
    // Detect theme changes (mirrors logic used in Navbar)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileMenu.useEffect": ()=>{
            const el = document.documentElement;
            const compute = {
                "MobileMenu.useEffect.compute": ()=>{
                    const attr = el.getAttribute("data-theme");
                    if (attr) return attr === "dark";
                    return el.classList.contains("dark");
                }
            }["MobileMenu.useEffect.compute"];
            setIsDark(compute());
            const observer = new MutationObserver({
                "MobileMenu.useEffect": ()=>setIsDark(compute())
            }["MobileMenu.useEffect"]);
            observer.observe(el, {
                attributes: true,
                attributeFilter: [
                    "class",
                    "data-theme"
                ]
            });
            return ({
                "MobileMenu.useEffect": ()=>observer.disconnect()
            })["MobileMenu.useEffect"];
        }
    }["MobileMenu.useEffect"], []);
    // Close on ESC
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileMenu.useEffect": ()=>{
            const onKey = {
                "MobileMenu.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") close();
                }
            }["MobileMenu.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "MobileMenu.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["MobileMenu.useEffect"];
        }
    }["MobileMenu.useEffect"], [
        close
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": open ? "Đóng menu" : "Mở menu",
                "aria-expanded": open,
                "aria-controls": "mobile-menu-panel",
                className: "md:hidden inline-flex items-center justify-center rounded-md border border-black/30 dark:border-white/40 p-2 text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10",
                onClick: ()=>setOpen((o)=>!o),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Menu"
                    }, void 0, false, {
                        fileName: "[project]/app/components/MobileMenu.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "transition-transform",
                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M6 6l12 12M6 18L18 6"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MobileMenu.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "3",
                                    y1: "6",
                                    x2: "21",
                                    y2: "6"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/MobileMenu.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "3",
                                    y1: "12",
                                    x2: "21",
                                    y2: "12"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/MobileMenu.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "3",
                                    y1: "18",
                                    x2: "21",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/MobileMenu.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/app/components/MobileMenu.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/MobileMenu.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden",
                onClick: close,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/app/components/MobileMenu.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                id: "mobile-menu-panel",
                className: "fixed z-50 top-0 left-0 h-full w-72 max-w-[80%] md:hidden transform border-r shadow-xl transition-transform duration-300 ease-out flex flex-col border-black/30 dark:border-white/40 ".concat(open ? "translate-x-0" : "-translate-x-full"),
                style: mounted && isDark !== null ? {
                    backgroundColor: isDark ? "#000000" : "#ffffff"
                } : undefined,
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Điều hướng di động",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-3 border-b border-black/30 dark:border-white/40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "font-semibold tracking-tight text-base",
                                onClick: close,
                                "aria-label": "Trang chủ",
                                children: "Tam Duc Clinic"
                            }, void 0, false, {
                                fileName: "[project]/app/components/MobileMenu.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Đóng menu",
                                className: "rounded-md p-2",
                                onClick: close,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 6l12 12M6 18L18 6"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/MobileMenu.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/MobileMenu.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/MobileMenu.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/MobileMenu.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 overflow-y-auto px-4 py-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((l)=>{
                                const isActive = pathname === l.href || l.href !== "/" && (pathname === null || pathname === void 0 ? void 0 : pathname.startsWith(l.href));
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: l.href,
                                        onClick: close,
                                        className: "block rounded px-3 py-2 text-sm font-medium transition-colors ".concat(isActive ? "bg-black/5 dark:bg-white/10 underline underline-offset-4" : "hover:bg-black/5 dark:hover:bg-white/10"),
                                        "aria-current": isActive ? "page" : undefined,
                                        children: l.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/MobileMenu.tsx",
                                        lineNumber: 153,
                                        columnNumber: 19
                                    }, this)
                                }, l.href, false, {
                                    fileName: "[project]/app/components/MobileMenu.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/components/MobileMenu.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/MobileMenu.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-4 border-t border-black/30 dark:border-white/40 flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/components/MobileMenu.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/reservation",
                                onClick: close,
                                className: "btn-secondary",
                                children: "Đặt lịch"
                            }, void 0, false, {
                                fileName: "[project]/app/components/MobileMenu.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/MobileMenu.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/MobileMenu.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(MobileMenu, "Gc0YESbCCl9+mXl9/4hx5WqrTGI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = MobileMenu;
var _c;
__turbopack_context__.k.register(_c, "MobileMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MobileMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>setScrolled(window.scrollY > 0)
            }["Navbar.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // Detect theme (prefer data-theme; fallback to html.dark class).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const el = document.documentElement;
            const compute = {
                "Navbar.useEffect.compute": ()=>{
                    const attr = el.getAttribute("data-theme");
                    if (attr) return attr === "dark";
                    return el.classList.contains("dark");
                }
            }["Navbar.useEffect.compute"];
            setIsDark(compute());
            const observer = new MutationObserver({
                "Navbar.useEffect": ()=>setIsDark(compute())
            }["Navbar.useEffect"]);
            observer.observe(el, {
                attributes: true,
                attributeFilter: [
                    "class",
                    "data-theme"
                ]
            });
            return ({
                "Navbar.useEffect": ()=>observer.disconnect()
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 transition-colors duration-200 " + (scrolled ? "bg-white border-b border-black/30 dark:border-white/40" : "bg-transparent border-b border-transparent"),
        style: {
            backgroundColor: scrolled ? isDark ? "#000000" : "#ffffff" : undefined
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 py-3 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "font-semibold tracking-tight text-lg",
                    "aria-label": "Trang chủ",
                    children: "Tam Duc Clinic"
                }, void 0, false, {
                    fileName: "[project]/app/components/Navbar.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden md:flex gap-6 text-sm",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((l)=>{
                        const isActive = pathname === l.href || l.href !== "/" && (pathname === null || pathname === void 0 ? void 0 : pathname.startsWith(l.href));
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "transition-colors hover:opacity-70 " + (isActive ? "underline underline-offset-4" : ""),
                            href: l.href,
                            "aria-current": isActive ? "page" : undefined,
                            children: l.label
                        }, l.href, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 70,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/components/Navbar.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>router.push("/reservation"),
                            className: "hidden sm:inline-flex btn-secondary",
                            children: "Đặt lịch"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Navbar.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Navbar.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(Navbar, "Phm4AQlxpPX5Ti+S9UeC/73ZOqI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/breadcrumb-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BreadcrumbProvider",
    ()=>BreadcrumbProvider,
    "SetBreadcrumb",
    ()=>SetBreadcrumb,
    "SetBreadcrumbItems",
    ()=>SetBreadcrumbItems,
    "useBreadcrumbOverrides",
    ()=>useBreadcrumbOverrides
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
const BreadcrumbContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function BreadcrumbProvider(param) {
    let { children } = param;
    _s();
    const [overrides, setOverridesState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [customItems, setCustomItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const setOverrides = (entries)=>{
        setOverridesState((prev)=>{
            const next = {
                ...prev
            };
            for (const e of entries)next[e.path] = e.label;
            return next;
        });
    };
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BreadcrumbProvider.useMemo[value]": ()=>({
                overrides,
                setOverrides,
                customItems,
                setCustomItems
            })
    }["BreadcrumbProvider.useMemo[value]"], [
        overrides,
        customItems
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BreadcrumbContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/breadcrumb-provider.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(BreadcrumbProvider, "nAc/LN5ceU56ByuA+3TkhttLlTY=");
_c = BreadcrumbProvider;
function useBreadcrumbOverrides() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BreadcrumbContext);
    if (!ctx) throw new Error("useBreadcrumbOverrides must be used within BreadcrumbProvider");
    return ctx;
}
_s1(useBreadcrumbOverrides, "/dMy7t63NXD4eYACoT93CePwGrg=");
function SetBreadcrumb(param) {
    let { entries } = param;
    _s2();
    const { setOverrides } = useBreadcrumbOverrides();
    // Serialize entries to detect real changes (order + content)
    const signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SetBreadcrumb.useMemo[signature]": ()=>JSON.stringify(entries.map({
                "SetBreadcrumb.useMemo[signature]": (e)=>({
                        path: e.path,
                        label: e.label
                    })
            }["SetBreadcrumb.useMemo[signature]"]))
    }["SetBreadcrumb.useMemo[signature]"], [
        entries
    ]);
    const [lastSig, setLastSig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SetBreadcrumb.useEffect": ()=>{
            if (lastSig === signature) return; // no real change
            setOverrides(entries);
            setLastSig(signature);
        }
    }["SetBreadcrumb.useEffect"], [
        signature,
        entries,
        lastSig,
        setOverrides
    ]);
    return null;
}
_s2(SetBreadcrumb, "hJPpCqgIHvWeixZW5Lqz4t6Z67c=", false, function() {
    return [
        useBreadcrumbOverrides
    ];
});
_c1 = SetBreadcrumb;
function SetBreadcrumbItems(param) {
    let { items } = param;
    _s3();
    const { setCustomItems } = useBreadcrumbOverrides();
    const signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SetBreadcrumbItems.useMemo[signature]": ()=>JSON.stringify(items.map({
                "SetBreadcrumbItems.useMemo[signature]": (i)=>({
                        href: i.href,
                        label: i.label
                    })
            }["SetBreadcrumbItems.useMemo[signature]"]))
    }["SetBreadcrumbItems.useMemo[signature]"], [
        items
    ]);
    const [last, setLast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SetBreadcrumbItems.useEffect": ()=>{
            if (last === signature) return;
            setCustomItems(items);
            setLast(signature);
            return ({
                "SetBreadcrumbItems.useEffect": ()=>{
                    // Clear on unmount (page boundary) to avoid bleeding into other pages
                    setCustomItems(null);
                }
            })["SetBreadcrumbItems.useEffect"];
        }
    }["SetBreadcrumbItems.useEffect"], [
        signature,
        items,
        last,
        setCustomItems
    ]);
    return null;
}
_s3(SetBreadcrumbItems, "b0wKNnd4lZjx4T8LD6Jd9cd6is4=", false, function() {
    return [
        useBreadcrumbOverrides
    ];
});
_c2 = SetBreadcrumbItems;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "BreadcrumbProvider");
__turbopack_context__.k.register(_c1, "SetBreadcrumb");
__turbopack_context__.k.register(_c2, "SetBreadcrumbItems");
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
"[project]/app/components/Breadcrumb.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumb",
    ()=>Breadcrumb,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icons$2f$home$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/icons/home-icon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Simple utility to title-case a slug (cardiology -> Cardiology)
function titleCase(slug) {
    return slug.split(/[-_]/).map((s)=>s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
}
function Breadcrumb(param) {
    let { items, currentLabel, className = "", separator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "opacity-40",
        children: "/"
    }, void 0, false, {
        fileName: "[project]/app/components/Breadcrumb.tsx",
        lineNumber: 37,
        columnNumber: 15
    }, this), hideCurrentLink = true, showHomeIcon = true, homeIcon } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const derived = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Breadcrumb.useMemo[derived]": ()=>{
            if (items && items.length) return items;
            if (!pathname) return [];
            // Build automatic breadcrumbs from pathname, mapping first segment using NAV_LINKS labels.
            const segments = pathname.split("?")[0].split("#")[0].split("/").filter(Boolean);
            const crumbs = [
                {
                    href: "/",
                    label: "Trang chủ"
                }
            ];
            let cumulative = "";
            segments.forEach({
                "Breadcrumb.useMemo[derived]": (seg, i)=>{
                    cumulative += "/".concat(seg);
                    // Try to find a nav link label for the cumulative path or root segment path
                    const match = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].find({
                        "Breadcrumb.useMemo[derived].match": (l)=>l.href === "/".concat(seg) || l.href === cumulative
                    }["Breadcrumb.useMemo[derived].match"]);
                    let label = (match === null || match === void 0 ? void 0 : match.label) || titleCase(seg);
                    // Map common English auto labels to Vietnamese if not already translated via NAV_LINKS
                    const map = {
                        home: "Trang chủ",
                        departments: "Chuyên khoa",
                        department: "Chuyên khoa",
                        services: "Dịch vụ",
                        service: "Dịch vụ",
                        gallery: "Thư viện hình ảnh",
                        blogs: "Bài viết",
                        blog: "Bài viết",
                        contact: "Liên hệ",
                        reservation: "Đặt lịch khám",
                        teams: "Đội ngũ",
                        team: "Đội ngũ",
                        faq: "Hỏi đáp",
                        emergency: "Cấp cứu"
                    };
                    const lower = label.toLowerCase();
                    if (map[lower]) label = map[lower];
                    // If it's the last segment and a currentLabel override is provided, use that.
                    if (i === segments.length - 1 && currentLabel) label = currentLabel;
                    crumbs.push({
                        href: cumulative,
                        label
                    });
                }
            }["Breadcrumb.useMemo[derived]"]);
            return crumbs;
        }
    }["Breadcrumb.useMemo[derived]"], [
        items,
        pathname,
        currentLabel
    ]);
    if (!derived.length) return null;
    const lastIndex = derived.length - 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Breadcrumb",
        className: "text-sm ".concat(className).trim(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            className: "flex flex-wrap items-w gap-2",
            children: derived.map((item, idx)=>{
                const isLast = idx === lastIndex;
                const labelContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: isLast ? "font-medium" : "hover:underline",
                    children: item.label
                }, void 0, false, {
                    fileName: "[project]/app/components/Breadcrumb.tsx",
                    lineNumber: 97,
                    columnNumber: 13
                }, this);
                const content = idx === 0 && showHomeIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1",
                    children: [
                        homeIcon || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icons$2f$home$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeIcon"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Breadcrumb.tsx",
                            lineNumber: 104,
                            columnNumber: 30
                        }, this),
                        labelContent
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Breadcrumb.tsx",
                    lineNumber: 103,
                    columnNumber: 15
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
                            fileName: "[project]/app/components/Breadcrumb.tsx",
                            lineNumber: 115,
                            columnNumber: 17
                        }, this),
                        !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "select-none",
                            children: separator
                        }, void 0, false, {
                            fileName: "[project]/app/components/Breadcrumb.tsx",
                            lineNumber: 123,
                            columnNumber: 27
                        }, this)
                    ]
                }, item.href, true, {
                    fileName: "[project]/app/components/Breadcrumb.tsx",
                    lineNumber: 111,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/app/components/Breadcrumb.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Breadcrumb.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(Breadcrumb, "nNpPL//HtpoESnpI/63jLgP9DNg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Breadcrumb;
const __TURBOPACK__default__export__ = Breadcrumb;
var _c;
__turbopack_context__.k.register(_c, "Breadcrumb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/AutoBreadcrumb.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoBreadcrumb",
    ()=>AutoBreadcrumb,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Breadcrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Breadcrumb.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$breadcrumb$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/breadcrumb-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AutoBreadcrumb() {
    var _items_;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { overrides, customItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$breadcrumb$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBreadcrumbOverrides"])();
    const [dynamicTitle, setDynamicTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Allow dynamic document.title extraction ONLY for certain detail pages (e.g. blog posts)
    // to avoid overriding explicitly provided breadcrumb labels (like staff names).
    const DYNAMIC_TITLE_ALLOWED_PREFIXES = [
        "/blogs/"
    ];
    const isStaffRoute = /^\/teams\/[^/]+$/.test(pathname) || /^\/departments\/[^/]+\/staffs\/[^/]+$/.test(pathname);
    const isEligibleForDynamicTitle = DYNAMIC_TITLE_ALLOWED_PREFIXES.some((p)=>pathname.startsWith(p)) && !isStaffRoute;
    const GENERIC_TITLES = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "AutoBreadcrumb.useMemo[GENERIC_TITLES]": ()=>new Set([
                "Team",
                "Our Team",
                "Departments",
                "Department",
                "Staff",
                "Staffs",
                "Home",
                // Vietnamese equivalents
                "Đội ngũ",
                "Chuyên khoa",
                "Nhân sự",
                "Trang chủ"
            ])
    }["AutoBreadcrumb.useMemo[GENERIC_TITLES]"], []);
    const disabled = !pathname || pathname === "/"; // no breadcrumb on home
    const rawSegments = pathname.split("?")[0].split("#")[0].split("/").filter(Boolean);
    // Ignore structural segments that shouldn't appear as their own breadcrumb level.
    const segments = rawSegments.filter((seg)=>![
            "staffs"
        ].includes(seg));
    const items = [
        {
            href: "/",
            label: "Trang chủ"
        }
    ];
    let cumulative = "";
    segments.forEach((seg)=>{
        cumulative += "/".concat(seg);
        const label = overrides[cumulative] || seg.replace(/[-_]/g, " ").replace(/\b\w/g, (c)=>c.toUpperCase());
        items.push({
            href: cumulative,
            label
        });
    });
    // Attempt dynamic document title extraction for last segment if not overridden
    const lastPath = (_items_ = items[items.length - 1]) === null || _items_ === void 0 ? void 0 : _items_.href;
    const lastHasOverride = !!(lastPath && overrides[lastPath]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutoBreadcrumb.useEffect": ()=>{
            if (disabled || lastHasOverride || customItems) {
                setDynamicTitle(null);
                return;
            }
            if (!isEligibleForDynamicTitle) {
                setDynamicTitle(null);
                return;
            }
            const raw = document.title;
            if (!raw) return;
            const baseSplit = raw.split("—");
            const candidate = baseSplit[0].trim();
            if (candidate && candidate.length > 0 && candidate.toLowerCase() !== "healthplus clinic" && !GENERIC_TITLES.has(candidate)) {
                setDynamicTitle(candidate);
            } else {
                setDynamicTitle(null);
            }
        }
    }["AutoBreadcrumb.useEffect"], [
        pathname,
        lastHasOverride,
        disabled,
        customItems,
        isEligibleForDynamicTitle,
        GENERIC_TITLES
    ]);
    let finalItems = items.map((it, idx)=>{
        if (idx === items.length - 1 && dynamicTitle && !lastHasOverride) {
            return {
                ...it,
                label: dynamicTitle
            };
        }
        return it;
    });
    if (customItems && customItems.length) {
        // Ensure Home is present at start; if not, add it.
        const withHome = customItems[0].href === "/" ? customItems : [
            {
                href: "/",
                label: "Trang chủ"
            },
            ...customItems
        ];
        finalItems = withHome;
    }
    if (disabled) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full mt-1 mb-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 flex justify-start relative z-10 overflow-x-auto",
            style: {
                WebkitOverflowScrolling: "touch"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-fit",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Breadcrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    items: finalItems,
                    hideCurrentLink: true,
                    showHomeIcon: true
                }, void 0, false, {
                    fileName: "[project]/app/components/AutoBreadcrumb.tsx",
                    lineNumber: 122,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/AutoBreadcrumb.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/AutoBreadcrumb.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/AutoBreadcrumb.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(AutoBreadcrumb, "HlZl3VzuCcJLEPdCEyNXqYma9NA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$breadcrumb$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBreadcrumbOverrides"]
    ];
});
_c = AutoBreadcrumb;
const __TURBOPACK__default__export__ = AutoBreadcrumb;
var _c;
__turbopack_context__.k.register(_c, "AutoBreadcrumb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "ToastViewport",
    ()=>ToastViewport,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ToastProvider(param) {
    let { children } = param;
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const push = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[push]": function(message) {
            let type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "info", timeout = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3500;
            const id = Math.random().toString(36).slice(2);
            setItems({
                "ToastProvider.useCallback[push]": (prev)=>[
                        ...prev,
                        {
                            id,
                            message,
                            type,
                            timeout
                        }
                    ]
            }["ToastProvider.useCallback[push]"]);
            if (timeout > 0) {
                setTimeout({
                    "ToastProvider.useCallback[push]": ()=>{
                        setItems({
                            "ToastProvider.useCallback[push]": (prev)=>prev.filter({
                                    "ToastProvider.useCallback[push]": (t)=>t.id !== id
                                }["ToastProvider.useCallback[push]"])
                        }["ToastProvider.useCallback[push]"]);
                    }
                }["ToastProvider.useCallback[push]"], timeout);
            }
        }
    }["ToastProvider.useCallback[push]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            push
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastViewport, {
                items: items,
                setItems: setItems
            }, void 0, false, {
                fileName: "[project]/app/components/toast.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/toast.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(ToastProvider, "iym/xze4sPlia82x/MCWv/zoz9Y=");
_c = ToastProvider;
function useToast() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!ctx) throw new Error("useToast must be used within ToastProvider");
    return ctx;
}
_s1(useToast, "/dMy7t63NXD4eYACoT93CePwGrg=");
function ToastViewport(param) {
    let { items, setItems } = param;
    // If used via provider's injected viewport, items prop populated; otherwise no-op.
    const list = items || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-6e51b6031d930bff" + " " + "fixed z-50 bottom-4 right-4 flex flex-col gap-2 w-80 max-w-[calc(100%-1rem)]",
        children: [
            list.map((t)=>{
                // Solid, non-transparent backgrounds for all themes (better visibility on light & dark).
                // Each type gets a saturated background with white text and a slightly brighter accent bar.
                let toneClasses = "";
                let accentColor = "";
                let icon = "";
                switch(t.type){
                    case "success":
                        toneClasses = "bg-emerald-600 text-white border-emerald-500 dark:bg-emerald-600 dark:border-emerald-500";
                        accentColor = "bg-emerald-400";
                        icon = "✓";
                        break;
                    case "error":
                        toneClasses = "bg-red-600 text-white border-red-500 dark:bg-red-600 dark:border-red-500";
                        accentColor = "bg-red-400";
                        icon = "⚠";
                        break;
                    default:
                        toneClasses = "bg-sky-600 text-white border-sky-500 dark:bg-sky-600 dark:border-sky-500";
                        accentColor = "bg-sky-400";
                        icon = "ℹ";
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: t.type === "error" ? "alert" : "status",
                    "aria-live": t.type === "error" ? "assertive" : "polite",
                    "aria-atomic": "true",
                    className: "jsx-6e51b6031d930bff" + " " + "group relative overflow-hidden rounded-lg border px-4 py-3 text-sm shadow-[0_4px_14px_-2px_rgba(0,0,0,0.25),0_2px_6px_-2px_rgba(0,0,0,0.15)] flex items-start gap-3 animate-fade-in focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black/40 dark:focus-within:ring-white/40 ".concat(toneClasses),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            className: "jsx-6e51b6031d930bff" + " " + "absolute left-0 top-0 h-full w-1.5 ".concat(accentColor)
                        }, void 0, false, {
                            fileName: "[project]/app/components/toast.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "jsx-6e51b6031d930bff" + " " + "mt-0.5 text-base leading-none select-none shrink-0",
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/app/components/toast.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "jsx-6e51b6031d930bff" + " " + "flex-1 leading-relaxed font-medium tracking-tight",
                            children: t.message
                        }, void 0, false, {
                            fileName: "[project]/app/components/toast.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this),
                        setItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setItems((prev)=>prev.filter((i)=>i.id !== t.id)),
                            "aria-label": "Close notification",
                            className: "jsx-6e51b6031d930bff" + " " + "opacity-70 hover:opacity-100 active:scale-95 transition text-xs mt-0.5 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-current/40 rounded",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/app/components/toast.tsx",
                            lineNumber: 100,
                            columnNumber: 15
                        }, this)
                    ]
                }, t.id, true, {
                    fileName: "[project]/app/components/toast.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "6e51b6031d930bff",
                children: "@keyframes fade-in{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in.jsx-6e51b6031d930bff{animation:.25s forwards fade-in}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/toast.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c1 = ToastViewport;
var _c, _c1;
__turbopack_context__.k.register(_c, "ToastProvider");
__turbopack_context__.k.register(_c1, "ToastViewport");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/queries.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CREATE_PATIENT",
    ()=>CREATE_PATIENT,
    "client",
    ()=>client,
    "createMessage",
    ()=>createMessage,
    "createPatient",
    ()=>createPatient,
    "createReservation",
    ()=>createReservation,
    "getAbout",
    ()=>getAbout,
    "getBlog",
    ()=>getBlog,
    "getBlogs",
    ()=>getBlogs,
    "getDepartment",
    ()=>getDepartment,
    "getDepartments",
    ()=>getDepartments,
    "getGalleries",
    ()=>getGalleries,
    "getGeneral",
    ()=>getGeneral,
    "getHeroes",
    ()=>getHeroes,
    "getPatient",
    ()=>getPatient,
    "getServices",
    ()=>getServices,
    "getStaff",
    ()=>getStaff,
    "getStaffs",
    ()=>getStaffs,
    "httpLink",
    ()=>httpLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/core/ApolloClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$inMemoryCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/cache/inmemory/inMemoryCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/graphql-tag/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$HttpLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/http/HttpLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/core/ApolloLink.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  query getGeneral {\n    GeneralInformation {\n      name\n      logo {\n        url\n      }\n      address\n      hotline1\n      hotline2\n      emergencyHotline\n      email\n      operatingHours\n      socials {\n        name\n        url\n      }\n      mapLat\n      mapLong\n    }\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  query getHeroes {\n    SectionHero {\n      homeHero {\n        url\n      }\n      homeSlogan\n      homeDescription\n      aboutusHero {\n        url\n      }\n      aboutUsSlogan\n      aboutUsDescription\n      teamHero {\n        url\n      }\n      teamSlogan\n      teamDescription\n      departmentHero {\n        url\n      }\n      departmentSlogan\n      departmentDescription\n      serviceHero {\n        url\n      }\n      serviceSlogan\n      serviceDescription\n      blogHero {\n        url\n      }\n      blogSlogan\n      blogDescription\n      reservationHero {\n        url\n      }\n      reservationSlogan\n      reservationDescription\n      contactHero {\n        url\n      }\n      contactSlogan\n      contactDescription\n      galleryHero {\n        url\n      }\n      gallerySlogan\n      galleryDescription\n    }\n  }\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  query getAbout {\n    OurStory {\n      content\n    }\n  }\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  query getDepartments($deptLimit: Int = 100, $staffPreviewLimit: Int = 100) {\n    Departments(limit: $deptLimit) {\n      docs {\n        id\n        slug\n        title\n        about\n        icons {\n          url\n        }\n        staffs(\n          where: {\n            status: { equals: Active }\n            AND: { role: { equals: Doctor } }\n          }\n          limit: $staffPreviewLimit\n        ) {\n          docs {\n            slug\n          }\n        }\n      }\n      totalDocs\n      limit\n    }\n  }\n"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  query getDepaertment($slug: String, $staffLimit: Int = 100) {\n    Departments(where: { slug: { equals: $slug } }) {\n      docs {\n        slug\n        heroImage {\n          url\n        }\n        title\n        about\n        icons {\n          url\n        }\n        phone\n        email\n        address\n        hours\n\n        staffs(where: { status: { equals: Active } }, limit: $staffLimit) {\n          docs {\n            specialty\n            slug\n            name\n            role\n            photo {\n              url\n            }\n            years\n            languages {\n              value\n            }\n\n            schedule {\n              day\n              time\n            }\n          }\n        }\n        services {\n          value\n        }\n        conditions {\n          value\n        }\n      }\n    }\n  }\n"
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
function _templateObject5() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  query getServices($limit: Int = 100, $page: Int = 1) {\n    Services(limit: $limit, page: $page) {\n      docs {\n        id\n        title\n        desc\n        prep\n        icon {\n          url\n        }\n        items {\n          value\n        }\n      }\n      totalDocs\n      totalPages\n      page\n      limit\n      hasNextPage\n      hasPrevPage\n    }\n  }\n"
    ]);
    _templateObject5 = function() {
        return data;
    };
    return data;
}
function _templateObject6() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  query getStaffs($limit: Int = 100, $page: Int = 1) {\n    Staffs(where: { status: { equals: Active } }, limit: $limit, page: $page) {\n      docs {\n        id\n        slug\n        name\n        role\n        specialty\n        years\n        languages {\n          value\n        }\n        department {\n          title\n          slug\n        }\n        photo {\n          url\n        }\n      }\n      totalDocs\n      totalPages\n      page\n      limit\n      hasNextPage\n      hasPrevPage\n    }\n  }\n"
    ]);
    _templateObject6 = function() {
        return data;
    };
    return data;
}
function _templateObject7() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  query getStaff($slug: String) {\n    Staffs(where: { slug: { equals: $slug } }) {\n      docs {\n        name\n        role\n        specialty\n        bio\n        years\n        education {\n          value\n        }\n        languages {\n          value\n        }\n        department {\n          title\n          slug\n        }\n        schedule {\n          day\n          time\n        }\n        photo {\n          url\n        }\n      }\n    }\n  }\n"
    ]);
    _templateObject7 = function() {
        return data;
    };
    return data;
}
function _templateObject8() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  query getPatient($phone: String) {\n    Patients(where: { phone: { equals: $phone } }) {\n      docs {\n        id\n        fullName\n        phone\n        email\n      }\n    }\n  }\n"
    ]);
    _templateObject8 = function() {
        return data;
    };
    return data;
}
function _templateObject9() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  query getGalleries($limit: Int = 100, $page: Int = 1) {\n    Galleries(limit: $limit, page: $page) {\n      docs {\n        id\n        title\n        image {\n          url\n        }\n      }\n      totalDocs\n      totalPages\n      page\n      limit\n      hasNextPage\n      hasPrevPage\n    }\n  }\n"
    ]);
    _templateObject9 = function() {
        return data;
    };
    return data;
}
function _templateObject10() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n  # Added $sort variable with default "-publishedAt" for descending order by publication time.\n  # If backend uses publishedDate instead, update the default to "-publishedDate" accordingly.\n  query getBlogs(\n    $limit: Int = 100\n    $page: Int = 1\n    $sort: String = "-publishedAt"\n  ) {\n    BlogPosts(\n      limit: $limit\n      page: $page\n      sort: $sort\n      where: { published: { equals: true } }\n    ) {\n      docs {\n        id\n        slug\n        title\n        excerpt\n        content\n\n        publishedAt\n        author {\n          name\n          photo {\n            url\n          }\n          role\n        }\n        coverImage {\n          url\n        }\n        tags {\n          value\n        }\n      }\n      totalDocs\n      totalPages\n      page\n      limit\n      hasNextPage\n      hasPrevPage\n    }\n  }\n'
    ]);
    _templateObject10 = function() {
        return data;
    };
    return data;
}
function _templateObject11() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  query getBlog($slug: String) {\n    BlogPosts(where: { slug: { equals: $slug } }) {\n      docs {\n        id\n        slug\n        title\n        excerpt\n        content\n\n        publishedAt\n        author {\n          name\n          photo {\n            url\n          }\n          role\n        }\n        coverImage {\n          url\n        }\n        tags {\n          value\n        }\n      }\n    }\n  }\n"
    ]);
    _templateObject11 = function() {
        return data;
    };
    return data;
}
function _templateObject12() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  mutation CreatePatient(\n    $fullName: String!\n    $phone: String!\n    $email: String\n    # Backend expects an enum/input type; previously declared as String causing mismatch.\n    $gender: Patient_gender_MutationInput\n    $dob: String\n    $address: String\n  ) {\n    createPatient(\n      data: {\n        fullName: $fullName\n        phone: $phone\n        email: $email\n        gender: $gender\n        dob: $dob\n        address: $address\n      }\n    ) {\n      id\n      fullName\n    }\n  }\n"
    ]);
    _templateObject12 = function() {
        return data;
    };
    return data;
}
function _templateObject13() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  mutation CreateMessage(\n    $patient: String!\n    $subject: String!\n    $message: String!\n    $handled: Boolean!\n  ) {\n    createContact(\n      data: {\n        patient: $patient\n        subject: $subject\n        message: $message\n        handled: $handled\n      }\n    ) {\n      subject\n    }\n  }\n"
    ]);
    _templateObject13 = function() {
        return data;
    };
    return data;
}
function _templateObject14() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  mutation CreateReservation(\n    $patient: String!\n    $datetime: String!\n    $symptoms: String!\n    $department: String!\n  ) {\n    createReservation(\n      data: {\n        patient: $patient\n        datetime: $datetime\n        symptoms: $symptoms\n        department: $department\n      }\n    ) {\n      id\n    }\n  }\n"
    ]);
    _templateObject14 = function() {
        return data;
    };
    return data;
}
;
const httpLink = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$HttpLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpLink"]({
    uri: ("TURBOPACK compile-time value", "http://localhost:3000/api/graphql"),
    fetch: function(uri, options) {
        return fetch(uri, {
            ...options,
            next: {
                revalidate: 1
            }
        });
    }
});
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloClient"]({
    link: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloLink"].from([
        httpLink
    ]),
    cache: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$inMemoryCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InMemoryCache"]({}),
    defaultOptions: {
        query: {
            fetchPolicy: "network-only"
        }
    }
});
/* QUERIES */ const GET_GENERAL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"])(_templateObject());
const GET_HEROES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"])(_templateObject1());
const GET_ABOUT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"])(_templateObject2());
const GET_DPEARTMENTS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"])(_templateObject3());
const GET_DEPARTMENT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"])(_templateObject4());
const GET_SERVICES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"])(_templateObject5());
const GET_STAFFS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"])(_templateObject6());
const GET_STAFF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"])(_templateObject7());
const GET_PATIENT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"])(_templateObject8());
// Adjusted: backend exposes single 'image' field (error indicated 'images' invalid)
const GET_GALLERIES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"])(_templateObject9());
const GET_BLOGS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"])(_templateObject10());
const GET_BLOG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"])(_templateObject11());
const CREATE_PATIENT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"])(_templateObject12());
const CREATE_MESSAGE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"])(_templateObject13());
const CREATE_RESERVATION = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"])(_templateObject14());
const getGeneral = async ()=>{
    const { data } = await client.query({
        query: GET_GENERAL
    });
    return data;
};
const getHeroes = async ()=>{
    const { data } = await client.query({
        query: GET_HEROES
    });
    return data;
};
const getAbout = async ()=>{
    const { data } = await client.query({
        query: GET_ABOUT
    });
    return data;
};
const getDepartments = async function() {
    let deptLimit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100, staffPreviewLimit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const { data } = await client.query({
        query: GET_DPEARTMENTS,
        variables: {
            deptLimit,
            staffPreviewLimit
        }
    });
    return data;
};
const getDepartment = async function(slug) {
    let staffLimit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const { data } = await client.query({
        query: GET_DEPARTMENT,
        variables: {
            slug,
            staffLimit
        }
    });
    return data;
};
const getServices = async function() {
    let limit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100, page = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    const { data } = await client.query({
        query: GET_SERVICES,
        variables: {
            limit,
            page
        }
    });
    return data;
};
const getStaffs = async function() {
    let limit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100, page = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    const { data } = await client.query({
        query: GET_STAFFS,
        variables: {
            limit,
            page
        }
    });
    return data;
};
const getStaff = async (slug)=>{
    const { data } = await client.query({
        query: GET_STAFF,
        variables: {
            slug
        }
    });
    return data;
};
const getPatient = async (phone)=>{
    const { data } = await client.query({
        query: GET_PATIENT,
        variables: {
            phone
        }
    });
    return data;
};
const getGalleries = async function() {
    let limit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100, page = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    const { data } = await client.query({
        query: GET_GALLERIES,
        variables: {
            limit,
            page
        }
    });
    return data;
};
const getBlogs = async function() {
    let limit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100, page = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, sort = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "-publishedAt";
    const { data } = await client.query({
        query: GET_BLOGS,
        variables: {
            limit,
            page,
            sort
        }
    });
    return data;
};
const getBlog = async (slug)=>{
    const { data } = await client.query({
        query: GET_BLOG,
        variables: {
            slug
        }
    });
    return data;
};
const createPatient = async (fullName, phone, email, gender, dob, address)=>{
    const { data } = await client.mutate({
        mutation: CREATE_PATIENT,
        variables: {
            fullName,
            phone,
            email,
            gender,
            dob,
            address
        }
    });
    return data;
};
const createMessage = async (patient, subject, message)=>{
    const { data } = await client.mutate({
        mutation: CREATE_MESSAGE,
        variables: {
            patient,
            subject,
            message,
            handled: false
        }
    });
    return data;
};
const createReservation = async (patient, datetime, symptoms, department)=>{
    const { data } = await client.mutate({
        mutation: CREATE_RESERVATION,
        variables: {
            patient,
            datetime,
            symptoms,
            department,
            status: "pending"
        }
    });
    return data;
}; /* END OF MUTATIONS */ 
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/ApolloWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientApolloProvider",
    ()=>ClientApolloProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/context/ApolloProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/queries.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ClientApolloProvider(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloProvider"], {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"],
        children: children
    }, void 0, false, {
        fileName: "[project]/app/ApolloWrapper.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = ClientApolloProvider;
var _c;
__turbopack_context__.k.register(_c, "ClientApolloProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b74313ae._.js.map