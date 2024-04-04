// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lQsD6":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "62ba0103a8f04b30";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"5AKj5":[function(require,module,exports) {
var _carousel = require("./carousel");
var _recipes = require("./recipes");
var _galleryCarousel = require("./galleryCarousel");

},{"./carousel":"9AbnS","./recipes":"eHgtG","./galleryCarousel":"f54fD"}],"9AbnS":[function(require,module,exports) {
const apiKey = "985657607e4f4433b35c17a295387a26asdasdasdasd";
const RecipesUrl = `https://api.spoonacular.com/food/search?query=&number=10&apiKey=${apiKey}`;
let recipeDataArray = [];
class Carousel {
    constructor(element){
        this.element = element;
        this.carouselOptions = [
            "previous",
            "next"
        ];
        this.carouselData = recipeDataArray;
        this.carouselInView = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
        ];
        this.carouselContainer;
        this.carouselPlayState;
    }
    mounted() {
        this.setupCarousel();
    }
    // Build carousel html
    setupCarousel() {
        console.log(recipeDataArray);
        const container = document.createElement("div");
        const controls = document.createElement("div");
        // Add container for carousel items and controls
        this.element.append(container, controls);
        container.className = "carousel-custom-container";
        controls.className = "carousel-custom-controls container";
        console.log(recipeDataArray);
        // Take dataset array and append items to container
        this.carouselData.forEach((item, index)=>{
            const carouselItem = item.image ? document.createElement("div") : null;
            const imgItem = document.createElement("img");
            const foodTitle = item.name ? document.createElement("h4") : null;
            carouselItem.append(imgItem, foodTitle);
            container.append(carouselItem);
            // Add item attributes
            foodTitle.className = `foodTitle-item foodTitle-custom-item-${index + 1}`;
            foodTitle.textContent = item.name;
            foodTitle.setAttribute("loading", "lazy");
            imgItem.className = `imageItem imageItem-custom-item-${index + 1}`;
            imgItem.src = item.image;
            carouselItem.className = `carousel-custom-item carousel-custom-item-${index + 1}`;
            carouselItem.setAttribute("loading", "lazy");
            // Used to keep track of carousel items, infinite items possible in carousel however min 5 items required
            carouselItem.setAttribute("data-index", `${index + 1}`);
            foodTitle.setAttribute("data-index", `${index + 1}`);
        });
        this.carouselOptions.forEach((option)=>{
            const btn = document.createElement("button");
            const axSpan = document.createElement("span");
            // Add accessibilty spans to button
            axSpan.innerText = option;
            axSpan.className = "ax-hidden";
            btn.append(axSpan);
            // Add button attributes
            btn.className = `carousel-custom-control carousel-custom-control-${option}`;
            btn.setAttribute("data-name", option);
            // Add carousel control options
            controls.append(btn);
        });
        // After rendering carousel to our DOM, setup carousel controls' event listeners
        this.setControls([
            ...controls.children
        ]);
        // Set container property
        this.carouselContainer = container;
        container.append(controls);
    }
    setControls(controls) {
        controls.forEach((control)=>{
            control.onclick = (event)=>{
                event.preventDefault();
                // Manage control actions, update our carousel data first then with a callback update our DOM
                this.controlManager(control.dataset.name);
            };
        });
    }
    controlManager(control) {
        if (control === "previous") return this.previous();
        if (control === "next") return this.next();
        return;
    }
    previous() {
        // Update order of items in data array to be shown in carousel
        this.carouselData.unshift(this.carouselData.pop());
        // Push the first item to the end of the array so that the previous item is front and center
        this.carouselInView.push(this.carouselInView.shift());
        // Update the css class for each carousel item in view
        this.carouselInView.forEach((item, index)=>{
            this.carouselContainer.children[index].className = `carousel-custom-item carousel-custom-item-${item}`;
        });
    }
    next() {
        // Update order of items in data array to be shown in carousel
        this.carouselData.push(this.carouselData.shift());
        // Take the last item and add it to the beginning of the array so that the next item is front and center
        this.carouselInView.unshift(this.carouselInView.pop());
        // Update the css class for each carousel item in view
        this.carouselInView.forEach((item, index)=>{
            this.carouselContainer.children[index].className = `carousel-custom-item carousel-custom-item-${item}`;
        });
    }
}
async function fetchFoodData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const dataSearchResults = data.searchResults[0];
        recipeDataArray = dataSearchResults.results;
        const element = document.querySelector(".carousel-custom");
        const exampleCarousel = new Carousel(element);
        exampleCarousel.mounted();
    } catch (error) {
        console.error(error);
    }
}
fetchFoodData(RecipesUrl); // Refers to the carousel root element you want to target, use specific class selectors if using multiple carousels
 // Create a new carousel object
 // Setup carousel and methods

},{}],"eHgtG":[function(require,module,exports) {
let count = 1;
let startIndex = 0;
let deleteCount = 10;
let recipeArrayList = [];
let latestRecipeArrayList = [];
const selectElement = document.getElementById("categories");
const arrowRight = document.querySelector("#arrowRight");
const arrowLeft = document.querySelector("#arrowLeft");
const startingIndex = document.querySelector("#startingIndex");
const endPageNumber = document.querySelector("#endPageNumber");
const searchButton = document.querySelector(".btn-outline-success");
const searchInput = document.querySelector("#searchInput");
const spinner = document.querySelector("#spinnerTop");
const spinnerLatest = document.querySelector("#spinnerLatest");
const seeMoreButton = document.querySelector("#seeMoreButton");
//api key
const apiKey = "985657607e4f4433b35c17a295387a26asdasdasdasd";
// top recipes
let topRecipesUrl = `https://api.spoonacular.com/food/search?query=top+recipes&number=40&apiKey=${apiKey}`;
// latest recipes
let latestRecipesUrl = `https://api.spoonacular.com/food/search?query=&number=40&apiKey=${apiKey}`;
selectElement.addEventListener("change", ()=>{
    spinner.style.display = "block";
    count = 1;
    startIndex = 0;
    deleteCount = 10;
    arrowLeft.style.color = "#CCCCCC";
    arrowRight.style.color = "#F1632D";
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const selectedText = selectedOption.textContent;
    topRecipesUrl = `https://api.spoonacular.com/food/search?query=top+recipes+${selectedText}&number=40&apiKey=${apiKey}`;
    latestRecipesUrl = `https://api.spoonacular.com/food/search?query=&number=40&apiKey=${apiKey}`;
    console.log(topRecipesUrl);
    console.log(latestRecipesUrl);
    fetchRecipes(topRecipesUrl, latestRecipesUrl);
});
document.addEventListener("DOMContentLoaded", ()=>{
    spinner.style.display = "block";
    fetchRecipes(topRecipesUrl, latestRecipesUrl);
});
arrowLeft.addEventListener("click", ()=>{
    if (startIndex > 0 && deleteCount >= 10) {
        arrowRight.style.color = "#F1632D";
        startIndex -= 10;
        deleteCount -= 10;
        count--;
        spinner.style.display = "block";
        displayTopRecipe(recipeArrayList);
    } else {
        arrowLeft.style.color = "#CCCCCC";
        console.log("Cannot reduce more.");
        return;
    }
});
arrowRight.addEventListener("click", ()=>{
    if (deleteCount < recipeArrayList.length) {
        arrowLeft.style.color = "#F1632D";
        startIndex += 10;
        deleteCount += 10;
        count++;
        spinner.style.display = "block";
        displayTopRecipe(recipeArrayList);
    } else {
        arrowRight.style.color = "#CCCCCC";
        console.log("Reached maximum delete count.");
        return;
    }
});
searchButton.addEventListener("click", ()=>{
    spinner.style.display = "block";
    spinnerLatest.style.display = "block";
    count = 1;
    startIndex = 0;
    deleteCount = 10;
    arrowLeft.style.color = "#CCCCCC";
    arrowRight.style.color = "#F1632D";
    let inputValue = searchInput.value;
    topRecipesUrl = `https://api.spoonacular.com/food/search?query=${inputValue}&number=40&apiKey=${apiKey}`;
    console.log(topRecipesUrl);
    fetchRecipes(topRecipesUrl, latestRecipesUrl);
});
seeMoreButton.addEventListener("click", ()=>{
    if (latestRecipeArrayList.length > 0) displayLatestRecipe(latestRecipeArrayList);
    else {
        seeMoreButton.disabled = true;
        seeMoreButton.style.backgroundColor = "#ccc";
    }
});
async function fetchRecipes(topRecipe, latestRecipe) {
    try {
        const response1 = await fetch(topRecipe);
        const response2 = await fetch(latestRecipe);
        const jsonData1 = await response1.json();
        const jsonData2 = await response2.json();
        const tRecipesList = jsonData1.searchResults[0];
        const latestRecipesList = jsonData2.searchResults[0];
        recipeArrayList = tRecipesList.results;
        latestRecipeArrayList = latestRecipesList.results;
        displayTopRecipe(tRecipesList.results);
        displayLatestRecipe(latestRecipeArrayList);
        displayGalleryImages(latestRecipeArrayList);
        spinner.style.display = "none";
        spinnerLatest.style.display = "none";
    } catch (error) {
        console.error(error);
    }
}
function displayTopRecipe(recipes) {
    const topRecipesContainer = document.querySelector("#topRecipesContainer");
    startingIndex.textContent = count;
    if (recipes.length % 10 === 0) endPageNumber.textContent = recipes.length / 10;
    else endPageNumber.textContent = Math.floor(recipes.length / 10) + count;
    if (document.querySelector("#recipeCardContainer")) {
        console.log("Recipe Card Container found! Deleting...");
        topRecipesContainer.removeChild(document.querySelector("#recipeCardContainer"));
    }
    if (!document.querySelector("#recipeCardContainer")) {
        console.log("Recipe Card Container not found. Creating new container...");
        const recipeCardContainer1 = document.createElement("div");
        recipeCardContainer1.id = "recipeCardContainer";
        topRecipesContainer.appendChild(recipeCardContainer1);
    }
    const topRecipesArray = recipes.slice(startIndex, deleteCount);
    for(let i = 0; i < topRecipesArray.length; i++){
        // collecting recipes to an array
        let topRecipes = topRecipesArray[i];
        // recipe card div
        const recipeCard = document.createElement("div");
        recipeCard.className = "card";
        recipeCard.id = "recipeCard";
        // recipe container div
        const recipeContainer = document.createElement("div");
        recipeContainer.className = "recipe-container";
        // recipe image
        const recipeImg = document.createElement("img");
        recipeImg.src = `${topRecipes.image}`;
        recipeImg.className = "card-img-top";
        recipeImg.id = "recipeImg";
        recipeImg.alt = "Recipe Picture";
        // tag span
        const tag = document.createElement("span");
        tag.textContent = "DISHES";
        tag.className = "tag";
        // date actions container
        const dateActionsContainer = document.createElement("div");
        dateActionsContainer.id = "dateActionsContainer";
        // recipe date span
        const recipeDate = document.createElement("span");
        recipeDate.id = "recipeDate";
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
        recipeDate.textContent = formattedDate;
        // action buttons container
        const actionButtonsContainer = document.createElement("div");
        actionButtonsContainer.id = "actionButtonsContainer";
        // chat button
        const chatButton = document.createElement("button");
        chatButton.id = "chatButton";
        // chat icon
        const chatRight = document.createElement("i");
        chatRight.className = "bi bi-chat-right";
        // share button
        const shareButton = document.createElement("button");
        shareButton.id = "shareButton";
        // share icon
        const shareIcon = document.createElement("i");
        shareIcon.className = "bi bi-share";
        // card body
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        // card-title
        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = `${topRecipes.name}`;
        // card-text
        const cardText = document.createElement("p");
        cardText.className = "card-text";
        let recipeContent = topRecipes.content;
        cardText.innerHTML = `${recipeContent.slice(0, 200) + "..."}`;
        // read more
        const readMore = document.createElement("a");
        readMore.textContent = "Read More";
        readMore.href = `${topRecipes.link}`;
        //Appending Children
        recipeCardContainer.appendChild(recipeCard);
        recipeCard.append(recipeContainer, dateActionsContainer, cardBody);
        recipeContainer.append(recipeImg, tag);
        dateActionsContainer.append(recipeDate, actionButtonsContainer);
        actionButtonsContainer.append(chatButton, shareButton);
        chatButton.appendChild(chatRight);
        shareButton.appendChild(shareIcon);
        cardBody.append(cardTitle, cardText, readMore);
    }
    spinner.style.display = "none";
}
function displayLatestRecipe(recipes) {
    const latestRecipesContainer = document.querySelector("#latestRecipesContainer");
    if (!document.querySelector("#recipeCardContainerLatest")) {
        console.log("Recipe Card Container not found. Creating new container...");
        const recipeCardContainerLatest1 = document.createElement("div");
        recipeCardContainerLatest1.id = "recipeCardContainerLatest";
        latestRecipesContainer.appendChild(recipeCardContainerLatest1);
    }
    const latestRecipeArrayList = recipes.splice(0, 4);
    for(let i = 0; i < latestRecipeArrayList.length; i++){
        // collecting recipes to an array
        let latestRecipes = latestRecipeArrayList[i];
        // recipe card div
        const recipeCard = document.createElement("div");
        recipeCard.className = "card";
        recipeCard.id = "recipeCard";
        // recipe container div
        const recipeContainer = document.createElement("div");
        recipeContainer.className = "recipe-container";
        // recipe image
        const recipeImg = document.createElement("img");
        recipeImg.src = `${latestRecipes.image}`;
        recipeImg.className = "card-img-top";
        recipeImg.id = "recipeImg";
        recipeImg.alt = "Recipe Picture";
        // tag span
        const tag = document.createElement("span");
        tag.textContent = "DISHES";
        tag.className = "tag";
        // date actions container
        const dateActionsContainer = document.createElement("div");
        dateActionsContainer.id = "dateActionsContainer";
        // recipe date span
        const recipeDate = document.createElement("span");
        recipeDate.id = "recipeDate";
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
        recipeDate.textContent = formattedDate;
        // action buttons container
        const actionButtonsContainer = document.createElement("div");
        actionButtonsContainer.id = "actionButtonsContainer";
        // chat button
        const chatButton = document.createElement("button");
        chatButton.id = "chatButton";
        // chat icon
        const chatRight = document.createElement("i");
        chatRight.className = "bi bi-chat-right";
        // share button
        const shareButton = document.createElement("button");
        shareButton.id = "shareButton";
        // share icon
        const shareIcon = document.createElement("i");
        shareIcon.className = "bi bi-share";
        // card body
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        // card-title
        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = `${latestRecipes.name}`;
        // card-text
        const cardText = document.createElement("p");
        cardText.className = "card-text";
        let recipeContent = latestRecipes.content;
        cardText.innerHTML = `${recipeContent.slice(0, 200) + "..."}`;
        // read more
        const readMore = document.createElement("a");
        readMore.textContent = "Read More";
        readMore.href = `${latestRecipes.link}`;
        //Appending Children
        recipeCardContainerLatest.appendChild(recipeCard);
        recipeCard.append(recipeContainer, dateActionsContainer, cardBody);
        recipeContainer.append(recipeImg, tag);
        dateActionsContainer.append(recipeDate, actionButtonsContainer);
        actionButtonsContainer.append(chatButton, shareButton);
        chatButton.appendChild(chatRight);
        shareButton.appendChild(shareIcon);
        cardBody.append(cardTitle, cardText, readMore);
    }
    spinnerLatest.style.display = "none";
}
function displayGalleryImages(recipeImages) {
    const galleryImagesContainer = document.querySelector("#galleryImagesContainer");
    const galleryImagesList = recipeImages.splice(0, 20);
    for(let i = 0; i < galleryImagesList.length; i++){
        const imgEl = document.createElement("img");
        imgEl.src = `${galleryImagesList[i].image}`;
        imgEl.alt = "img";
        imgEl.draggable = "false";
        imgEl.id = `img-${i}`;
        galleryImagesContainer.appendChild(imgEl);
    }
}

},{}],"f54fD":[function(require,module,exports) {
const carousel = document.querySelector(".carousel"), firstImg = carousel.querySelectorAll("img")[0], arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = ()=>{
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
};
arrowIcons.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(()=>showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
const autoSlide = ()=>{
    // if there is no image left to scroll then return from here
    if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;
    if (carousel.scrollLeft > prevScrollLeft) // if user is scrolling to the right
    return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};
const dragStart = (e)=>{
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
};
const dragging = (e)=>{
    // scrolling images/carousel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
};
const dragStop = ()=>{
    isDragStart = false;
    carousel.classList.remove("dragging");
    if (!isDragging) return;
    isDragging = false;
    autoSlide();
};
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

},{}]},["lQsD6","5AKj5"], "5AKj5", "parcelRequire2d1b")

//# sourceMappingURL=index.a8f04b30.js.map
