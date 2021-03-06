/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@docusaurus/plugin-pwa/src/sw.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@docusaurus/plugin-pwa/src lazy recursive":
/*!***********************************************************************!*\
  !*** ./node_modules/@docusaurus/plugin-pwa/src lazy namespace object ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/@docusaurus/plugin-pwa/src lazy recursive";

/***/ }),

/***/ "./node_modules/@docusaurus/plugin-pwa/src/sw.js":
/*!*******************************************************!*\
  !*** ./node_modules/@docusaurus/plugin-pwa/src/sw.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */



function parseSwParams() {
  const params = JSON.parse(
    new URLSearchParams(self.location.search).get('params'),
  );
  if (params.debug) {
    console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
  }
  return params;
}

// doc advise against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but I think it's working fine as it's inlined by webpack, need to double check?
async function runSWCustomCode(params) {
  if (undefined) {
    const customSW = await __webpack_require__("./node_modules/@docusaurus/plugin-pwa/src lazy recursive")(undefined);
    if (typeof customSW.default === 'function') {
      customSW.default(params);
    } else if (params.debug) {
      console.warn(
        '[Docusaurus-PWA][SW]: swCustom should have a default export function',
      );
    }
  }
}

/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 *
 * @param {String} url
 */
function getPossibleURLs(url) {
  const possibleURLs = [];
  const urlObject = new URL(url, self.location.href);

  if (urlObject.origin !== self.location.origin) {
    return possibleURLs;
  }

  // Ignore search params and hash
  urlObject.search = '';
  urlObject.hash = '';

  // /blog.html
  possibleURLs.push(urlObject.href);

  // /blog/ => /blog/index.html
  if (urlObject.pathname.endsWith('/')) {
    possibleURLs.push(`${urlObject.href}index.html`);
  } else {
    // /blog => /blog/index.html
    possibleURLs.push(`${urlObject.href}/index.html`);
  }

  return possibleURLs;
}

