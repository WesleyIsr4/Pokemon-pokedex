module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/pokemon/[id].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/pokemon/[id].tsx":
/*!************************************!*\
  !*** ./src/pages/pokemon/[id].tsx ***!
  \************************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pokemon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/wesley/workspace/projects/pokedex/src/pages/pokemon/[id].tsx\";\n\n\nfunction Pokemon({\n  pokemon\n}) {\n  console.log();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: pokemon.sprites.front_default,\n      alt: \"Imagem do pokemon\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\nPokemon.propTypes = {\n  pokemon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({\n    name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n    sprites: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({\n      front_default: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n    })\n  }).isRequired\n};\nasync function getStaticProps({\n  params\n}) {\n  console.log(params);\n  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then(responseOfServe => {\n    if (responseOfServe.ok) {\n      return responseOfServe.json();\n    }\n\n    throw new Error(\"Deu problema\");\n  }).then(responseInObject => {\n    return responseInObject;\n  });\n  return {\n    props: {\n      pokemon\n    }\n  };\n}\nasync function getStaticPaths() {\n  //Basicamente o mesmo código da Home, com diferença no return\n  const pokemons = await fetch(\"https://pokeapi.co/api/v2/pokedex/2/\").then(responseOfServe => {\n    if (responseOfServe.ok) {\n      return responseOfServe.json();\n    }\n\n    throw new Error(\"Deu problema\");\n  }).then(responseInObject => responseInObject.pokemon_entries);\n  return {\n    paths: pokemons.map(pokemon => ({\n      //pra cada pokemon na resposta, um caminho sera gerado\n      params: {\n        id: pokemon.entry_number.toString() //necessario usar o toString porque não aceita inteiro como caminho (path)\n\n      }\n    })),\n    fallback: false\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcG9rZW1vbi8udHN4P2MxYzUiXSwibmFtZXMiOlsiUG9rZW1vbiIsInBva2Vtb24iLCJjb25zb2xlIiwibG9nIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm5hbWUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJmZXRjaCIsImlkIiwidGhlbiIsInJlc3BvbnNlT2ZTZXJ2ZSIsIm9rIiwianNvbiIsIkVycm9yIiwicmVzcG9uc2VJbk9iamVjdCIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJwb2tlbW9ucyIsInBva2Vtb25fZW50cmllcyIsInBhdGhzIiwibWFwIiwiZW50cnlfbnVtYmVyIiwidG9TdHJpbmciLCJmYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUI7QUFBRUM7QUFBRixDQUFqQixFQUE4QjtBQUMzQ0MsU0FBTyxDQUFDQyxHQUFSO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLFNBQUcsRUFBRUYsT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxhQUExQjtBQUF5QyxTQUFHLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO0FBRURMLE9BQU8sQ0FBQ00sU0FBUixHQUFvQjtBQUNsQkwsU0FBTyxFQUFFTSxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ3ZCQyxRQUFJLEVBQUVGLGlEQUFTLENBQUNHLE1BRE87QUFFdkJOLFdBQU8sRUFBRUcsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUN2QkgsbUJBQWEsRUFBRUUsaURBQVMsQ0FBQ0c7QUFERixLQUFoQjtBQUZjLEdBQWhCLEVBS05DO0FBTmUsQ0FBcEI7QUFTTyxlQUFlQyxjQUFmLENBQThCO0FBQUVDO0FBQUYsQ0FBOUIsRUFBMEM7QUFDL0NYLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVSxNQUFaO0FBQ0EsUUFBTVosT0FBTyxHQUFHLE1BQU1hLEtBQUssQ0FBRSxxQ0FBb0NELE1BQU0sQ0FBQ0UsRUFBRyxFQUFoRCxDQUFMLENBQ25CQyxJQURtQixDQUNiQyxlQUFELElBQXFCO0FBQ3pCLFFBQUlBLGVBQWUsQ0FBQ0MsRUFBcEIsRUFBd0I7QUFDdEIsYUFBT0QsZUFBZSxDQUFDRSxJQUFoQixFQUFQO0FBQ0Q7O0FBRUQsVUFBTSxJQUFJQyxLQUFKLENBQVUsY0FBVixDQUFOO0FBQ0QsR0FQbUIsRUFRbkJKLElBUm1CLENBUWJLLGdCQUFELElBQXNCO0FBQzFCLFdBQU9BLGdCQUFQO0FBQ0QsR0FWbUIsQ0FBdEI7QUFXQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMckI7QUFESztBQURGLEdBQVA7QUFLRDtBQUVNLGVBQWVzQixjQUFmLEdBQWdDO0FBQ3JDO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1WLEtBQUssQ0FBQyxzQ0FBRCxDQUFMLENBQ3BCRSxJQURvQixDQUNkQyxlQUFELElBQXFCO0FBQ3pCLFFBQUlBLGVBQWUsQ0FBQ0MsRUFBcEIsRUFBd0I7QUFDdEIsYUFBT0QsZUFBZSxDQUFDRSxJQUFoQixFQUFQO0FBQ0Q7O0FBQ0QsVUFBTSxJQUFJQyxLQUFKLENBQVUsY0FBVixDQUFOO0FBQ0QsR0FOb0IsRUFPcEJKLElBUG9CLENBT2RLLGdCQUFELElBQXNCQSxnQkFBZ0IsQ0FBQ0ksZUFQeEIsQ0FBdkI7QUFRQSxTQUFPO0FBQ0xDLFNBQUssRUFBRUYsUUFBUSxDQUFDRyxHQUFULENBQWMxQixPQUFELEtBQWM7QUFDaEM7QUFDQVksWUFBTSxFQUFFO0FBQ05FLFVBQUUsRUFBRWQsT0FBTyxDQUFDMkIsWUFBUixDQUFxQkMsUUFBckIsRUFERSxDQUMrQjs7QUFEL0I7QUFGd0IsS0FBZCxDQUFiLENBREY7QUFPTEMsWUFBUSxFQUFFO0FBUEwsR0FBUDtBQVNEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Bva2Vtb24vW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBva2Vtb24oeyBwb2tlbW9uIH0pIHtcbiAgY29uc29sZS5sb2coKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGltZyBzcmM9e3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSBhbHQ9XCJJbWFnZW0gZG8gcG9rZW1vblwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblBva2Vtb24ucHJvcFR5cGVzID0ge1xuICBwb2tlbW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3ByaXRlczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGZyb250X2RlZmF1bHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gIH0pLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuICBjb25zdCBwb2tlbW9uID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke3BhcmFtcy5pZH1gKVxuICAgIC50aGVuKChyZXNwb25zZU9mU2VydmUpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZU9mU2VydmUub2spIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlT2ZTZXJ2ZS5qc29uKCk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRldSBwcm9ibGVtYVwiKTtcbiAgICB9KVxuICAgIC50aGVuKChyZXNwb25zZUluT2JqZWN0KSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2VJbk9iamVjdDtcbiAgICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9rZW1vbixcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIC8vQmFzaWNhbWVudGUgbyBtZXNtbyBjw7NkaWdvIGRhIEhvbWUsIGNvbSBkaWZlcmVuw6dhIG5vIHJldHVyblxuICBjb25zdCBwb2tlbW9ucyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlZGV4LzIvXCIpXG4gICAgLnRoZW4oKHJlc3BvbnNlT2ZTZXJ2ZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlT2ZTZXJ2ZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VPZlNlcnZlLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRldSBwcm9ibGVtYVwiKTtcbiAgICB9KVxuICAgIC50aGVuKChyZXNwb25zZUluT2JqZWN0KSA9PiByZXNwb25zZUluT2JqZWN0LnBva2Vtb25fZW50cmllcyk7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBva2Vtb25zLm1hcCgocG9rZW1vbikgPT4gKHtcbiAgICAgIC8vcHJhIGNhZGEgcG9rZW1vbiBuYSByZXNwb3N0YSwgdW0gY2FtaW5obyBzZXJhIGdlcmFkb1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkOiBwb2tlbW9uLmVudHJ5X251bWJlci50b1N0cmluZygpLCAvL25lY2Vzc2FyaW8gdXNhciBvIHRvU3RyaW5nIHBvcnF1ZSBuw6NvIGFjZWl0YSBpbnRlaXJvIGNvbW8gY2FtaW5obyAocGF0aClcbiAgICAgIH0sXG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/pokemon/[id].tsx\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });