/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Navigation/Navbar/Navbar.module.scss":
/*!*************************************************************!*\
  !*** ./src/components/Navigation/Navbar/Navbar.module.scss ***!
  \*************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"global\": \"Navbar_global__uHwFx\",\n\t\"navbarContainer\": \"Navbar_navbarContainer__q4uId\",\n\t\"navbarHeader\": \"Navbar_navbarHeader__U5b4U\",\n\t\"logo\": \"Navbar_logo__mkCrN\",\n\t\"nav__links\": \"Navbar_nav__links__OIdys\",\n\t\"button\": \"Navbar_button__vga9_\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmJhci9OYXZiYXIubW9kdWxlLnNjc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jdG9yLXZpc2l0LWFwcC8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2YmFyL05hdmJhci5tb2R1bGUuc2Nzcz9kZDc4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImdsb2JhbFwiOiBcIk5hdmJhcl9nbG9iYWxfX3VId0Z4XCIsXG5cdFwibmF2YmFyQ29udGFpbmVyXCI6IFwiTmF2YmFyX25hdmJhckNvbnRhaW5lcl9fcTR1SWRcIixcblx0XCJuYXZiYXJIZWFkZXJcIjogXCJOYXZiYXJfbmF2YmFySGVhZGVyX19VNWI0VVwiLFxuXHRcImxvZ29cIjogXCJOYXZiYXJfbG9nb19fbWtDck5cIixcblx0XCJuYXZfX2xpbmtzXCI6IFwiTmF2YmFyX25hdl9fbGlua3NfX09JZHlzXCIsXG5cdFwiYnV0dG9uXCI6IFwiTmF2YmFyX2J1dHRvbl9fdmdhOV9cIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navigation/Navbar/Navbar.module.scss\n");

/***/ }),