(async () => {
  const params = parseSwParams();

  const precacheManifest = [{"revision":"b0c48fda3590684c49761deec25e43b0","url":"01a85c17.90834ce1.js"},{"revision":"a8cae6e5c7aa824db8da29360005f06d","url":"057a1d0d.11abcffa.js"},{"revision":"00ac86ecf040896bbadcd963a36674e9","url":"05ba4f60.fbc0db10.js"},{"revision":"322fb4ae05488b04684a40394e670159","url":"0682691b.f20f2f2d.js"},{"revision":"998aa6af500b35d97bef7070369baebc","url":"0b771290.ebbcf26b.js"},{"revision":"c2632c50cd395b4eb8baa1bff01e9fc8","url":"1.9bc84520.js"},{"revision":"d6bda68d322850ad4d147b2a582b2b28","url":"103.e9a47038.js"},{"revision":"5a3532f7b29317f761672ff86bff998b","url":"104.6aaa0fda.js"},{"revision":"c8148bcff6683616850f6c7060cc3b3f","url":"105.3f020594.js"},{"revision":"c4941e7d2829d7a19ffc6a1c77651a6a","url":"106.089e73ac.js"},{"revision":"c56a3ed526374bb7ebd7fbcfb20c94da","url":"107.9f0ab970.js"},{"revision":"312dc1ebec7d71b072eed1082a2962e1","url":"107b0469.25f77c00.js"},{"revision":"36e726094f80c8597f0da0065db25b0b","url":"108.1eaa77a5.js"},{"revision":"7180952d0272842692d9ffb7b4e7426f","url":"12278e46.e8d842a6.js"},{"revision":"175b55dc3c717f7fb303ec37b66410d5","url":"13c8b263.309884d9.js"},{"revision":"b6083426cadc4fcb670c85de6fc2b1b9","url":"17896441.0d43f983.js"},{"revision":"5825fc82ca7666ce0424e13bf851360b","url":"18f8c619.4177e17e.js"},{"revision":"4d6272bae6aeff6e74873f91a441bf30","url":"193cf812.9eba05a4.js"},{"revision":"553c2e06f47e84478fb54c6b49066cfd","url":"1a507612.8a6d4821.js"},{"revision":"12db47acae31597c6f558a63287366a2","url":"1cbc9cf3.ef20c7fd.js"},{"revision":"c367bf84ec2bd09fd85cee18dcf1a100","url":"1d9ec0d3.e19147de.js"},{"revision":"9da41e937ef87bfe7f1e65824126443f","url":"2.62e2dce6.js"},{"revision":"c36d7995f4dfc0e30b0317fae28f050b","url":"202af6b6.f1fc6417.js"},{"revision":"75046694dbb8f1aaed7e4f2f50645aa0","url":"21a43da6.583fd0d2.js"},{"revision":"7342984b0d57f976327ff3c6d4624ea9","url":"2522320f.6bcd25a9.js"},{"revision":"eed5f0091159ed8f28dc5a0cbe753d2f","url":"2533a163.18b12354.js"},{"revision":"22ace044eb21c7e7589328e565ddaa87","url":"2a7080cd.5166eec3.js"},{"revision":"8481e91b34dc21090012d170ad68f1d3","url":"2c6528c1.da4b22fb.js"},{"revision":"ca617936c9e9d3bb9e8e5a1437981a13","url":"2cfde092.d96664d1.js"},{"revision":"2b4f734ba2e38d7ee3074ab81d74f48d","url":"2e2f80f1.0ccfa51a.js"},{"revision":"a1dfa4663c4e88c01d3795dde380e586","url":"2fc280b6.4633dc56.js"},{"revision":"195cca8e52ee22ed3ae5044f4c1d3957","url":"3.a08d48a7.js"},{"revision":"95b16ca665be3db903d49a837e85aff2","url":"3513f506.af305816.js"},{"revision":"64e2080cac818843af079dd7eee7efec","url":"3b5717dd.f29422fa.js"},{"revision":"16011606d6239b49bf8c09133536c312","url":"3b78081f.6655fc93.js"},{"revision":"d9e4ada1295470bb46dd12b372fedf21","url":"404.html"},{"revision":"f707d322fa0af4175304f73c06c39384","url":"423fa08b.0544ae8f.js"},{"revision":"906dec9f7d4a20cabcc2c4f18135d6d5","url":"425d620a.7a62cbac.js"},{"revision":"fedab1eb6bcefe73665291c4d2b8ec79","url":"4528138d.a70a6196.js"},{"revision":"2d1c64a22f4d1bd4c57afb298699ebe2","url":"4a9c9e5e.168a831c.js"},{"revision":"1ffa264ddb15f99c87e14ff9c6ee8411","url":"4aa23bc4.91ec3308.js"},{"revision":"7b08fb5acff45094f3b0a7e11e20a7b5","url":"4c19dd51.4d20062b.js"},{"revision":"2e59437cdc1e69f62943ab4c7763a9dc","url":"4c77b658.b379687f.js"},{"revision":"b65314a2a075274954a78e3034a1bf51","url":"4f3ef043.56858159.js"},{"revision":"aca04e54ece2696b668101aaa091e04a","url":"4f72673d.599765ff.js"},{"revision":"1b760ed58dc505c135a12887459c87a1","url":"53aecd9f.5c0177f6.js"},{"revision":"b3b17e7fa4a373f91e03231ee76d0618","url":"547a8e6f.420ef4d0.js"},{"revision":"bb5a368ab42f5608dfd190d877947bfa","url":"5566343b.04d3487c.js"},{"revision":"490077e42e7ffff47a1d6cb05daf2ffe","url":"59321373.80605af0.js"},{"revision":"8e365ab5afd1a0cd0a2b0120a1d3c208","url":"59faa440.0500ad29.js"},{"revision":"40535953897656468e9734d7aba8075c","url":"5cacff24.4de64c21.js"},{"revision":"ca7195106da0928076f497504eb8bfb4","url":"60317893.17543e93.js"},{"revision":"7d21f2dff0ad1e705cfc0939647e5215","url":"609e13b4.9eb98311.js"},{"revision":"762b809150b722308de31301e19f9ff1","url":"616665f6.af8aa51e.js"},{"revision":"7be8b4b6573287350d8e4c68f8eab9ad","url":"61fa94e7.8daad60b.js"},{"revision":"8100a6587323ab3ab45eee2cdddfe581","url":"6875c492.5697e675.js"},{"revision":"0c6013270f092750de09ab915dd3d4e1","url":"6875cec2.8258e3fa.js"},{"revision":"458b7ed9f326e84ec4d9d7efa688eff8","url":"70f43e9d.0cf2a8c0.js"},{"revision":"8b737c0d3c28d66b2fd183eec8507c7e","url":"7814a09b.d5e65b31.js"},{"revision":"6db477e609b4e7557724ce17bb8186a8","url":"7de33a24.c67e3ddd.js"},{"revision":"a5e030d08c995a3f044a28bba854d747","url":"82e7d0d0.62cd2b8e.js"},{"revision":"3a41557ab9a0906f802f6549c92498ee","url":"8492aa58.d5baf1b1.js"},{"revision":"7a2a345b447c1b7479edfe50475ca551","url":"87b0b581.90125328.js"},{"revision":"eb70d60c105a24ee1fa88bc5900f91db","url":"88198cbe.597b8823.js"},{"revision":"b46a732504c600196d8a33da79cfdd36","url":"897414ee.4bfc6a36.js"},{"revision":"de01785aca61885d037de458791d2e9f","url":"8ce40cfc.4246ef80.js"},{"revision":"bd39422cc6ef4dfd5fdca7144fc424e6","url":"8cecc663.f51faa1c.js"},{"revision":"388cdd48278deea94edf5cad0e2eb2e2","url":"8f2f924a.7b28a2ec.js"},{"revision":"44a10ef73da1d9c4e581455f8a0a9cfb","url":"9044f04c.593710a7.js"},{"revision":"2ed45006041f2a1beb5a1170e74f8e8f","url":"935f2afb.a5374541.js"},{"revision":"e11cca1af89d64bfaea43b6934eba915","url":"94e5911a.33c37c08.js"},{"revision":"94852986e8281184b9bcbad93d30059a","url":"96ed91ad.b1e638c8.js"},{"revision":"c99e46e9b18a9eb9d9352dbbb6fd505e","url":"98025116.ce6d6fe5.js"},{"revision":"13158e003c999bc4f003eaa5c753025e","url":"986cffd0.f793dce4.js"},{"revision":"12b159ca5ec5874aeb6ad1c151fb5f45","url":"9cd4869a.d08930ef.js"},{"revision":"acce36ebab85b150f8cd13ae357c35e7","url":"a207851d.f066f5b2.js"},{"revision":"08b3c22fd3761b4a741ad615d7572fbc","url":"a4a45cdb.e3c6c73f.js"},{"revision":"603d7b30839a965067d5789b9602cd8e","url":"a6aa9e1f.07864fc4.js"},{"revision":"95745b19ec0e1788194f2864a94e800e","url":"a7023ddc.8f5642a3.js"},{"revision":"f91677ad0da879bf768fc31c5ddeee44","url":"b2b675dd.cf6d3879.js"},{"revision":"7e1cedc28c2bf110cfc8c512b992fe9d","url":"b2f90839.8232ce0d.js"},{"revision":"f8d77445df4d0fcdb7939302b1e0233e","url":"b5055223.76fd4672.js"},{"revision":"9df49449c28e53533f7d338137e396f2","url":"b652e05c.d5417d10.js"},{"revision":"5559521a168d3ccd2ae7e2280417c06f","url":"b9731569.e8d5f8cb.js"},{"revision":"bc1014ab89bd648b7b31c3e14b947502","url":"baidu_verify_code-8IZiyay6kG.html"},{"revision":"0b27458fb8d1a1e2485bb3e3f5571fca","url":"blog/2013/12/31/blog/index.html"},{"revision":"0b8a683b60f70f7fce0e9aeae85aee15","url":"blog/2014/09/04/数学系和物理系学生有什么差别/index.html"},{"revision":"c6f8f231998c4db64e7951de284d3ca3","url":"blog/2015/11/04/blog/index.html"},{"revision":"84d99b8fdc64a88d53838a1f450ca819","url":"blog/2015/12/01/blog/index.html"},{"revision":"0804fd2b40b55f4dd76e5379e60ddbcc","url":"blog/2019/05/14/身份系统/index.html"},{"revision":"cfb26b1b5200eb7718e118afe95292dd","url":"blog/2021/02/17/java-network-proxy/index.html"},{"revision":"df41a5c06a094c9ea109c1bf8b07da7f","url":"blog/2021/02/24/hot-swapping-in-spring-boot/index.html"},{"revision":"b0f2d0e9b7989a01a74c453bd34e99c4","url":"blog/2021/02/28/node-hash/index.html"},{"revision":"03267710c1f30ae7ca17fcdf48ec19be","url":"blog/2021/03/03/mac-java-home/index.html"},{"revision":"031b50eb7cc775a880edf63b14d72063","url":"blog/2021/03/03/mac-vsc-path/index.html"},{"revision":"10fb7417919884c1528066326e6d7699","url":"blog/2021/03/03/Structure-needs-cleaning/index.html"},{"revision":"420446f231499685886ce147e1d9cd2e","url":"blog/2021/03/04/mac-install-wireguard/index.html"},{"revision":"c0b1dddbed520738149d9a29d31cdaf5","url":"blog/2021/03/04/sublime-vim-mode/index.html"},{"revision":"2db731ecd1511ad9c16d7d1fdcf3eb9c","url":"blog/2021/03/05/vsc-code-snippets/index.html"},{"revision":"5f7133a93b70c43d2bd1265c355888ac","url":"blog/2021/03/05/vsc-markdown-snippets/index.html"},{"revision":"d2adccdad76492c92847651c025a0d54","url":"blog/2021/03/06/ipsec-clients-ikev2/index.html"},{"revision":"20a21f58b45ab6998ad1b909bce1db6d","url":"blog/2021/03/06/ipsec-clients-l2tp/index.html"},{"revision":"e36c031f1d94c805ec4dfdf77be72068","url":"blog/2021/03/06/ipsec-clients-xauth/index.html"},{"revision":"acba37a5d782befee317adc11432129e","url":"blog/2021/03/06/ipsec-server/index.html"},{"revision":"b5fd75d30fd51f0580ff987422dbac29","url":"blog/2021/03/06/wireguard-server/index.html"},{"revision":"1282d7457f35a07039a4bcb45df4b6a4","url":"blog/index.html"},{"revision":"6878fc5d1c294743e4e2832a63961482","url":"blog/tags/asp-net/index.html"},{"revision":"04116e96b2594ee0e0319ae5f4b9e2b7","url":"blog/tags/code-snippets/index.html"},{"revision":"44abace06600196779f2bd7dd847c7ab","url":"blog/tags/editor/index.html"},{"revision":"169b0f91d37f57fa2d5bb74a0094e437","url":"blog/tags/file-system/index.html"},{"revision":"1297366ec0fe8df2ba924bf43341fbf9","url":"blog/tags/hash/index.html"},{"revision":"5c1cd8da53f1191541ec0d17956ed6a9","url":"blog/tags/hot-swap/index.html"},{"revision":"b5b21fe831ca80864a13ae46cc6f985d","url":"blog/tags/http/index.html"},{"revision":"0e9652230b24c93e506441bb368bca9d","url":"blog/tags/ikev-2/index.html"},{"revision":"ca9de5666b48b06fdb65488ef8ff2175","url":"blog/tags/index.html"},{"revision":"7cccb5c6c50027fa5b594e02e29d8e20","url":"blog/tags/ipsec/index.html"},{"revision":"cb0feb27544b09ef62b7909d607b6a62","url":"blog/tags/java/index.html"},{"revision":"03ab1235f111e1ab71f53fd6da9bd786","url":"blog/tags/l-2-tp/index.html"},{"revision":"992a8f52d8846cff3467ac1dda8d0a1c","url":"blog/tags/linux/index.html"},{"revision":"095a87bdade461910b1cf8fd1487b6de","url":"blog/tags/mac/index.html"},{"revision":"ea7d9c56d1e92b54e5550418cfaaf336","url":"blog/tags/markdown/index.html"},{"revision":"7d288a351a123fd8534a6c11266fbc77","url":"blog/tags/net/index.html"},{"revision":"17c97ed80909a13e8b7e92253380ea2f","url":"blog/tags/network/index.html"},{"revision":"5aa45fa787e987c3cc64ddf39c631735","url":"blog/tags/node/index.html"},{"revision":"f5c26848d0d9219e6d508a8f9c8b49d3","url":"blog/tags/proxy/index.html"},{"revision":"26f3cef45e8f2341fe9b2b12b6615af2","url":"blog/tags/spring-boot/index.html"},{"revision":"6a45db34a07d07f83f825048fd835a50","url":"blog/tags/spring/index.html"},{"revision":"e68d51eba89c1f6b0fda6ced8c803242","url":"blog/tags/sublime/index.html"},{"revision":"dd208e2ff8bbfa879682653aeb905dcd","url":"blog/tags/ubuntu/index.html"},{"revision":"c3bc396056e883703bf51f79126ffee3","url":"blog/tags/vsc/index.html"},{"revision":"74291de3e28230694ab5e83d61651fd2","url":"blog/tags/wireguard/index.html"},{"revision":"cf122a5bf8d91331fef52a7fd7b0a204","url":"blog/tags/xauth/index.html"},{"revision":"24f3d3753fc5aa9bbac77c100e09d127","url":"blog/tags/原创/index.html"},{"revision":"0a1d26ced8bd27b18dd0f06ff94f43f9","url":"blog/tags/摘抄/index.html"},{"revision":"26ea16ccdcbf675e45d73410217d5ecd","url":"blog/tags/日志/index.html"},{"revision":"7f398fe5e9d463a5b77dcc3f17973c44","url":"c2343886.360aec4f.js"},{"revision":"6e546041edc48f00e7c58bcb50baa8a9","url":"c3130c37.ab6f9f1b.js"},{"revision":"aa8461f383acc7870614ff63f745b52f","url":"c4f5d8e4.dc4d614d.js"},{"revision":"51545a58759418258db01901bfba551c","url":"c7bdc2ce.fb64ffc2.js"},{"revision":"ae40a25f60e0c93a2578ddfd933648ac","url":"cb4f30ef.8033eb0c.js"},{"revision":"60178e4bf7e148f44da89ebd9466b24d","url":"cbf1deca.fbaaa252.js"},{"revision":"0e21e296d85ae6c019bea3daf594f6cf","url":"ccc49370.da36a849.js"},{"revision":"a993999fd222c7208479f6c9ad3480af","url":"ce3e42ad.9593ebeb.js"},{"revision":"4dbbf2f5e37abc116e91d35d191b2cc9","url":"ceca9a07.3c68505a.js"},{"revision":"9a1262f20102254fb82304194daaae2d","url":"ced71b19.36c96f70.js"},{"revision":"007ccb1b01f3cb086f792cdc948d13d9","url":"d6feca56.4bc9c585.js"},{"revision":"088c127d4a9721998d4b3c901a526d39","url":"d7cc9a5a.e9a9273e.js"},{"revision":"9f0651533b82cb69a4600c3f4bcd8dcf","url":"dd5bc5cd.edc0b863.js"},{"revision":"eed6ac8159ab605526b07e36fe1d18e6","url":"df361e2b.f41bca70.js"},{"revision":"e1092cfe0038375b12e63bf6d811ba96","url":"df4c498a.b27f31a0.js"},{"revision":"5e0e0fbc5f4bfecfc3ad025344fd08c4","url":"docs/doc1/index.html"},{"revision":"6be7eab32e2dbe83703d5e2df316f05c","url":"docs/doc2/index.html"},{"revision":"2b5511e6e7c65ad2a54b16d394c4a628","url":"docs/doc3/index.html"},{"revision":"09eeb76779a0db4976520108a878c68d","url":"docs/examples/doc4/index.html"},{"revision":"826dd8222b3a4beea07897e876e70995","url":"docs/guides/api/guides-api-client/index.html"},{"revision":"c2a0b65eedd6ebd0d76e98d70b2a870e","url":"docs/guides/docs/guides-docs-intro/index.html"},{"revision":"d4b9a9d13f382218766c145852cc67fb","url":"docs/guides/docs/guides-docs-sidebar/index.html"},{"revision":"41e7a52143855354d15c18cd787eb024","url":"docs/guides/docs/markdown-features/index.html"},{"revision":"9c1fe46e76864dcbf248eec36e5d215b","url":"docs/guides/guides-blog/index.html"},{"revision":"bf123458b71bda236d7bf7d321bc2235","url":"docs/index.html"},{"revision":"6e32fcfe49308953b9f19510f476bab9","url":"docs/mdx/index.html"},{"revision":"d56380e35e7191ceeea576892443b0c9","url":"docs/personal/bookmarks/index.html"},{"revision":"5da44c2ef57e03033374b8aa66974a11","url":"docs/personal/docker-collections/index.html"},{"revision":"48a43ac2ab9dcfff7ffbbd52b0a0d7a0","url":"docs/personal/git-guides/index.html"},{"revision":"05fda4e67b0f136f147d3d4ad0036d56","url":"docs/personal/vim/index.html"},{"revision":"8f9f502ac0f756d37a7178547ad29e35","url":"docs/personal/vsc-config/index.html"},{"revision":"8daf2eff9a3ade2f4143417af9315352","url":"e2c67b88.8962e104.js"},{"revision":"4c176a84b9e89289047a6a48092b43a8","url":"e79b9dc8.b863239a.js"},{"revision":"947554d9899e144f85bc09982836a317","url":"eb2af8d8.2ca68cb0.js"},{"revision":"afca639cc64dd61795c8b0502f71ba96","url":"ee7825bf.d16551b8.js"},{"revision":"722f8081f0f6616f7f1c7c163cd22fca","url":"f25d0cef.6ee1aae8.js"},{"revision":"250029c373eb1cf09a05faa18953147f","url":"f7917a0a.88fa496e.js"},{"revision":"7e03ee3016c978ae1232a14efe32c7f2","url":"fc027257.d45901e6.js"},{"revision":"f1e43d36826baa52117bc33f4133ef7f","url":"fe603925.9e6fe52d.js"},{"revision":"6e14bb42f72cf8d1dc92f278c1fc89b4","url":"googlef64f2553fdc15e45.html"},{"revision":"5b6e08f0b73f05075d5f48ea899c51cd","url":"hello-md/index.html"},{"revision":"413c3d7d328de78181044765001456a1","url":"hello/index.html"},{"revision":"bfd1301264f4ce5fe73ad6542f5e9434","url":"index.html"},{"revision":"c80434370588faeace6d09a7cb50b2bf","url":"main.9e11a744.js"},{"revision":"99914b932bd37a50b983c5e7c90ae93b","url":"manifest.json"},{"revision":"92f3f7acfb174a96664afbce4996b1fb","url":"runtime~main.392617c3.js"},{"revision":"21874621227cdce992328702b051a11b","url":"styles.4a9e8b0b.js"},{"revision":"94abd07432bb5035197e8935bac9a53e","url":"styles.81ae8127.css"},{"revision":"8a24188951c203bb8872c9359060b885","url":"support/index.html"},{"revision":"33d034c6804698a09eb87e38b85c7ccf","url":"img/favicon.png"},{"revision":"81af02a49fd3d798956c909ab9b98bb7","url":"img/logo.png"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"f12d3279c6d54bcaf95ec762d5f6912c","url":"img/qz-youth.jpeg"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"}];
  const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__["PrecacheController"]();

  if (params.offlineMode) {
    controller.addToCacheList(precacheManifest);
  }

  await runSWCustomCode(params);

  self.addEventListener('install', (event) => {
    event.waitUntil(controller.install());
  });

  self.addEventListener('activate', (event) => {
    event.waitUntil(controller.activate());
  });

  self.addEventListener('fetch', async (event) => {
    if (params.offlineMode) {
      const requestURL = event.request.url;
      const possibleURLs = getPossibleURLs(requestURL);
      for (let i = 0; i < possibleURLs.length; i += 1) {
        const possibleURL = possibleURLs[i];
        const cacheKey = controller.getCacheKeyForURL(possibleURL);
        if (cacheKey) {
          if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: serving cached asset', {
              requestURL,
              possibleURL,
              possibleURLs,
              cacheKey,
            });
          }
          event.respondWith(caches.match(cacheKey));
          break;
        }
      }
    }
  });

  self.addEventListener('message', async (event) => {
    const type = event.data && event.data.type;

    if (type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
})();


/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/*! exports provided: WorkboxError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkboxError", function() { return WorkboxError; });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = Object(_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__["messageGenerator"])(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/*! exports provided: assert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return finalAssertExports; });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('incorrect-type', details);
    }
};
const isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClass'] = expectedClass;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] =
            `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('invalid-value', details);
    }
};
const isArrayOfClass = (value, expectedClass, details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false ? undefined : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isType,
    isArrayOfClass,
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/*! exports provided: cacheNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheNames", function() { return cacheNames; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheWrapper.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheWrapper.js ***!
  \************************************************************/
/*! exports provided: cacheWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheWrapper", function() { return cacheWrapper; });
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var _getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/pluginUtils.js */ "./node_modules/workbox-core/utils/pluginUtils.js");
/* harmony import */ var _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * Checks the list of plugins for the cacheKeyWillBeUsed callback, and
 * executes any of those callbacks found in sequence. The final `Request` object
 * returned by the last plugin is treated as the cache key for cache reads
 * and/or writes.
 *
 * @param {Object} options
 * @param {Request} options.request
 * @param {string} options.mode
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Request>}
 *
 * @private
 * @memberof module:workbox-core
 */
const _getEffectiveRequest = async ({ request, mode, plugins = [], }) => {
    const cacheKeyWillBeUsedPlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__["pluginUtils"].filter(plugins, "cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */);
    let effectiveRequest = request;
    for (const plugin of cacheKeyWillBeUsedPlugins) {
        effectiveRequest = await plugin["cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */].call(plugin, { mode, request: effectiveRequest });
        if (typeof effectiveRequest === 'string') {
            effectiveRequest = new Request(effectiveRequest);
        }
        if (true) {
            _assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(effectiveRequest, Request, {
                moduleName: 'Plugin',
                funcName: "cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */,
                isReturnValueProblem: true,
            });
        }
    }
    return effectiveRequest;
};
/**
 * This method will call cacheWillUpdate on the available plugins (or use
 * status === 200) to determine if the Response is safe and valid to cache.
 *
 * @param {Object} options
 * @param {Request} options.request
 * @param {Response} options.response
 * @param {Event} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Response>}
 *
 * @private
 * @memberof module:workbox-core
 */
const _isResponseSafeToCache = async ({ request, response, event, plugins = [], }) => {
    let responseToCache = response;
    let pluginsUsed = false;
    for (const plugin of plugins) {
        if ("cacheWillUpdate" /* CACHE_WILL_UPDATE */ in plugin) {
            pluginsUsed = true;
            const pluginMethod = plugin["cacheWillUpdate" /* CACHE_WILL_UPDATE */];
            responseToCache = await pluginMethod.call(plugin, {
                request,
                response: responseToCache,
                event,
            });
            if (true) {
                if (responseToCache) {
                    _assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(responseToCache, Response, {
                        moduleName: 'Plugin',
                        funcName: "cacheWillUpdate" /* CACHE_WILL_UPDATE */,
                        isReturnValueProblem: true,
                    });
                }
            }
            if (!responseToCache) {
                break;
            }
        }
    }
    if (!pluginsUsed) {
        if (true) {
            if (responseToCache) {
                if (responseToCache.status !== 200) {
                    if (responseToCache.status === 0) {
                        _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`The response for '${request.url}' is an opaque ` +
                            `response. The caching strategy that you're using will not ` +
                            `cache opaque responses by default.`);
                    }
                    else {
                        _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`The response for '${request.url}' returned ` +
                            `a status code of '${response.status}' and won't be cached as a ` +
                            `result.`);
                    }
                }
            }
        }
        responseToCache = responseToCache && responseToCache.status === 200 ?
            responseToCache : undefined;
    }
    return responseToCache ? responseToCache : null;
};
/**
 * This is a wrapper around cache.match().
 *
 * @param {Object} options
 * @param {string} options.cacheName Name of the cache to match against.
 * @param {Request} options.request The Request that will be used to look up
 *     cache entries.
 * @param {Event} [options.event] The event that prompted the action.
 * @param {Object} [options.matchOptions] Options passed to cache.match().
 * @param {Array<Object>} [options.plugins=[]] Array of plugins.
 * @return {Response} A cached response if available.
 *
 * @private
 * @memberof module:workbox-core
 */
