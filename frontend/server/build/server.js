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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/src/server.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/src/server.jsx":
/*!*******************************!*\
  !*** ./server/src/server.jsx ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_apps_ContactForm_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/apps/ContactForm.jsx */ \"./src/apps/ContactForm.jsx\");\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar conf = __webpack_require__(/*! config */ \"config\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar app = express();\nvar port = conf.get('Port');\n\napp.use(\"/assets\", express[\"static\"](path.join(__dirname, '../../public/assets')));\napp.use(\"/\", express[\"static\"](path.join(__dirname, '../../public/root')));\napp.get(\"/\", function (req, res) {\n  var servedFile = path.join(__dirname, '../../public/pages/index.html');\n  fs.readFile(servedFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('could not load index file:', err);\n      return res.status(500).send(\"Something went wrong\");\n    }\n\n    var contactForm = ReactDOMServer.renderToString( /*#__PURE__*/React.createElement(_src_apps_ContactForm_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n    return res.send(data.replace('<div id=\"contact-app\"></div>', \"<div id=\\\"contact-app\\\">\".concat(contactForm, \"</div>\")));\n  });\n});\napp.use(\"/api\", express.json());\napp.post(\"/api/sendenquiry\", function (req, res) {\n  console.log(req.body);\n  res.send();\n});\nconsole.log(\"listening on port \".concat(port));\nvar server = app.listen(port);\n\n//# sourceURL=webpack:///./server/src/server.jsx?");

/***/ }),

/***/ "./src/apps/ContactForm.jsx":
/*!**********************************!*\
  !*** ./src/apps/ContactForm.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_form_Form_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form/Form.jsx */ \"./src/components/form/Form.jsx\");\n/* harmony import */ var _components_form_FormInput_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form/FormInput.jsx */ \"./src/components/form/FormInput.jsx\");\n/* harmony import */ var _components_form_FormGroup_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form/FormGroup.jsx */ \"./src/components/form/FormGroup.jsx\");\n/* harmony import */ var _components_form_FormTextArea_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form/FormTextArea.jsx */ \"./src/components/form/FormTextArea.jsx\");\n/* harmony import */ var _components_form_validation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/form/validation.js */ \"./src/components/form/validation.js\");\n\n\n\n\n\n\n\nfunction ContactForm(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    postEndpoint: '/api/sendenquiry',\n    submitLabel: \"Send\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_FormGroup_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Contact\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_FormInput_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    label: \"Name\",\n    name: \"name\",\n    validations: [new _components_form_validation_js__WEBPACK_IMPORTED_MODULE_5__[\"validations\"].Required(\"How will I know who you are if you leave this blank?\")]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_FormInput_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    label: \"Email\",\n    name: \"email\",\n    validations: [new _components_form_validation_js__WEBPACK_IMPORTED_MODULE_5__[\"validations\"].Required(\"How will I know how to contact you if you leave this blank?\")]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_FormTextArea_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    label: \"Enquiry\",\n    name: \"enquiry\",\n    validations: [new _components_form_validation_js__WEBPACK_IMPORTED_MODULE_5__[\"validations\"].Required(\"How will I know what you want if you leave this blank?\")]\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\n\n//# sourceURL=webpack:///./src/apps/ContactForm.jsx?");

/***/ }),

/***/ "./src/components/form/Form.jsx":
/*!**************************************!*\
  !*** ./src/components/form/Form.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction handleSubmit(e) {\n  e.preventDefault();\n  console.log('form submitted');\n}\n\nfunction Form(props) {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({}),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      formValues = _React$useState2[0],\n      setFormValues = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({\n    value: false\n  }),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      formValid = _React$useState4[0],\n      setFormValid = _React$useState4[1];\n\n  function setFormValue(inputName, value) {\n    setFormValues(function (prevState) {\n      return _objectSpread({}, prevState, _defineProperty({}, inputName, value));\n    });\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    fetch('/api/sendenquiry', {\n      method: 'POST',\n      mode: 'cors',\n      credentials: 'same-origin',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(formValues)\n    }).then(function (response) {\n      if (response.status(200)) {\n        console.log(response);\n      } else {\n        console.log(response);\n      }\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"test\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, function (child) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {\n      setFormValue: setFormValue,\n      formValues: formValues\n    });\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: handleSubmit\n  }, props.submitLabel));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n//# sourceURL=webpack:///./src/components/form/Form.jsx?");

/***/ }),

