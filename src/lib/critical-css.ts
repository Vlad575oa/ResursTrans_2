/**
 * CRITICAL CSS EXTRACTION
 * 
 * This file contains styles required for Above-the-Fold content
 * Inject this directly in <head> as inline <style>
 * 
 * Usage: Add to src/app/[locale]/layout.tsx in <head>
 */

export const CRITICAL_CSS = `
/* Critical CSS for LCP optimization */
:root{--background:#F0EDE9;--foreground:#2D2E30;--font-sans:Inter_Tight,system-ui,sans-serif;--font-display:Manrope,system-ui,sans-serif}
*,::after,::before{box-sizing:border-box}
body{margin:0;background:var(--background);color:var(--foreground);font-family:var(--font-sans);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
.min-h-screen{min-height:100vh}
.relative{position:relative}
.absolute{position:absolute}
.fixed{position:fixed}
.inset-0{top:0;right:0;bottom:0;left:0}
.z-0{z-index:0}
.z-10{z-index:10}
.z-50{z-index:50}
.flex{display:flex}
.grid{display:grid}
.hidden{display:none}
.items-center{align-items:center}
.justify-center{justify-content:center}
.justify-between{justify-content:space-between}
.gap-2{gap:.5rem}
.gap-4{gap:1rem}
.gap-8{gap:2rem}
.w-full{width:100%}
.h-full{height:100%}
.max-w-2xl{max-width:42rem}
.max-w-7xl{max-width:80rem}
.mx-auto{margin-left:auto;margin-right:auto}
.object-cover{object-fit:cover}
.object-center{object-position:center}
.overflow-hidden{overflow:hidden}
.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}
.from-\\[\\#0a0e1a\\]{--tw-gradient-from:#0a0e1a var(--tw-gradient-from-position);--tw-gradient-to:rgba(10,14,26,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
.via-\\[\\#0a0e1a\\]\\/80{--tw-gradient-to:rgba(10,14,26,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),rgba(10,14,26,.8) var(--tw-gradient-via-position),var(--tw-gradient-to)}
.to-transparent{--tw-gradient-to:transparent var(--tw-gradient-to-position)}
.text-4xl{font-size:2.25rem;line-height:2.5rem}
.text-5xl{font-size:3rem;line-height:1}
.text-6xl{font-size:3.75rem;line-height:1}
.text-7xl{font-size:4.5rem;line-height:1}
.text-lg{font-size:1.125rem;line-height:1.75rem}
.text-xl{font-size:1.25rem;line-height:1.75rem}
.text-sm{font-size:.875rem;line-height:1.25rem}
.text-xs{font-size:.75rem;line-height:1rem}
.font-black{font-weight:900}
.font-extrabold{font-weight:800}
.font-bold{font-weight:700}
.font-normal{font-weight:400}
.leading-\\[1\\.1\\]{line-height:1.1}
.leading-relaxed{line-height:1.625}
.tracking-tight{letter-spacing:-.025em}
.tracking-tighter{letter-spacing:-.05em}
.tracking-widest{letter-spacing:.1em}
.text-white{color:#fff}
.text-slate-200{color:#e2e8f0}
.text-slate-400{color:#94a3b8}
.text-primary{color:#f57a00}
.text-glow{text-shadow:0 0 20px rgba(37,106,244,.5)}
.bg-clip-text{-webkit-background-clip:text;background-clip:text}
.text-transparent{color:transparent}
.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}
.from-white{--tw-gradient-from:#fff var(--tw-gradient-from-position);--tw-gradient-to:rgba(255,255,255,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
.to-slate-400{--tw-gradient-to:#94a3b8 var(--tw-gradient-to-position)}
.pt-20{padding-top:5rem}
.px-6{padding-left:1.5rem;padding-right:1.5rem}
.py-10{padding-top:2.5rem;padding-bottom:2.5rem}
.py-4{padding-top:1rem;padding-bottom:1rem}
.backdrop-blur-md{--tw-backdrop-blur:blur(12px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness)}
.border{border-width:1px}
.border-l-4{border-left-width:4px}
.border-white\\/10{border-color:rgba(255,255,255,.1)}
.border-primary{border-color:#f57a00}
.bg-white\\/5{background-color:rgba(255,255,255,.05)}
.shadow-\\[0_0_20px_rgba\\(37\\,106\\,244\\,0\\.4\\)\\]{box-shadow:0 0 20px rgba(37,106,244,.4)}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}
.duration-300{transition-duration:.3s}
.group:hover .group-hover\\:bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity))}
.group:hover .group-hover\\:shadow-\\[0_0_30px_rgba\\(37\\,106\\,244\\,0\\.6\\)\\]{box-shadow:0 0 30px rgba(37,106,244,.6)}
@media (min-width:640px){.sm\\:text-5xl{font-size:3rem;line-height:1}}
@media (min-width:768px){.md\\:px-10{padding-left:2.5rem;padding-right:2.5rem};.md\\:text-6xl{font-size:3.75rem;line-height:1}}
@media (min-width:1024px){.lg\\:col-span-7{grid-column:span 7/span 7};.lg\\:text-7xl{font-size:4.5rem;line-height:1};.lg\\:px-20{padding-left:5rem;padding-right:5rem}}

/* LCP Animation - Fade In Up */
@keyframes fade-in-up{from{opacity:0;transform:translateY(10px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}
.fade-in-up{animation:fade-in-up .5s ease-out forwards}

/* Prevent CLS - Reserve space for images */
.image-container{position:relative;width:100%;height:100%}
.image-container img{object-fit:cover;object-position:center}

/* Font preload helpers */
.font-display{font-family:var(--font-display)}
`;

export default CRITICAL_CSS;