const matchWrapper = async ({ cacheName, request, event, matchOptions, plugins = [], }) => {
    const cache = await self.caches.open(cacheName);
    const effectiveRequest = await _getEffectiveRequest({
        plugins, request, mode: 'read'
    });
    let cachedResponse = await cache.match(effectiveRequest, matchOptions);
    if (true) {
        if (cachedResponse) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Found a cached response in '${cacheName}'.`);
        }
        else {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`No cached response found in '${cacheName}'.`);
        }
    }
    for (const plugin of plugins) {
        if ("cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */ in plugin) {
            const pluginMethod = plugin["cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */];
            cachedResponse = await pluginMethod.call(plugin, {
                cacheName,
                event,
                matchOptions,
                cachedResponse,
                request: effectiveRequest,
            });
            if (true) {
                if (cachedResponse) {
                    _assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(cachedResponse, Response, {
                        moduleName: 'Plugin',
                        funcName: "cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */,
                        isReturnValueProblem: true,
                    });
                }
            }
        }
    }
    return cachedResponse;
};
/**
 * Wrapper around cache.put().
 *
 * Will call `cacheDidUpdate` on plugins if the cache was updated, using
 * `matchOptions` when determining what the old entry is.
 *
 * @param {Object} options
 * @param {string} options.cacheName
 * @param {Request} options.request
 * @param {Response} options.response
 * @param {Event} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @param {Object} [options.matchOptions]
 *
 * @private
 * @memberof module:workbox-core
 */
const putWrapper = async ({ cacheName, request, response, event, plugins = [], matchOptions, }) => {
    if (true) {
        if (request.method && request.method !== 'GET') {
            throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('attempt-to-cache-non-get-request', {
                url: Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(request.url),
                method: request.method,
            });
        }
    }
    const effectiveRequest = await _getEffectiveRequest({
        plugins, request, mode: 'write'
    });
    if (!response) {
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].error(`Cannot cache non-existent response for ` +
                `'${Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url)}'.`);
        }
        throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('cache-put-with-no-response', {
            url: Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url),
        });
    }
    const responseToCache = await _isResponseSafeToCache({
        event,
        plugins,
        response,
        request: effectiveRequest,
    });
    if (!responseToCache) {
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Response '${Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url)}' will ` +
                `not be cached.`, responseToCache);
        }
        return;
    }
    const cache = await self.caches.open(cacheName);
    const updatePlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__["pluginUtils"].filter(plugins, "cacheDidUpdate" /* CACHE_DID_UPDATE */);
    const oldResponse = updatePlugins.length > 0 ?
        await matchWrapper({ cacheName, matchOptions, request: effectiveRequest }) :
        null;
    if (true) {
        _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Updating the '${cacheName}' cache with a new Response for ` +
            `${Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url)}.`);
    }
    try {
        await cache.put(effectiveRequest, responseToCache);
    }
    catch (error) {
        // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
        if (error.name === 'QuotaExceededError') {
            await Object(_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__["executeQuotaErrorCallbacks"])();
        }
        throw error;
    }
    for (const plugin of updatePlugins) {
        await plugin["cacheDidUpdate" /* CACHE_DID_UPDATE */].call(plugin, {
            cacheName,
            event,
            oldResponse,
            newResponse: responseToCache,
            request: effectiveRequest,
        });
    }
};
const cacheWrapper = {
    put: putWrapper,
    match: matchWrapper,
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/*! exports provided: canConstructResponseFromBodyStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canConstructResponseFromBodyStream", function() { return canConstructResponseFromBodyStream; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/*! exports provided: executeQuotaErrorCallbacks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeQuotaErrorCallbacks", function() { return executeQuotaErrorCallbacks; });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof module:workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__["quotaErrorCallbacks"].size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__["quotaErrorCallbacks"]) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/fetchWrapper.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/fetchWrapper.js ***!
  \************************************************************/
/*! exports provided: fetchWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWrapper", function() { return fetchWrapper; });
/* harmony import */ var _WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/pluginUtils.js */ "./node_modules/workbox-core/utils/pluginUtils.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Wrapper around the fetch API.
 *
 * Will call requestWillFetch on available plugins.
 *
 * @param {Object} options
 * @param {Request|string} options.request
 * @param {Object} [options.fetchOptions]
 * @param {ExtendableEvent} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Response>}
 *
 * @private
 * @memberof module:workbox-core
 */
const wrappedFetch = async ({ request, fetchOptions, event, plugins = [], }) => {
    if (typeof request === 'string') {
        request = new Request(request);
    }
    // We *should* be able to call `await event.preloadResponse` even if it's
    // undefined, but for some reason, doing so leads to errors in our Node unit
    // tests. To work around that, explicitly check preloadResponse's value first.
    if (event instanceof FetchEvent && event.preloadResponse) {
        const possiblePreloadResponse = await event.preloadResponse;
        if (possiblePreloadResponse) {
            if (true) {
                _logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`Using a preloaded navigation response for ` +
                    `'${Object(_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(request.url)}'`);
            }
            return possiblePreloadResponse;
        }
    }
    if (true) {
        _assert_js__WEBPACK_IMPORTED_MODULE_2__["assert"].isInstance(request, Request, {
            paramName: 'request',
            expectedClass: Request,
            moduleName: 'workbox-core',
            className: 'fetchWrapper',
            funcName: 'wrappedFetch',
        });
    }
    const failedFetchPlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__["pluginUtils"].filter(plugins, "fetchDidFail" /* FETCH_DID_FAIL */);
    // If there is a fetchDidFail plugin, we need to save a clone of the
    // original request before it's either modified by a requestWillFetch
    // plugin or before the original request's body is consumed via fetch().
    const originalRequest = failedFetchPlugins.length > 0 ?
        request.clone() : null;
    try {
        for (const plugin of plugins) {
            if ("requestWillFetch" /* REQUEST_WILL_FETCH */ in plugin) {
                const pluginMethod = plugin["requestWillFetch" /* REQUEST_WILL_FETCH */];
                const requestClone = request.clone();
                request = await pluginMethod.call(plugin, {
                    request: requestClone,
                    event,
                });
                if (true) {
                    if (request) {
                        _assert_js__WEBPACK_IMPORTED_MODULE_2__["assert"].isInstance(request, Request, {
                            moduleName: 'Plugin',
                            funcName: "cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */,
                            isReturnValueProblem: true,
                        });
                    }
                }
            }
        }
    }
    catch (err) {
        throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('plugin-error-request-will-fetch', {
            thrownError: err,
        });
    }
    // The request can be altered by plugins with `requestWillFetch` making
    // the original request (Most likely from a `fetch` event) to be different
    // to the Request we make. Pass both to `fetchDidFail` to aid debugging.
    const pluginFilteredRequest = request.clone();
    try {
        let fetchResponse;
        // See https://github.com/GoogleChrome/workbox/issues/1796
        if (request.mode === 'navigate') {
            fetchResponse = await fetch(request);
        }
        else {
            fetchResponse = await fetch(request, fetchOptions);
        }
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`Network request for ` +
                `'${Object(_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(request.url)}' returned a response with ` +
                `status '${fetchResponse.status}'.`);
        }
        for (const plugin of plugins) {
            if ("fetchDidSucceed" /* FETCH_DID_SUCCEED */ in plugin) {
                fetchResponse = await plugin["fetchDidSucceed" /* FETCH_DID_SUCCEED */]
                    .call(plugin, {
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
                if (true) {
                    if (fetchResponse) {
                        _assert_js__WEBPACK_IMPORTED_MODULE_2__["assert"].isInstance(fetchResponse, Response, {
                            moduleName: 'Plugin',
                            funcName: "fetchDidSucceed" /* FETCH_DID_SUCCEED */,
                            isReturnValueProblem: true,
                        });
                    }
                }
            }
        }
        return fetchResponse;
    }
    catch (error) {
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].error(`Network request for ` +
                `'${Object(_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(request.url)}' threw an error.`, error);
        }
        for (const plugin of failedFetchPlugins) {
            await plugin["fetchDidFail" /* FETCH_DID_FAIL */].call(plugin, {
                error,
                event,
                originalRequest: originalRequest.clone(),
                request: pluginFilteredRequest.clone(),
            });
        }
        throw error;
    }
};
const fetchWrapper = {
    fetch: wrappedFetch,
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/*! exports provided: getFriendlyURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFriendlyURL", function() { return getFriendlyURL; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false ? undefined : (() => {
    // Don't overwrite this value if it's already set.
    // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
    if (!('__WB_DISABLE_DEV_LOGS' in self)) {
        self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
        debug: `#7f8c8d`,
        log: `#2ecc71`,
        warn: `#f39c12`,
        error: `#c0392b`,
        groupCollapsed: `#3498db`,
        groupEnd: null,
    };
    const print = function (method, args) {
        if (self.__WB_DISABLE_DEV_LOGS) {
            return;
        }
        if (method === 'groupCollapsed') {
            // Safari doesn't print all console.groupCollapsed() arguments:
            // https://bugs.webkit.org/show_bug.cgi?id=182754
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                console[method](...args);
                return;
            }
        }
        const styles = [
            `background: ${methodToColorMap[method]}`,
            `border-radius: 0.5em`,
            `color: white`,
            `font-weight: bold`,
            `padding: 2px 0.5em`,
        ];
        // When in a group, the workbox prefix is not displayed.
        const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
        console[method](...logPrefix, ...args);
        if (method === 'groupCollapsed') {
            inGroup = true;
        }
        if (method === 'groupEnd') {
            inGroup = false;
        }
    };
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
        const method = key;
        api[method] = (...args) => {
            print(method, args);
        };
    }
    return api;
})());