/***/ "./src/components/Navigation/Navbar/Navbar.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Navigation/Navbar/Navbar.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar.module.scss */ \"./src/components/Navigation/Navbar/Navbar.module.scss\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _constants_supaClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/constants/supaClient */ \"./src/constants/supaClient.js\");\n\n\n // Import useState and useEffect\n\n\nconst Navbar = ()=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Use useEffect to fetch user info when the component mounts\n        const fetchUser = async ()=>{\n            const { data: { user }, error } = await _constants_supaClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth.getUser();\n            if (error) {\n                console.error(\"Error fetching user:\", error);\n            } else {\n                setUser(user);\n            }\n        };\n        void fetchUser(); // Call the fetchUser function\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().global),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navbarHeader),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                    src: \"ocho.png\",\n                    alt: \"logo \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mikae\\\\Desktop\\\\BOBATA\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navbarContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav__links),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"Начало\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mikae\\\\Desktop\\\\BOBATA\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/tablo\",\n                                    children: \"Табло\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mikae\\\\Desktop\\\\BOBATA\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/propusnati\",\n                                    children: \"Пропуснати\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mikae\\\\Desktop\\\\BOBATA\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/chasove\",\n                                    children: \"Работно време\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mikae\\\\Desktop\\\\BOBATA\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\mikae\\\\Desktop\\\\BOBATA\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikae\\\\Desktop\\\\BOBATA\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mikae\\\\Desktop\\\\BOBATA\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\mikae\\\\Desktop\\\\BOBATA\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mikae\\\\Desktop\\\\BOBATA\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmJhci9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2UsQ0FBQyxnQ0FBZ0M7QUFDbkM7QUFDSTtBQUc5QyxNQUFNSyxTQUFtQjtJQUN2QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQWM7SUFFOUNELGdEQUFTQSxDQUFDO1FBQ1IsNkRBQTZEO1FBQzdELE1BQU1PLFlBQVk7WUFDaEIsTUFBTSxFQUNKQyxNQUFNLEVBQUVILElBQUksRUFBRSxFQUNkSSxLQUFLLEVBQ04sR0FBRyxNQUFNTixrRUFBYSxDQUFDUSxPQUFPO1lBRS9CLElBQUlGLE9BQU87Z0JBQ1RHLFFBQVFILEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDLE9BQU87Z0JBQ0xILFFBQVFEO1lBQ1Y7UUFDRjtRQUVBLEtBQUtFLGFBQWEsOEJBQThCO0lBQ2xELEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTTtRQUFPQyxXQUFXWixtRUFBYTtrQkFDOUIsNEVBQUNjO1lBQUlGLFdBQVdaLHlFQUFtQjs7OEJBQ2pDLDhEQUFDZ0I7b0JBQUlKLFdBQVdaLGlFQUFXO29CQUFFa0IsS0FBSTtvQkFBV0MsS0FBSTs7Ozs7OzhCQUNoRCw4REFBQ0M7b0JBQUlSLFdBQVdaLDRFQUFzQjs4QkFDcEMsNEVBQUNzQjt3QkFBR1YsV0FBV1osdUVBQWlCO2tDQUM5Qiw0RUFBQ3dCOzs4Q0FDQyw4REFBQzNCLGtEQUFJQTtvQ0FBQzRCLE1BQUs7OENBQUk7Ozs7Ozs4Q0FPZiw4REFBQzVCLGtEQUFJQTtvQ0FBQzRCLE1BQUs7OENBQVM7Ozs7Ozs4Q0FDcEIsOERBQUM1QixrREFBSUE7b0NBQUM0QixNQUFLOzhDQUFjOzs7Ozs7OENBQ3pCLDhEQUFDNUIsa0RBQUlBO29DQUFDNEIsTUFBSzs4Q0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXBDO0FBRUEsaUVBQWV2QixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jdG9yLXZpc2l0LWFwcC8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2YmFyL05hdmJhci50c3g/NDdlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7IC8vIEltcG9ydCB1c2VTdGF0ZSBhbmQgdXNlRWZmZWN0XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL05hdmJhci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L2NvbnN0YW50cy9zdXBhQ2xpZW50XCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xuXG5jb25zdCBOYXZiYXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBVc2UgdXNlRWZmZWN0IHRvIGZldGNoIHVzZXIgaW5mbyB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhOiB7IHVzZXIgfSxcbiAgICAgICAgZXJyb3IsXG4gICAgICB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlcjpcIiwgZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdm9pZCBmZXRjaFVzZXIoKTsgLy8gQ2FsbCB0aGUgZmV0Y2hVc2VyIGZ1bmN0aW9uXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuZ2xvYmFsfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFySGVhZGVyfT5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBzcmM9XCJvY2hvLnBuZ1wiIGFsdD1cImxvZ28gXCIgLz5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJDb250YWluZXJ9PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5uYXZfX2xpbmtzfT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj7QndCw0YfQsNC70L48L0xpbms+XG4gICAgICAgICAgICAgIHsvKiB7dXNlciA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90YWJsb1wiPtCi0LDQsdC70L48L0xpbms+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb3B1c25hdGlcIj7Qn9GA0L7Qv9GD0YHQvdCw0YLQuDwvTGluaz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9ICovfVxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RhYmxvXCI+0KLQsNCx0LvQvjwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9wdXNuYXRpXCI+0J/RgNC+0L/Rg9GB0L3QsNGC0Lg8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2hhc292ZVwiPtCg0LDQsdC+0YLQvdC+INCy0YDQtdC80LU8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICB7LyogPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e3N0eWxlcy5jdGF9PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT7QotCw0LHQu9C+PC9idXR0b24+XG4gICAgICAgIDwvYT4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJzdXBhYmFzZSIsIk5hdmJhciIsInVzZXIiLCJzZXRVc2VyIiwiZmV0Y2hVc2VyIiwiZGF0YSIsImVycm9yIiwiYXV0aCIsImdldFVzZXIiLCJjb25zb2xlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZ2xvYmFsIiwiZGl2IiwibmF2YmFySGVhZGVyIiwiaW1nIiwibG9nbyIsInNyYyIsImFsdCIsIm5hdiIsIm5hdmJhckNvbnRhaW5lciIsInVsIiwibmF2X19saW5rcyIsImxpIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navigation/Navbar/Navbar.tsx\n");

/***/ }),

/***/ "./src/constants/supaClient.js":
/*!*************************************!*\
  !*** ./src/constants/supaClient.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n// eslint-disable-next-line\n// @ts-nocheck\n\nconst supabaseUrl = \"https://xszleraswdbfxnxxywoa.supabase.co\";\nconst supabaseKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzemxlcmFzd2RiZnhueHh5d29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwNDUxMDYsImV4cCI6MjAwODYyMTEwNn0.SEzGZtFdNaO2SY2KSD8S_PgjxTGQZznZZryfEpMvZUM\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseKey);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL3N1cGFDbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMkJBQTJCO0FBQzNCLGNBQWM7QUFDdUM7QUFFckQsTUFBTUMsY0FBY0MsMENBQW9DO0FBQ3hELE1BQU1HLGNBQWNILGtOQUFnQztBQUNwRCxNQUFNSyxXQUFXUCxtRUFBWUEsQ0FBQ0MsYUFBYUk7QUFFM0MsaUVBQWVFLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2N0b3ItdmlzaXQtYXBwLy4vc3JjL2NvbnN0YW50cy9zdXBhQ2xpZW50LmpzPzg4YzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xuXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTDtcbmNvbnN0IHN1cGFiYXNlS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQU5PTl9LRVk7XG5jb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VLZXkpO1xuXG5leHBvcnQgZGVmYXVsdCBzdXBhYmFzZTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUtleSIsIk5FWFRfUFVCTElDX0FOT05fS0VZIiwic3VwYWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/constants/supaClient.js\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utils/api */ \"./src/utils/api.ts\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Calendar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/styles/Calendar.scss */ \"./src/styles/Calendar.scss\");\n/* harmony import */ var _styles_Calendar_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Calendar_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navigation_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/Navigation/Navbar/Navbar */ \"./src/components/Navigation/Navbar/Navbar.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_1__]);\n_utils_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mikae\\\\Desktop\\\\BOBATA\\\\Doctor-Visit-App\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mikae\\\\Desktop\\\\BOBATA\\\\Doctor-Visit-App\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            \";\"\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_utils_api__WEBPACK_IMPORTED_MODULE_1__.api.withTRPC(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNrQztBQUNIO0FBQ0M7QUFDMkI7QUFFM0QsTUFBTUUsUUFBaUIsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUM5QyxxQkFDRTs7MEJBQ0UsOERBQUNILDRFQUFNQTs7Ozs7MEJBQ1AsOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OztZQUFJOzs7QUFHbEM7QUFFQSxpRUFBZUosMkNBQUdBLENBQUNLLFFBQVEsQ0FBQ0gsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3Rvci12aXNpdC1hcHAvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIEFwcFR5cGUgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCJ+L3V0aWxzL2FwaVwiO1xuaW1wb3J0IFwifi9zdHlsZXMvZ2xvYmFscy5zY3NzXCI7XG5pbXBvcnQgXCJ+L3N0eWxlcy9DYWxlbmRhci5zY3NzXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZiYXIvTmF2YmFyXCI7XG5cbmNvbnN0IE15QXBwOiBBcHBUeXBlID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2YmFyPjwvTmF2YmFyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwaS53aXRoVFJQQyhNeUFwcCk7XG4iXSwibmFtZXMiOlsiYXBpIiwiTmF2YmFyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoVFJQQyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _trpc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/client */ \"@trpc/client\");\n/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/next */ \"@trpc/next\");\n/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! superjson */ \"superjson\");\n/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__]);\n([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/**\n * This is the client-side entrypoint for your tRPC API. It is used to create the `api` object which\n * contains the Next.js App-wrapper, as well as your type-safe React Query hooks.\n *\n * We also create a few inference helpers for input and output types.\n */ \n\n\nconst getBaseUrl = ()=>{\n    if (false) {} // browser should use relative url\n    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url\n    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost\n};\n/** A set of type-safe react-query hooks for your tRPC API. */ const api = (0,_trpc_next__WEBPACK_IMPORTED_MODULE_1__.createTRPCNext)({\n    config () {\n        return {\n            /**\n       * Transformer used for data de-serialization from the server.\n       *\n       * @see https://trpc.io/docs/data-transformers\n       */ transformer: (superjson__WEBPACK_IMPORTED_MODULE_2___default()),\n            /**\n       * Links used to determine request flow from client to server.\n       *\n       * @see https://trpc.io/docs/links\n       */ links: [\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.loggerLink)({\n                    enabled: (opts)=> true || 0\n                }),\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.httpBatchLink)({\n                    url: `${getBaseUrl()}/api/trpc`\n                })\n            ]\n        };\n    },\n    /**\n   * Whether tRPC should await queries when server rendering pages.\n   *\n   * @see https://trpc.io/docs/nextjs#ssr-boolean-default-false\n   */ ssr: false\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0NBS0MsR0FDd0Q7QUFDYjtBQUVWO0FBR2xDLE1BQU1JLGFBQWE7SUFDakIsSUFBSSxLQUE2QixFQUFFLEVBQVUsQ0FBQyxrQ0FBa0M7SUFDaEYsSUFBSUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRUYsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDRCQUE0QjtJQUNwRyxPQUFPLENBQUMsaUJBQWlCLEVBQUVGLFFBQVFDLEdBQUcsQ0FBQ0UsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLCtCQUErQjtBQUN4RjtBQUVBLDREQUE0RCxHQUNyRCxNQUFNQyxNQUFNUCwwREFBY0EsQ0FBWTtJQUMzQ1E7UUFDRSxPQUFPO1lBQ0w7Ozs7T0FJQyxHQUNEQyxhQUFhUixrREFBU0E7WUFFdEI7Ozs7T0FJQyxHQUNEUyxPQUFPO2dCQUNMWCx3REFBVUEsQ0FBQztvQkFDVFksU0FBUyxDQUFDQyxPQUNSVCxLQUFzQyxJQUNyQ1MsQ0FBeURHO2dCQUM5RDtnQkFDQWpCLDJEQUFhQSxDQUFDO29CQUNaa0IsS0FBSyxDQUFDLEVBQUVkLGFBQWEsU0FBUyxDQUFDO2dCQUNqQzthQUNEO1FBQ0g7SUFDRjtJQUNBOzs7O0dBSUMsR0FDRGUsS0FBSztBQUNQLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2N0b3ItdmlzaXQtYXBwLy4vc3JjL3V0aWxzL2FwaS50cz9iOTcwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyB0aGUgY2xpZW50LXNpZGUgZW50cnlwb2ludCBmb3IgeW91ciB0UlBDIEFQSS4gSXQgaXMgdXNlZCB0byBjcmVhdGUgdGhlIGBhcGlgIG9iamVjdCB3aGljaFxuICogY29udGFpbnMgdGhlIE5leHQuanMgQXBwLXdyYXBwZXIsIGFzIHdlbGwgYXMgeW91ciB0eXBlLXNhZmUgUmVhY3QgUXVlcnkgaG9va3MuXG4gKlxuICogV2UgYWxzbyBjcmVhdGUgYSBmZXcgaW5mZXJlbmNlIGhlbHBlcnMgZm9yIGlucHV0IGFuZCBvdXRwdXQgdHlwZXMuXG4gKi9cbmltcG9ydCB7IGh0dHBCYXRjaExpbmssIGxvZ2dlckxpbmsgfSBmcm9tIFwiQHRycGMvY2xpZW50XCI7XG5pbXBvcnQgeyBjcmVhdGVUUlBDTmV4dCB9IGZyb20gXCJAdHJwYy9uZXh0XCI7XG5pbXBvcnQgeyB0eXBlIGluZmVyUm91dGVySW5wdXRzLCB0eXBlIGluZmVyUm91dGVyT3V0cHV0cyB9IGZyb20gXCJAdHJwYy9zZXJ2ZXJcIjtcbmltcG9ydCBzdXBlcmpzb24gZnJvbSBcInN1cGVyanNvblwiO1xuaW1wb3J0IHsgdHlwZSBBcHBSb3V0ZXIgfSBmcm9tIFwifi9zZXJ2ZXIvYXBpL3Jvb3RcIjtcblxuY29uc3QgZ2V0QmFzZVVybCA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBcIlwiOyAvLyBicm93c2VyIHNob3VsZCB1c2UgcmVsYXRpdmUgdXJsXG4gIGlmIChwcm9jZXNzLmVudi5WRVJDRUxfVVJMKSByZXR1cm4gYGh0dHBzOi8vJHtwcm9jZXNzLmVudi5WRVJDRUxfVVJMfWA7IC8vIFNTUiBzaG91bGQgdXNlIHZlcmNlbCB1cmxcbiAgcmV0dXJuIGBodHRwOi8vbG9jYWxob3N0OiR7cHJvY2Vzcy5lbnYuUE9SVCA/PyAzMDAwfWA7IC8vIGRldiBTU1Igc2hvdWxkIHVzZSBsb2NhbGhvc3Rcbn07XG5cbi8qKiBBIHNldCBvZiB0eXBlLXNhZmUgcmVhY3QtcXVlcnkgaG9va3MgZm9yIHlvdXIgdFJQQyBBUEkuICovXG5leHBvcnQgY29uc3QgYXBpID0gY3JlYXRlVFJQQ05leHQ8QXBwUm91dGVyPih7XG4gIGNvbmZpZygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBUcmFuc2Zvcm1lciB1c2VkIGZvciBkYXRhIGRlLXNlcmlhbGl6YXRpb24gZnJvbSB0aGUgc2VydmVyLlxuICAgICAgICpcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90cnBjLmlvL2RvY3MvZGF0YS10cmFuc2Zvcm1lcnNcbiAgICAgICAqL1xuICAgICAgdHJhbnNmb3JtZXI6IHN1cGVyanNvbixcblxuICAgICAgLyoqXG4gICAgICAgKiBMaW5rcyB1c2VkIHRvIGRldGVybWluZSByZXF1ZXN0IGZsb3cgZnJvbSBjbGllbnQgdG8gc2VydmVyLlxuICAgICAgICpcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90cnBjLmlvL2RvY3MvbGlua3NcbiAgICAgICAqL1xuICAgICAgbGlua3M6IFtcbiAgICAgICAgbG9nZ2VyTGluayh7XG4gICAgICAgICAgZW5hYmxlZDogKG9wdHMpID0+XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiIHx8XG4gICAgICAgICAgICAob3B0cy5kaXJlY3Rpb24gPT09IFwiZG93blwiICYmIG9wdHMucmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpLFxuICAgICAgICB9KSxcbiAgICAgICAgaHR0cEJhdGNoTGluayh7XG4gICAgICAgICAgdXJsOiBgJHtnZXRCYXNlVXJsKCl9L2FwaS90cnBjYCxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH07XG4gIH0sXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRSUEMgc2hvdWxkIGF3YWl0IHF1ZXJpZXMgd2hlbiBzZXJ2ZXIgcmVuZGVyaW5nIHBhZ2VzLlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vdHJwYy5pby9kb2NzL25leHRqcyNzc3ItYm9vbGVhbi1kZWZhdWx0LWZhbHNlXG4gICAqL1xuICBzc3I6IGZhbHNlLFxufSk7XG5cbi8qKlxuICogSW5mZXJlbmNlIGhlbHBlciBmb3IgaW5wdXRzLlxuICpcbiAqIEBleGFtcGxlIHR5cGUgSGVsbG9JbnB1dCA9IFJvdXRlcklucHV0c1snZXhhbXBsZSddWydoZWxsbyddXG4gKi9cbmV4cG9ydCB0eXBlIFJvdXRlcklucHV0cyA9IGluZmVyUm91dGVySW5wdXRzPEFwcFJvdXRlcj47XG5cbi8qKlxuICogSW5mZXJlbmNlIGhlbHBlciBmb3Igb3V0cHV0cy5cbiAqXG4gKiBAZXhhbXBsZSB0eXBlIEhlbGxvT3V0cHV0ID0gUm91dGVyT3V0cHV0c1snZXhhbXBsZSddWydoZWxsbyddXG4gKi9cbmV4cG9ydCB0eXBlIFJvdXRlck91dHB1dHMgPSBpbmZlclJvdXRlck91dHB1dHM8QXBwUm91dGVyPjtcbiJdLCJuYW1lcyI6WyJodHRwQmF0Y2hMaW5rIiwibG9nZ2VyTGluayIsImNyZWF0ZVRSUENOZXh0Iiwic3VwZXJqc29uIiwiZ2V0QmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJWRVJDRUxfVVJMIiwiUE9SVCIsImFwaSIsImNvbmZpZyIsInRyYW5zZm9ybWVyIiwibGlua3MiLCJlbmFibGVkIiwib3B0cyIsImRpcmVjdGlvbiIsInJlc3VsdCIsIkVycm9yIiwidXJsIiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/api.ts\n");

/***/ }),

/***/ "./src/styles/Calendar.scss":
/*!**********************************!*\
  !*** ./src/styles/Calendar.scss ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.scss":
/*!*********************************!*\
  !*** ./src/styles/globals.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "superjson":
/*!****************************!*\
  !*** external "superjson" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("superjson");

/***/ }),

/***/ "@trpc/client":
/*!*******************************!*\
  !*** external "@trpc/client" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/client");;

/***/ }),

/***/ "@trpc/next":
/*!*****************************!*\
  !*** external "@trpc/next" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();