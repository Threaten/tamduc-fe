module.exports = [
"[project]/.next-internal/server/app/about/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/remote-images.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Centralized remote hospital-related images (Unsplash direct photo URLs).
// You can swap these URLs anytime; fallbacks remain local SVGs.
__turbopack_context__.s([
    "BLOG_REMOTE",
    ()=>BLOG_REMOTE,
    "BLOG_REMOTE_CANDIDATES",
    ()=>BLOG_REMOTE_CANDIDATES,
    "DEPARTMENT_REMOTE",
    ()=>DEPARTMENT_REMOTE,
    "DEPARTMENT_REMOTE_CANDIDATES",
    ()=>DEPARTMENT_REMOTE_CANDIDATES,
    "DOCTOR_REMOTE",
    ()=>DOCTOR_REMOTE,
    "DOCTOR_REMOTE_CANDIDATES",
    ()=>DOCTOR_REMOTE_CANDIDATES,
    "GALLERY_REMOTE",
    ()=>GALLERY_REMOTE,
    "HERO_REMOTE",
    ()=>HERO_REMOTE,
    "HERO_REMOTE_CANDIDATES",
    ()=>HERO_REMOTE_CANDIDATES
]);
const HERO_REMOTE = {
    home: "https://images.unsplash.com/photo-1586773860414-9c5edc1f4a3f?auto=format&fit=crop&w=1600&q=80",
    about: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    services: "https://images.unsplash.com/photo-1584982753584-7d2c42b02968?auto=format&fit=crop&w=1600&q=80",
    departments: "https://images.unsplash.com/photo-1582719478461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
    doctor: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80",
    blogs: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80",
    gallery: "https://images.unsplash.com/photo-1576765607924-b4f6d0fca32d?auto=format&fit=crop&w=1600&q=80",
    contact: "https://images.unsplash.com/photo-1582719478250-95b89f3a9f3b?auto=format&fit=crop&w=1600&q=80",
    reservation: "https://images.unsplash.com/photo-1512069772995-ecf6ff09495a?auto=format&fit=crop&w=1600&q=80",
    emergency: "https://images.unsplash.com/photo-1576765978241-33ea48064440?auto=format&fit=crop&w=1600&q=80",
    faq: "https://images.unsplash.com/photo-1580281657527-47e2d6fd1f3b?auto=format&fit=crop&w=1600&q=80"
};
const HERO_REMOTE_CANDIDATES = {
    home: [
        "https://images.unsplash.com/photo-1586773860414-9c5edc1f4a3f?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1576765607924-b4f6d0fca32d?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1582719478461-905c673771fd?auto=format&fit=crop&w=1600&q=80"
    ],
    about: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1583912268181-52b068e3a2f3?auto=format&fit=crop&w=1600&q=80"
    ],
    services: [
        "https://images.unsplash.com/photo-1584982753584-7d2c42b02968?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1512069772995-ecf6ff09495a?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1582719735998-2a636e7bf48e?auto=format&fit=crop&w=1600&q=80"
    ],
    departments: [
        "https://images.unsplash.com/photo-1582719478461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1584982753584-7d2c42b02968?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1576765607924-b4f6d0fca32d?auto=format&fit=crop&w=1600&q=80"
    ],
    doctor: [
        "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1200&q=80"
    ],
    blogs: [
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1583912268181-52b068e3a2f3?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
        "https://images.unsplash.com/photo-1576765607924-b4f6d0fca32d?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1582719478461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1512069772995-ecf6ff09495a?auto=format&fit=crop&w=1600&q=80"
    ],
    contact: [
        "https://images.unsplash.com/photo-1582719478250-95b89f3a9f3b?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1512069772995-ecf6ff09495a?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80"
    ],
    reservation: [
        "https://images.unsplash.com/photo-1512069772995-ecf6ff09495a?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1582719735998-2a636e7bf48e?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1583912268181-52b068e3a2f3?auto=format&fit=crop&w=1600&q=80"
    ],
    emergency: [
        "https://images.unsplash.com/photo-1576765978241-33ea48064440?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1576765607924-b4f6d0fca32d?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1586773860414-9c5edc1f4a3f?auto=format&fit=crop&w=1600&q=80"
    ],
    faq: [
        "https://images.unsplash.com/photo-1580281657527-47e2d6fd1f3b?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    ]
};
const DEPARTMENT_REMOTE = {
    cardiology: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=1600&q=80",
    pediatrics: "https://images.unsplash.com/photo-1609204766980-0796d6a0e8b2?auto=format&fit=crop&w=1600&q=80",
    orthopedics: "https://images.unsplash.com/photo-1582719478289-5e4a7f54c9a9?auto=format&fit=crop&w=1600&q=80",
    dermatology: "https://images.unsplash.com/photo-1582560475093-1f9f3f9137e9?auto=format&fit=crop&w=1600&q=80",
    neurology: "https://images.unsplash.com/photo-1581091012184-7c4c8b40a1d1?auto=format&fit=crop&w=1600&q=80"
};
const DEPARTMENT_REMOTE_CANDIDATES = {
    cardiology: [
        "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80"
    ],
    pediatrics: [
        "https://images.unsplash.com/photo-1609204766980-0796d6a0e8b2?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1583912268181-52b068e3a2f3?auto=format&fit=crop&w=1600&q=80"
    ],
    orthopedics: [
        "https://images.unsplash.com/photo-1582719478289-5e4a7f54c9a9?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1582719735998-2a636e7bf48e?auto=format&fit=crop&w=1600&q=80"
    ],
    dermatology: [
        "https://images.unsplash.com/photo-1582560475093-1f9f3f9137e9?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1580281657527-47e2d6fd1f3b?auto=format&fit=crop&w=1600&q=80"
    ],
    neurology: [
        "https://images.unsplash.com/photo-1581091012184-7c4c8b40a1d1?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1576765607924-b4f6d0fca32d?auto=format&fit=crop&w=1600&q=80"
    ]
};
const BLOG_REMOTE = {
    "healthy-heart-tips": "https://images.unsplash.com/photo-1510022079733-8b58aca7c4a8?auto=format&fit=crop&w=1600&q=80",
    "child-vaccination-guide": "https://images.unsplash.com/photo-1583912268181-52b068e3a2f3?auto=format&fit=crop&w=1600&q=80",
    "managing-chronic-pain": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
    "understanding-high-cholesterol": "https://images.unsplash.com/photo-1582719478461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
    "flu-season-prep": "https://images.unsplash.com/photo-1584467735871-ec3abf7f1a8b?auto=format&fit=crop&w=1600&q=80",
    "when-to-see-a-dermatologist": "https://images.unsplash.com/photo-1582560475093-1f9f3f9137e9?auto=format&fit=crop&w=1600&q=80"
};
const BLOG_REMOTE_CANDIDATES = Object.fromEntries(Object.entries(BLOG_REMOTE).map(([k, v])=>[
        k,
        [
            v,
            HERO_REMOTE.blogs,
            HERO_REMOTE.about
        ]
    ]));
const DOCTOR_REMOTE = {
    "linh-nguyen": "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80",
    "minh-le": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    "thu-tran": "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1200&q=80",
    "quang-phan": "https://images.unsplash.com/photo-1582719478250-95b89f3a9f3b?auto=format&fit=crop&w=1200&q=80",
    "ly-hoang": "https://images.unsplash.com/photo-1584982753584-7d2c42b02968?auto=format&fit=crop&w=1200&q=80",
    "an-vo": "https://images.unsplash.com/photo-1581091012184-7c4c8b40a1d1?auto=format&fit=crop&w=1200&q=80"
};
const DOCTOR_REMOTE_CANDIDATES = Object.fromEntries(Object.entries(DOCTOR_REMOTE).map(([k, v])=>[
        k,
        [
            v,
            HERO_REMOTE.doctor,
            HERO_REMOTE.home
        ]
    ]));
const GALLERY_REMOTE = [
    "https://images.unsplash.com/photo-1586773860414-9c5edc1f4a3f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1583912268181-52b068e3a2f3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1582719735998-2a636e7bf48e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1582719478461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1584982753584-7d2c42b02968?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1512069772995-ecf6ff09495a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1576765607924-b4f6d0fca32d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1584467735871-ec3abf7f1a8b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1584985235176-5f0f7d9f4d18?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1582550884961-8ec8c9ac6b5b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1580281657579-47e2d6fd1f3b?auto=format&fit=crop&w=1200&q=80"
];
}),
"[project]/app/components/hero-image.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/hero-image.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/hero-image.tsx <module evaluation>", "default");
}),
"[project]/app/components/hero-image.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/hero-image.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/hero-image.tsx", "default");
}),
"[project]/app/components/hero-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$hero$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/components/hero-image.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$hero$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/components/hero-image.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$hero$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/components/page-hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$hero$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/hero-image.tsx [app-rsc] (ecmascript)");
;
;
function PageHero({ title, subtitle, imageSrc, imageAlt, imageAlign = "right", imageFallbackSrc = "/heroes/home.svg", imageFallbackRemotes }) {
    const hasImage = Boolean(imageSrc);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-b border-black/10 dark:border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `mx-auto max-w-6xl px-4 py-6 md:py-8 ${hasImage ? "grid md:grid-cols-2 items-center gap-8" : ""}`,
            children: [
                hasImage && imageAlign === "left" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "order-0 md:order-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-[16/9] md:aspect-[4/3] rounded-xl border border-black/10 dark:border-white/10 overflow-hidden",
                        children: imageSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$hero$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: imageSrc,
                            fallbackSrc: imageFallbackSrc,
                            fallbackRemotes: imageFallbackRemotes,
                            alt: imageAlt ?? "",
                            className: "object-contain",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/app/components/page-hero.tsx",
                            lineNumber: 34,
                            columnNumber: 17
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/app/components/page-hero.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/page-hero.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-semibold tracking-tight",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/components/page-hero.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        subtitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 opacity-80 max-w-3xl",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/app/components/page-hero.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/page-hero.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                hasImage && imageAlign === "right" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 md:mt-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-[16/9] md:aspect-[4/3] rounded-xl border border-black/10 dark:border-white/10 overflow-hidden",
                        children: imageSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$hero$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: imageSrc,
                            fallbackSrc: imageFallbackSrc,
                            fallbackRemotes: imageFallbackRemotes,
                            alt: imageAlt ?? "",
                            fill: true,
                            className: "object-contain",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/app/components/page-hero.tsx",
                            lineNumber: 58,
                            columnNumber: 17
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/app/components/page-hero.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/page-hero.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/page-hero.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/page-hero.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/app/helpers/RichTextRenderer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RichTextRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToJSX$2f$Component$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/richtext-lexical/dist/features/converters/lexicalToJSX/Component/index.js [app-rsc] (ecmascript)");
;
;
function RichTextRenderer(props) {
    const { className, data, ...rest } = props;
    const adminBase = (process.env.ADMIN_API_ENDPOINT || "").replace(/\/$/, "");
    // Generic deep transform that preserves structure; we don't strictly type the Payload editor JSON shape here.
    function transform(value) {
        if (typeof value === "string") {
            // Only prefix if it starts with /api/media and not already fully qualified with the admin base.
            if (value.startsWith("/api/media")) {
                if (adminBase && !value.startsWith(adminBase)) {
                    return `${adminBase}${value}`;
                }
            }
            return value;
        }
        if (Array.isArray(value)) return value.map((v)=>transform(v));
        if (value && typeof value === "object") {
            const out = {};
            for (const k of Object.keys(value)){
                out[k] = transform(value[k]);
            }
            return out;
        }
        return value;
    }
    const normalized = transform(data);
    const wrapperClass = className ? `${className} richtext-content ` : "richtext-content";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: wrapperClass,
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$features$2f$converters$2f$lexicalToJSX$2f$Component$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichText"], {
            data: normalized
        }, void 0, false, {
            fileName: "[project]/app/helpers/RichTextRenderer.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/helpers/RichTextRenderer.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/about/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage,
    "dynamic",
    ()=>dynamic,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$remote$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/remote-images.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$page$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/page-hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/queries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$helpers$2f$RichTextRenderer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/helpers/RichTextRenderer.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
const dynamic = "force-static";
const metadata = {
    title: "Về chúng tôi",
    description: "Tìm hiểu về Phòng khám HealthPlus: chứng nhận, mô hình chăm sóc tích hợp, chi phí và nguyên tắc thiết kế.",
    openGraph: {
        images: [
            {
                url: "/og-default.png",
                width: 1200,
                height: 630
            }
        ]
    }
};
async function AboutPage() {
    let hero = null;
    let about = null;
    try {
        const loadedHeroes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHeroes"])();
        hero = loadedHeroes.SectionHero;
    } catch  {}
    try {
        const loadedData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAbout"])();
        about = loadedData.OurStory;
    } catch  {}
    // Removed debug log
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$page$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                title: hero?.aboutUsSlogan || "Về chúng tôi",
                subtitle: hero?.aboutUsDescription || "Y học dựa trên bằng chứng – minh bạch và tận tâm.",
                imageSrc: hero?.aboutusHero?.url ? `${process.env.ADMIN_API_ENDPOINT}/${hero.aboutusHero.url}` : undefined,
                imageFallbackRemotes: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$remote$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HERO_REMOTE_CANDIDATES"].about.slice(1),
                imageFallbackSrc: "/heroes/about.svg",
                imageAlt: "Giới thiệu phòng khám"
            }, void 0, false, {
                fileName: "[project]/app/about/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4 py-12",
                children: about?.content ? (()=>{
                    const raw = about.content;
                    function parseLexical(value) {
                        let candidate = value;
                        if (typeof value === "string") {
                            try {
                                candidate = JSON.parse(value);
                            } catch  {
                                return null;
                            }
                        }
                        if (candidate && typeof candidate === "object" && "root" in candidate) {
                            return candidate;
                        }
                        return null;
                    }
                    const parsed = parseLexical(raw);
                    if (!parsed) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$helpers$2f$RichTextRenderer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        data: parsed,
                        className: "prose max-w-none"
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.tsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this);
                })() : null
            }, void 0, false, {
                fileName: "[project]/app/about/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/about/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/about/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/about/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4d2845a9._.js.map