/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:core:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/*! exports provided: copyResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyResponse", function() { return copyResponse; });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof module:workbox-core
 */
async function copyResponse(response, modifier) {
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = Object(_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__["canConstructResponseFromBodyStream"])() ?
        clonedResponse.body : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/*! exports provided: messageGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageGenerator", function() { return messageGenerator; });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__["messages"][code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator = ( false) ?
    undefined : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/*! exports provided: messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return `The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`;
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}` +
            `${funcName}()' must be of type ${expectedType}.`;
    },
    'incorrect-class': ({ expectedClass, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
        if (!expectedClass || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        if (isReturnValueProblem) {
            return `The return value from ` +
                `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
                `must be an instance of class ${expectedClass.name}.`;
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
            `must be an instance of class ${expectedClass.name}.`;
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName }) => {
        if (!expectedMethod || !paramName || !moduleName || !className
            || !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return `${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return `An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`;
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` +
                `'add-to-cache-list-duplicate-entries' error.`);
        }
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry._entryId} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`;
    },
    'plugin-error-request-will-fetch': ({ thrownError }) => {
        if (!thrownError) {
            throw new Error(`Unexpected input to ` +
                `'plugin-error-request-will-fetch', error.`);
        }
        return `An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownError.message}'.`;
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return `You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`;
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return `The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`;
    },
    'unregister-route-route-not-registered': () => {
        return `The route you're trying to unregister was not previously ` +
            `registered.`;
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return `The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`;
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return `The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`;
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`;
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`;
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return `When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`;
    },
    'channel-name-required': () => {
        return `You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`;
    },
    'invalid-responses-are-same-args': () => {
        return `The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`;
    },
    'expire-custom-caches-only': () => {
        return `You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`;
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return `The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`;
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return `Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return `The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return `The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`;
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return `Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`;
    },
    'cache-put-with-no-response': ({ url }) => {
        return `There was an attempt to cache '${url}' but the response was not ` +
            `defined.`;
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return `The precaching request for '${url}' failed with an HTTP ` +
            `status of ${status}.`;
    },
    'non-precached-url': ({ url }) => {
        return `createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`;
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`;
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/*! exports provided: quotaErrorCallbacks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quotaErrorCallbacks", function() { return quotaErrorCallbacks; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-core/utils/pluginUtils.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/utils/pluginUtils.js ***!
  \********************************************************/
/*! exports provided: pluginUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginUtils", function() { return pluginUtils; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const pluginUtils = {
    filter: (plugins, callbackName) => {
        return plugins.filter((plugin) => callbackName in plugin);
    },
};


/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/*! exports provided: PrecacheController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return PrecacheController; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/cacheWrapper.js */ "./node_modules/workbox-core/_private/cacheWrapper.js");
/* harmony import */ var workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/fetchWrapper.js */ "./node_modules/workbox-core/_private/fetchWrapper.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_10__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/