/***/ "./src/components/form/FormGroup.jsx":
/*!*******************************************!*\
  !*** ./src/components/form/FormGroup.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction FormGroup(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, function (child) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {\n      setFormValue: props.setFormValue,\n      values: props.formValues\n    });\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormGroup);\n\n//# sourceURL=webpack:///./src/components/form/FormGroup.jsx?");

/***/ }),

/***/ "./src/components/form/FormInput.jsx":
/*!*******************************************!*\
  !*** ./src/components/form/FormInput.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation */ \"./src/components/form/validation.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction FormInput(props) {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({\n    value: null\n  }),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      validationMessage = _React$useState2[0],\n      setValidationMessage = _React$useState2[1];\n\n  function handleValidation(e) {\n    if (!props.validations) return;\n    var valid = true;\n    var validationResults = Object(_validation__WEBPACK_IMPORTED_MODULE_1__[\"validate\"])(e.target.value, props.validations);\n\n    var _loop = function _loop(vResultIndex) {\n      var validationResult = validationResults[vResultIndex];\n\n      if (!validationResult.valid) {\n        valid = false;\n        setValidationMessage(function () {\n          return {\n            value: validationResult.message\n          };\n        });\n      }\n    };\n\n    for (var vResultIndex = 0; vResultIndex < validationResults.length; vResultIndex++) {\n      _loop(vResultIndex);\n    }\n\n    if (valid) {\n      setValidationMessage(function () {\n        return {\n          value: null\n        };\n      });\n    }\n  }\n\n  function handleInput(e) {\n    props.setFormValue(props.name, e.target.value);\n    handleValidation(e);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: props.name\n  }, props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    name: props.name,\n    type: \"text\",\n    value: props.values[props.name] || '',\n    onChange: handleInput,\n    className: validationMessage.value ? \"invalid\" : \"\",\n    onBlur: handleValidation\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormInput);\n\n//# sourceURL=webpack:///./src/components/form/FormInput.jsx?");

/***/ }),

/***/ "./src/components/form/FormTextArea.jsx":
/*!**********************************************!*\
  !*** ./src/components/form/FormTextArea.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation */ \"./src/components/form/validation.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction TextArea(props) {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({\n    value: null\n  }),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      validationMessage = _React$useState2[0],\n      setValidationMessage = _React$useState2[1];\n\n  function handleValidation(e) {\n    if (!props.validations) return;\n    var valid = true;\n    var validationResults = Object(_validation__WEBPACK_IMPORTED_MODULE_1__[\"validate\"])(e.target.value, props.validations);\n\n    var _loop = function _loop(vResultIndex) {\n      var validationResult = validationResults[vResultIndex];\n\n      if (!validationResult.valid) {\n        valid = false;\n        setValidationMessage(function () {\n          return {\n            value: validationResult.message\n          };\n        });\n      }\n    };\n\n    for (var vResultIndex = 0; vResultIndex < validationResults.length; vResultIndex++) {\n      _loop(vResultIndex);\n    }\n\n    if (valid) {\n      setValidationMessage(function () {\n        return {\n          value: null\n        };\n      });\n    }\n  }\n\n  function handleInput(e) {\n    props.setFormValue(props.name, e.target.value);\n    handleValidation(e);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: props.name\n  }, props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    name: props.name,\n    value: props.values[props.name] || '',\n    onChange: handleInput,\n    className: validationMessage.value ? \"invalid\" : \"\",\n    onBlur: handleValidation\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextArea);\n\n//# sourceURL=webpack:///./src/components/form/FormTextArea.jsx?");

/***/ }),

/***/ "./src/components/form/validation.js":
/*!*******************************************!*\
  !*** ./src/components/form/validation.js ***!
  \*******************************************/
/*! exports provided: validate, validations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validate\", function() { return validate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validations\", function() { return validations; });\nfunction validate(value, validations) {\n  var result = [];\n\n  for (var vIndex = 0; vIndex < validations.length; vIndex++) {\n    var validation = validations[vIndex];\n    result.push({\n      name: validation.name,\n      valid: validation.valid(value),\n      message: validation.message\n    });\n  }\n\n  return result;\n}\n\nfunction Required(message) {\n  this.name = 'required';\n\n  this.valid = function (value) {\n    return !(value == null || value === '');\n  };\n\n  this.message = message;\n}\n\nvar validations = {\n  Required: Required\n};\n\n//# sourceURL=webpack:///./src/components/form/validation.js?");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"config\");\n\n//# sourceURL=webpack:///external_%22config%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });