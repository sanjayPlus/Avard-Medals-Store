if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const t=e=>n(e,c),l={module:{uri:c},exports:o,require:t};i[c]=Promise.all(r.map((e=>l[e]||t(e)))).then((e=>(s(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-c_9DeAkr.js",revision:null},{url:"assets/index-NrOU5Nyq.css",revision:null},{url:"index.html",revision:"e16ae76fc75a225ceb258a1423155448"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"613cfe2c5cb4bb28fdfc9b51141c4681"},{url:"apple-touch-icon.png",revision:"ae66990ee7c760e2b05e11c5eb0436b2"},{url:"android-chrome-192x192.png",revision:"927f3058c09bfffa38ca28a2fe7aea89"},{url:"android-chrome-512x512.png",revision:"f5f48203d41b06cb0bd8c3eb79715914"},{url:"maskable_icon.png",revision:"510cdf21b9faa9565c6e0bb1c3aebd29"},{url:"manifest.webmanifest",revision:"9c306761138183c343c25d83a72af13a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