/**
 * Performs efficient precaching of assets.
 *
 * @memberof module:workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {string} [cacheName] An optional name for the cache, to override
     * the default precache name.
     */
    constructor(cacheName) {
        this._cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getPrecacheName(cacheName);
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {
     * Array<module:workbox-precaching.PrecacheController.PrecacheEntry|string>
     * } entries Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = Object(_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_7__["createCacheKey"])(entry);
            const cacheMode = (typeof entry !== 'string' && entry.revision) ?
                'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__["logger"].warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * @param {Object} options
     * @param {Event} [options.event] The install event (if needed).
     * @param {Array<Object>} [options.plugins] Plugins to be used for fetching
     * and caching during install.
     * @return {Promise<module:workbox-precaching.InstallResult>}
     */
    async install({ event, plugins } = {}) {
        if (true) {
            if (plugins) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isArray(plugins, {
                    moduleName: 'workbox-precaching',
                    className: 'PrecacheController',
                    funcName: 'install',
                    paramName: 'plugins',
                });
            }
        }
        const toBePrecached = [];
        const alreadyPrecached = [];
        const cache = await self.caches.open(this._cacheName);
        const alreadyCachedRequests = await cache.keys();
        const existingCacheKeys = new Set(alreadyCachedRequests.map((request) => request.url));
        for (const [url, cacheKey] of this._urlsToCacheKeys) {
            if (existingCacheKeys.has(cacheKey)) {
                alreadyPrecached.push(url);
            }
            else {
                toBePrecached.push({ cacheKey, url });
            }
        }
        const precacheRequests = toBePrecached.map(({ cacheKey, url }) => {
            const integrity = this._cacheKeysToIntegrities.get(cacheKey);
            const cacheMode = this._urlsToCacheModes.get(url);
            return this._addURLToCache({
                cacheKey,
                cacheMode,
                event,
                integrity,
                plugins,
                url,
            });
        });
        await Promise.all(precacheRequests);
        const updatedURLs = toBePrecached.map((item) => item.url);
        if (true) {
            Object(_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__["printInstallDetails"])(updatedURLs, alreadyPrecached);
        }
        return {
            updatedURLs,
            notUpdatedURLs: alreadyPrecached,
        };
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * @return {Promise<module:workbox-precaching.CleanupResult>}
     */
    async activate() {
        const cache = await self.caches.open(this._cacheName);
        const currentlyCachedRequests = await cache.keys();
        const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
        const deletedURLs = [];
        for (const request of currentlyCachedRequests) {
            if (!expectedCacheKeys.has(request.url)) {
                await cache.delete(request);
                deletedURLs.push(request.url);
            }
        }
        if (true) {
            Object(_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__["printCleanupDetails"])(deletedURLs);
        }
        return { deletedURLs };
    }
    /**
     * Requests the entry and saves it to the cache if the response is valid.
     * By default, any response with a status code of less than 400 (including
     * opaque responses) is considered valid.
     *
     * If you need to use custom criteria to determine what's valid and what
     * isn't, then pass in an item in `options.plugins` that implements the
     * `cacheWillUpdate()` lifecycle event.
     *
     * @private
     * @param {Object} options
     * @param {string} options.cacheKey The string to use a cache key.
     * @param {string} options.url The URL to fetch and cache.
     * @param {string} [options.cacheMode] The cache mode for the network request.
     * @param {Event} [options.event] The install event (if passed).
     * @param {Array<Object>} [options.plugins] An array of plugins to apply to
     * fetch and caching.
     * @param {string} [options.integrity] The value to use for the `integrity`
     * field when making the request.
     */
    async _addURLToCache({ cacheKey, url, cacheMode, event, plugins, integrity }) {
        const request = new Request(url, {
            integrity,
            cache: cacheMode,
            credentials: 'same-origin',
        });
        let response = await workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__["fetchWrapper"].fetch({
            event,
            plugins,
            request,
        });
        // Allow developers to override the default logic about what is and isn't
        // valid by passing in a plugin implementing cacheWillUpdate(), e.g.
        // a `CacheableResponsePlugin` instance.
        let cacheWillUpdatePlugin;
        for (const plugin of (plugins || [])) {
            if ('cacheWillUpdate' in plugin) {
                cacheWillUpdatePlugin = plugin;
            }
        }
        const isValidResponse = cacheWillUpdatePlugin ?
            // Use a callback if provided. It returns a truthy value if valid.
            // NOTE: invoke the method on the plugin instance so the `this` context
            // is correct.
            await cacheWillUpdatePlugin.cacheWillUpdate({ event, request, response }) :
            // Otherwise, default to considering any response status under 400 valid.
            // This includes, by default, considering opaque responses valid.
            response.status < 400;
        // Consider this a failure, leading to the `install` handler failing, if
        // we get back an invalid response.
        if (!isValidResponse) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('bad-precaching-response', {
                url,
                status: response.status,
            });
        }
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        if (response.redirected) {
            response = await Object(workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_6__["copyResponse"])(response);
        }
        await workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].put({
            event,
            plugins,
            response,
            // `request` already uses `url`. We may be able to reuse it.
            request: cacheKey === url ? request : new Request(cacheKey),
            cacheName: this._cacheName,
            matchOptions: {
                ignoreSearch: true,
            },
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * This acts as a drop-in replacement for [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this._cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that can be used within a
     * {@link module:workbox-routing.Route} that will find a response for the
     * incoming request against the precache.
     *
     * If for an unexpected reason there is a cache miss for the request,
     * this will fall back to retrieving the `Response` via `fetch()` when
     * `fallbackToNetwork` is `true`.
     *
     * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
     * response from the network if there's a precache miss.
     * @return {module:workbox-routing~handlerCallback}
     */
    createHandler(fallbackToNetwork = true) {
        return async ({ request }) => {
            try {
                const response = await this.matchPrecache(request);
                if (response) {
                    return response;
                }
                // This shouldn't normally happen, but there are edge cases:
                // https://github.com/GoogleChrome/workbox/issues/1441
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('missing-precache-entry', {
                    cacheName: this._cacheName,
                    url: request instanceof Request ? request.url : request,
                });
            }
            catch (error) {
                if (fallbackToNetwork) {
                    if (true) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__["logger"].debug(`Unable to respond with precached response. ` +
                            `Falling back to network.`, error);
                    }
                    return fetch(request);
                }
                throw error;
            }
        };
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * If for an unexpected reason there is a cache miss when looking up `url`,
     * this will fall back to retrieving the `Response` via `fetch()` when
     * `fallbackToNetwork` is `true`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
     * response from the network if there's a precache miss.
     * @return {module:workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url, fallbackToNetwork = true) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('non-precached-url', { url });
        }
        const handler = this.createHandler(fallbackToNetwork);
        const request = new Request(url);
        return () => handler({ request });
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:precaching:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.js ***!
  \*******************************************************/
/*! exports provided: addPlugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return addPlugins; });
/* harmony import */ var _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/precachePlugins.js */ "./node_modules/workbox-precaching/utils/precachePlugins.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to precaching.
 *
 * @param {Array<Object>} newPlugins
 *
 * @memberof module:workbox-precaching
 */
function addPlugins(newPlugins) {
    _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_0__["precachePlugins"].add(newPlugins);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/*! exports provided: addRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return addRoute; });
/* harmony import */ var _utils_addFetchListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/addFetchListener.js */ "./node_modules/workbox-precaching/utils/addFetchListener.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let listenerAdded = false;
/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options]
 * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
 * check cache entries for a URLs ending with '/' to see if there is a hit when
 * appending the `directoryIndex` value.
 * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/]] An
 * array of regex's to remove search params when looking for a cache match.
 * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
 * check the cache for the URL with a `.html` added to the end of the end.
 * @param {module:workbox-precaching~urlManipulation} [options.urlManipulation]
 * This is a function that should take a URL and return an array of
 * alternative URLs that should be checked for precache matches.
 *
 * @memberof module:workbox-precaching
 */
function addRoute(options) {
    if (!listenerAdded) {
        Object(_utils_addFetchListener_js__WEBPACK_IMPORTED_MODULE_0__["addFetchListener"])(options);
        listenerAdded = true;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \******************************************************************/
/*! exports provided: cleanupOutdatedCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return cleanupOutdatedCaches; });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof module:workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getPrecacheName();
        event.waitUntil(Object(_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__["deleteOutdatedCaches"])(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandler.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandler.js ***!
  \**********************************************************/
/*! exports provided: createHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHandler", function() { return createHandler; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandler} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandler} on that instance,
 * instead of using this function.
 *
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {module:workbox-routing~handlerCallback}
 *
 * @memberof module:workbox-precaching
 */
function createHandler(fallbackToNetwork = true) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.createHandler(fallbackToNetwork);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \********************************************************************/
/*! exports provided: createHandlerBoundToURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHandlerBoundToURL", function() { return createHandlerBoundToURL; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {module:workbox-routing~handlerCallback}
 *
 * @memberof module:workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**************************************************************/
/*! exports provided: getCacheKeyForURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return getCacheKeyForURL; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof module:workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-precaching/index.js ***!
  \**************************************************/
/*! exports provided: addPlugins, addRoute, cleanupOutdatedCaches, createHandler, createHandlerBoundToURL, getCacheKeyForURL, matchPrecache, precache, precacheAndRoute, PrecacheController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/workbox-precaching/addPlugins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__["addPlugins"]; });

/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return _addRoute_js__WEBPACK_IMPORTED_MODULE_1__["addRoute"]; });

/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__["cleanupOutdatedCaches"]; });

/* harmony import */ var _createHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandler.js */ "./node_modules/workbox-precaching/createHandler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandler", function() { return _createHandler_js__WEBPACK_IMPORTED_MODULE_3__["createHandler"]; });

/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandlerBoundToURL", function() { return _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_4__["createHandlerBoundToURL"]; });

/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_5__["getCacheKeyForURL"]; });

/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPrecache", function() { return _matchPrecache_js__WEBPACK_IMPORTED_MODULE_6__["matchPrecache"]; });

/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return _precache_js__WEBPACK_IMPORTED_MODULE_7__["precache"]; });

/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_8__["precacheAndRoute"]; });

/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return _PrecacheController_js__WEBPACK_IMPORTED_MODULE_9__["PrecacheController"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_10__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/











/**
 * Most consumers of this module will want to use the
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}
 * method to add assets to the Cache and respond to network requests with these
 * cached assets.
 *
 * If you require finer grained control, you can use the
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * to determine when performed.
 *
 * @module workbox-precaching
 */



/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/*! exports provided: addPlugins, addRoute, cleanupOutdatedCaches, createHandler, createHandlerBoundToURL, getCacheKeyForURL, matchPrecache, precache, precacheAndRoute, PrecacheController */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-precaching/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["addPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["addRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["cleanupOutdatedCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandler", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["createHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandlerBoundToURL", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["createHandlerBoundToURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["getCacheKeyForURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPrecache", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["matchPrecache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["precache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["precacheAndRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["PrecacheController"]; });



/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/*! exports provided: matchPrecache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPrecache", function() { return matchPrecache; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof module:workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/*! exports provided: precache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return precache; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/precachePlugins.js */ "./node_modules/workbox-precaching/utils/precachePlugins.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




const installListener = (event) => {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__["getOrCreatePrecacheController"])();
    const plugins = _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_2__["precachePlugins"].get();
    event.waitUntil(precacheController.install({ event, plugins })
        .catch((error) => {
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].error(`Service worker installation failed. It will ` +
                `be retried automatically during the next navigation.`);
        }
        // Re-throw the error to ensure installation fails.
        throw error;
    }));
};
const activateListener = (event) => {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__["getOrCreatePrecacheController"])();
    event.waitUntil(precacheController.activate());
};
/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * [addRoute()]{@link module:workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof module:workbox-precaching
 */
function precache(entries) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__["getOrCreatePrecacheController"])();
    precacheController.addToCacheList(entries);
    if (entries.length > 0) {
        // NOTE: these listeners will only be added once (even if the `precache()`
        // method is called multiple times) because event listeners are implemented
        // as a set, where each listener must be unique.
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('install', installListener);
        self.addEventListener('activate', activateListener);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/*! exports provided: precacheAndRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return precacheAndRoute; });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * [precache()]{@link module:workbox-precaching.precache} and
 * [addRoute()]{@link module:workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See
 * [addRoute() options]{@link module:workbox-precaching.addRoute}.
 *
 * @memberof module:workbox-precaching
 */
function precacheAndRoute(entries, options) {
    Object(_precache_js__WEBPACK_IMPORTED_MODULE_1__["precache"])(entries);
    Object(_addRoute_js__WEBPACK_IMPORTED_MODULE_0__["addRoute"])(options);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/addFetchListener.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/addFetchListener.js ***!
  \*******************************************************************/
/*! exports provided: addFetchListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFetchListener", function() { return addFetchListener; });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/utils/getCacheKeyForURL.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * Adds a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * NOTE: when called more than once this method will replace the previously set
 * configuration options. Calling it more than once is not recommended outside
 * of tests.
 *
 * @private
 * @param {Object} [options]
 * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
 * check cache entries for a URLs ending with '/' to see if there is a hit when
 * appending the `directoryIndex` value.
 * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/]] An
 * array of regex's to remove search params when looking for a cache match.
 * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
 * check the cache for the URL with a `.html` added to the end of the end.
 * @param {workbox.precaching~urlManipulation} [options.urlManipulation]
 * This is a function that should take a URL and return an array of
 * alternative URLs that should be checked for precache matches.
 */
const addFetchListener = ({ ignoreURLParametersMatching = [/^utm_/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) => {
    const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getPrecacheName();
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('fetch', ((event) => {
        const precachedURL = Object(_getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_3__["getCacheKeyForURL"])(event.request.url, {
            cleanURLs,
            directoryIndex,
            ignoreURLParametersMatching,
            urlManipulation,
        });
        if (!precachedURL) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].debug(`Precaching did not find a match for ` +
                    Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(event.request.url));
            }
            return;
        }
        let responsePromise = self.caches.open(cacheName).then((cache) => {
            return cache.match(precachedURL);
        }).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            // Fall back to the network if we don't have a cached response
            // (perhaps due to manual cache cleanup).
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].warn(`The precached response for ` +
                    `${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(precachedURL)} in ${cacheName} was not found. ` +
                    `Falling back to the network instead.`);
            }
            return fetch(precachedURL);
        });
        if (true) {
            responsePromise = responsePromise.then((response) => {
                // Workbox is going to handle the route.
                // print the routing details to the console.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`Precaching is responding to: ` +
                    Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(event.request.url));
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(`Serving the precached url: ${precachedURL}`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`View request details here.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(event.request);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`View response details here.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(response);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
                return response;
            });
        }
        event.respondWith(responsePromise);
    }));
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/*! exports provided: createCacheKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCacheKey", function() { return createCacheKey; });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \***********************************************************************/
/*! exports provided: deleteOutdatedCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOutdatedCaches", function() { return deleteOutdatedCaches; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof module:workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName;
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/*! exports provided: generateURLVariations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateURLVariations", function() { return generateURLVariations; });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof module:workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching, directoryIndex, cleanURLs, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = Object(_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["removeIgnoredSearchParams"])(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getCacheKeyForURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getCacheKeyForURL.js ***!
  \********************************************************************/
/*! exports provided: getCacheKeyForURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return getCacheKeyForURL; });
/* harmony import */ var _getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _generateURLVariations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This function will take the request URL and manipulate it based on the
 * configuration options.
 *
 * @param {string} url
 * @param {Object} options
 * @return {string} Returns the URL in the cache that matches the request,
 * if possible.
 *
 * @private
 */
const getCacheKeyForURL = (url, options) => {
    const precacheController = Object(_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
    for (const possibleURL of Object(_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_1__["generateURLVariations"])(url, options)) {
        const possibleCacheKey = urlsToCacheKeys.get(possibleURL);
        if (possibleCacheKey) {
            return possibleCacheKey;
        }
    }
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/*! exports provided: getOrCreatePrecacheController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreatePrecacheController", function() { return getOrCreatePrecacheController; });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["PrecacheController"]();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/precachePlugins.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/precachePlugins.js ***!
  \******************************************************************/
/*! exports provided: precachePlugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precachePlugins", function() { return precachePlugins; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const plugins = [];
const precachePlugins = {
    /*
     * @return {Array}
     * @private
     */
    get() {
        return plugins;
    },
    /*
     * @param {Array} newPlugins
     * @private
     */
    add(newPlugins) {
        plugins.push(...newPlugins);
    },
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/*! exports provided: printCleanupDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printCleanupDetails", function() { return printCleanupDetails; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/*! exports provided: printInstallDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printInstallDetails", function() { return printInstallDetails; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message += ` ${alreadyPrecachedCount} ` +
                `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/*! exports provided: removeIgnoredSearchParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIgnoredSearchParams", function() { return removeIgnoredSearchParams; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ })

/******/ });
//# sourceMappingURL=sw.js.map