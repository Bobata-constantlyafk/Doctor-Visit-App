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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar.module.scss */ \"./src/components/Navigation/Navbar/Navbar.module.scss\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _constants_supaClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/constants/supaClient */ \"./src/constants/supaClient.js\");\n\n\n // Import useState and useEffect\n\n\nconst Navbar = ()=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Use useEffect to fetch user info when the component mounts\n        const fetchUser = async ()=>{\n            const { data: { user }, error } = await _constants_supaClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth.getUser();\n            if (error) {\n                console.error(\"Error fetching user:\", error);\n            } else {\n                setUser(user);\n            }\n        };\n        void fetchUser(); // Call the fetchUser function\n    }, []);\n    const handleLogoClick = ()=>{\n        window.location.reload();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().global),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navbarHeader),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                    src: \"ocho.png\",\n                    alt: \"ЛОГО\",\n                    onClick: handleLogoClick\n                }, void 0, false, {\n                    fileName: \"D:\\\\projects\\\\Doctor\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navbarContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav__links),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"Начало\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\projects\\\\Doctor\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/tablo\",\n                                    children: \"Табло\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\projects\\\\Doctor\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/propusnati\",\n                                    children: \"Пропуснати\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\projects\\\\Doctor\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/chasove\",\n                                    children: \"Работно време\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\projects\\\\Doctor\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\projects\\\\Doctor\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\Doctor\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\projects\\\\Doctor\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\projects\\\\Doctor\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\projects\\\\Doctor\\\\Doctor-Visit-App\\\\src\\\\components\\\\Navigation\\\\Navbar\\\\Navbar.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmJhci9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2UsQ0FBQyxnQ0FBZ0M7QUFDbkM7QUFDSTtBQUc5QyxNQUFNSyxTQUFtQjtJQUN2QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQWM7SUFFOUNELGdEQUFTQSxDQUFDO1FBQ1IsNkRBQTZEO1FBQzdELE1BQU1PLFlBQVk7WUFDaEIsTUFBTSxFQUNKQyxNQUFNLEVBQUVILElBQUksRUFBRSxFQUNkSSxLQUFLLEVBQ04sR0FBRyxNQUFNTixrRUFBYSxDQUFDUSxPQUFPO1lBRS9CLElBQUlGLE9BQU87Z0JBQ1RHLFFBQVFILEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDLE9BQU87Z0JBQ0xILFFBQVFEO1lBQ1Y7UUFDRjtRQUVBLEtBQUtFLGFBQWEsOEJBQThCO0lBQ2xELEdBQUcsRUFBRTtJQUVMLE1BQU1NLGtCQUFrQjtRQUN0QkMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO0lBQ3hCO0lBRUEscUJBQ0UsOERBQUNDO1FBQU9DLFdBQVdoQixtRUFBYTtrQkFDOUIsNEVBQUNrQjtZQUFJRixXQUFXaEIseUVBQW1COzs4QkFDakMsOERBQUNvQjtvQkFDQ0osV0FBV2hCLGlFQUFXO29CQUN0QnNCLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pDLFNBQVNiOzs7Ozs7OEJBRVgsOERBQUNjO29CQUFJVCxXQUFXaEIsNEVBQXNCOzhCQUNwQyw0RUFBQzJCO3dCQUFHWCxXQUFXaEIsdUVBQWlCO2tDQUM5Qiw0RUFBQzZCOzs4Q0FDQyw4REFBQ2hDLGtEQUFJQTtvQ0FBQ2lDLE1BQUs7OENBQUk7Ozs7Ozs4Q0FPZiw4REFBQ2pDLGtEQUFJQTtvQ0FBQ2lDLE1BQUs7OENBQVM7Ozs7Ozs4Q0FDcEIsOERBQUNqQyxrREFBSUE7b0NBQUNpQyxNQUFLOzhDQUFjOzs7Ozs7OENBQ3pCLDhEQUFDakMsa0RBQUlBO29DQUFDaUMsTUFBSzs4Q0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXBDO0FBRUEsaUVBQWU1QixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jdG9yLXZpc2l0LWFwcC8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2YmFyL05hdmJhci50c3g/NDdlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjsgLy8gSW1wb3J0IHVzZVN0YXRlIGFuZCB1c2VFZmZlY3RcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9OYXZiYXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L2NvbnN0YW50cy9zdXBhQ2xpZW50XCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XHJcblxyXG5jb25zdCBOYXZiYXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFVzZSB1c2VFZmZlY3QgdG8gZmV0Y2ggdXNlciBpbmZvIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGE6IHsgdXNlciB9LFxyXG4gICAgICAgIGVycm9yLFxyXG4gICAgICB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlcjpcIiwgZXJyb3IpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdm9pZCBmZXRjaFVzZXIoKTsgLy8gQ2FsbCB0aGUgZmV0Y2hVc2VyIGZ1bmN0aW9uXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuZ2xvYmFsfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJIZWFkZXJ9PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299XHJcbiAgICAgICAgICBzcmM9XCJvY2hvLnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCLQm9Ce0JPQnlwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvQ2xpY2t9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2X19saW5rc30+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPtCd0LDRh9Cw0LvQvjwvTGluaz5cclxuICAgICAgICAgICAgICB7Lyoge3VzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RhYmxvXCI+0KLQsNCx0LvQvjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9wdXNuYXRpXCI+0J/RgNC+0L/Rg9GB0L3QsNGC0Lg8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApIDogbnVsbH0gKi99XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90YWJsb1wiPtCi0LDQsdC70L48L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9wdXNuYXRpXCI+0J/RgNC+0L/Rg9GB0L3QsNGC0Lg8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGFzb3ZlXCI+0KDQsNCx0L7RgtC90L4g0LLRgNC10LzQtTwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgey8qIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtzdHlsZXMuY3RhfT5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT7QotCw0LHQu9C+PC9idXR0b24+XHJcbiAgICAgICAgPC9hPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwic3VwYWJhc2UiLCJOYXZiYXIiLCJ1c2VyIiwic2V0VXNlciIsImZldGNoVXNlciIsImRhdGEiLCJlcnJvciIsImF1dGgiLCJnZXRVc2VyIiwiY29uc29sZSIsImhhbmRsZUxvZ29DbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZ2xvYmFsIiwiZGl2IiwibmF2YmFySGVhZGVyIiwiaW1nIiwibG9nbyIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJuYXYiLCJuYXZiYXJDb250YWluZXIiLCJ1bCIsIm5hdl9fbGlua3MiLCJsaSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navigation/Navbar/Navbar.tsx\n");

/***/ }),

/***/ "./src/constants/supaClient.js":
/*!*************************************!*\
  !*** ./src/constants/supaClient.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n// eslint-disable-next-line\n// @ts-nocheck\n\nconst supabaseUrl = \"https://xszleraswdbfxnxxywoa.supabase.co\";\nconst supabaseKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzemxlcmFzd2RiZnhueHh5d29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwNDUxMDYsImV4cCI6MjAwODYyMTEwNn0.SEzGZtFdNaO2SY2KSD8S_PgjxTGQZznZZryfEpMvZUM\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseKey);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL3N1cGFDbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMkJBQTJCO0FBQzNCLGNBQWM7QUFDdUM7QUFFckQsTUFBTUMsY0FBY0MsMENBQW9DO0FBQ3hELE1BQU1HLGNBQWNILGtOQUFnQztBQUNwRCxNQUFNSyxXQUFXUCxtRUFBWUEsQ0FBQ0MsYUFBYUk7QUFFM0MsaUVBQWVFLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2N0b3ItdmlzaXQtYXBwLy4vc3JjL2NvbnN0YW50cy9zdXBhQ2xpZW50LmpzPzg4YzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1ub2NoZWNrXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcclxuXHJcbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xyXG5jb25zdCBzdXBhYmFzZUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FOT05fS0VZO1xyXG5jb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VLZXkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3VwYWJhc2U7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUtleSIsIk5FWFRfUFVCTElDX0FOT05fS0VZIiwic3VwYWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/constants/supaClient.js\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utils/api */ \"./src/utils/api.ts\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Calendar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/styles/Calendar.scss */ \"./src/styles/Calendar.scss\");\n/* harmony import */ var _styles_Calendar_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Calendar_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navigation_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/Navigation/Navbar/Navbar */ \"./src/components/Navigation/Navbar/Navbar.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_1__]);\n_utils_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\projects\\\\Doctor\\\\Doctor-Visit-App\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\Doctor\\\\Doctor-Visit-App\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            \";\"\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_utils_api__WEBPACK_IMPORTED_MODULE_1__.api.withTRPC(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNrQztBQUNIO0FBQ0M7QUFDMkI7QUFFM0QsTUFBTUUsUUFBaUIsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUM5QyxxQkFDRTs7MEJBQ0UsOERBQUNILDRFQUFNQTs7Ozs7MEJBQ1AsOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OztZQUFJOzs7QUFHbEM7QUFFQSxpRUFBZUosMkNBQUdBLENBQUNLLFFBQVEsQ0FBQ0gsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3Rvci12aXNpdC1hcHAvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIEFwcFR5cGUgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIn4vdXRpbHMvYXBpXCI7XHJcbmltcG9ydCBcIn4vc3R5bGVzL2dsb2JhbHMuc2Nzc1wiO1xyXG5pbXBvcnQgXCJ+L3N0eWxlcy9DYWxlbmRhci5zY3NzXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIn4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmJhci9OYXZiYXJcIjtcclxuXHJcbmNvbnN0IE15QXBwOiBBcHBUeXBlID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2YmFyPjwvTmF2YmFyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaS53aXRoVFJQQyhNeUFwcCk7XHJcbiJdLCJuYW1lcyI6WyJhcGkiLCJOYXZiYXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndpdGhUUlBDIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _trpc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/client */ \"@trpc/client\");\n/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/next */ \"@trpc/next\");\n/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! superjson */ \"superjson\");\n/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__]);\n([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/**\r\n * This is the client-side entrypoint for your tRPC API. It is used to create the `api` object which\r\n * contains the Next.js App-wrapper, as well as your type-safe React Query hooks.\r\n *\r\n * We also create a few inference helpers for input and output types.\r\n */ \n\n\nconst getBaseUrl = ()=>{\n    if (false) {} // browser should use relative url\n    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url\n    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost\n};\n/** A set of type-safe react-query hooks for your tRPC API. */ const api = (0,_trpc_next__WEBPACK_IMPORTED_MODULE_1__.createTRPCNext)({\n    config () {\n        return {\n            /**\r\n       * Transformer used for data de-serialization from the server.\r\n       *\r\n       * @see https://trpc.io/docs/data-transformers\r\n       */ transformer: (superjson__WEBPACK_IMPORTED_MODULE_2___default()),\n            /**\r\n       * Links used to determine request flow from client to server.\r\n       *\r\n       * @see https://trpc.io/docs/links\r\n       */ links: [\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.loggerLink)({\n                    enabled: (opts)=> true || 0\n                }),\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.httpBatchLink)({\n                    url: `${getBaseUrl()}/api/trpc`\n                })\n            ]\n        };\n    },\n    /**\r\n   * Whether tRPC should await queries when server rendering pages.\r\n   *\r\n   * @see https://trpc.io/docs/nextjs#ssr-boolean-default-false\r\n   */ ssr: false\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0NBS0MsR0FDd0Q7QUFDYjtBQUVWO0FBR2xDLE1BQU1JLGFBQWE7SUFDakIsSUFBSSxLQUE2QixFQUFFLEVBQVUsQ0FBQyxrQ0FBa0M7SUFDaEYsSUFBSUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRUYsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDRCQUE0QjtJQUNwRyxPQUFPLENBQUMsaUJBQWlCLEVBQUVGLFFBQVFDLEdBQUcsQ0FBQ0UsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLCtCQUErQjtBQUN4RjtBQUVBLDREQUE0RCxHQUNyRCxNQUFNQyxNQUFNUCwwREFBY0EsQ0FBWTtJQUMzQ1E7UUFDRSxPQUFPO1lBQ0w7Ozs7T0FJQyxHQUNEQyxhQUFhUixrREFBU0E7WUFFdEI7Ozs7T0FJQyxHQUNEUyxPQUFPO2dCQUNMWCx3REFBVUEsQ0FBQztvQkFDVFksU0FBUyxDQUFDQyxPQUNSVCxLQUFzQyxJQUNyQ1MsQ0FBeURHO2dCQUM5RDtnQkFDQWpCLDJEQUFhQSxDQUFDO29CQUNaa0IsS0FBSyxDQUFDLEVBQUVkLGFBQWEsU0FBUyxDQUFDO2dCQUNqQzthQUNEO1FBQ0g7SUFDRjtJQUNBOzs7O0dBSUMsR0FDRGUsS0FBSztBQUNQLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2N0b3ItdmlzaXQtYXBwLy4vc3JjL3V0aWxzL2FwaS50cz9iOTcwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBjbGllbnQtc2lkZSBlbnRyeXBvaW50IGZvciB5b3VyIHRSUEMgQVBJLiBJdCBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYGFwaWAgb2JqZWN0IHdoaWNoXHJcbiAqIGNvbnRhaW5zIHRoZSBOZXh0LmpzIEFwcC13cmFwcGVyLCBhcyB3ZWxsIGFzIHlvdXIgdHlwZS1zYWZlIFJlYWN0IFF1ZXJ5IGhvb2tzLlxyXG4gKlxyXG4gKiBXZSBhbHNvIGNyZWF0ZSBhIGZldyBpbmZlcmVuY2UgaGVscGVycyBmb3IgaW5wdXQgYW5kIG91dHB1dCB0eXBlcy5cclxuICovXHJcbmltcG9ydCB7IGh0dHBCYXRjaExpbmssIGxvZ2dlckxpbmsgfSBmcm9tIFwiQHRycGMvY2xpZW50XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRSUENOZXh0IH0gZnJvbSBcIkB0cnBjL25leHRcIjtcclxuaW1wb3J0IHsgdHlwZSBpbmZlclJvdXRlcklucHV0cywgdHlwZSBpbmZlclJvdXRlck91dHB1dHMgfSBmcm9tIFwiQHRycGMvc2VydmVyXCI7XHJcbmltcG9ydCBzdXBlcmpzb24gZnJvbSBcInN1cGVyanNvblwiO1xyXG5pbXBvcnQgeyB0eXBlIEFwcFJvdXRlciB9IGZyb20gXCJ+L3NlcnZlci9hcGkvcm9vdFwiO1xyXG5cclxuY29uc3QgZ2V0QmFzZVVybCA9ICgpID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIFwiXCI7IC8vIGJyb3dzZXIgc2hvdWxkIHVzZSByZWxhdGl2ZSB1cmxcclxuICBpZiAocHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCkgcmV0dXJuIGBodHRwczovLyR7cHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTH1gOyAvLyBTU1Igc2hvdWxkIHVzZSB2ZXJjZWwgdXJsXHJcbiAgcmV0dXJuIGBodHRwOi8vbG9jYWxob3N0OiR7cHJvY2Vzcy5lbnYuUE9SVCA/PyAzMDAwfWA7IC8vIGRldiBTU1Igc2hvdWxkIHVzZSBsb2NhbGhvc3RcclxufTtcclxuXHJcbi8qKiBBIHNldCBvZiB0eXBlLXNhZmUgcmVhY3QtcXVlcnkgaG9va3MgZm9yIHlvdXIgdFJQQyBBUEkuICovXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBjcmVhdGVUUlBDTmV4dDxBcHBSb3V0ZXI+KHtcclxuICBjb25maWcoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAvKipcclxuICAgICAgICogVHJhbnNmb3JtZXIgdXNlZCBmb3IgZGF0YSBkZS1zZXJpYWxpemF0aW9uIGZyb20gdGhlIHNlcnZlci5cclxuICAgICAgICpcclxuICAgICAgICogQHNlZSBodHRwczovL3RycGMuaW8vZG9jcy9kYXRhLXRyYW5zZm9ybWVyc1xyXG4gICAgICAgKi9cclxuICAgICAgdHJhbnNmb3JtZXI6IHN1cGVyanNvbixcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBMaW5rcyB1c2VkIHRvIGRldGVybWluZSByZXF1ZXN0IGZsb3cgZnJvbSBjbGllbnQgdG8gc2VydmVyLlxyXG4gICAgICAgKlxyXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdHJwYy5pby9kb2NzL2xpbmtzXHJcbiAgICAgICAqL1xyXG4gICAgICBsaW5rczogW1xyXG4gICAgICAgIGxvZ2dlckxpbmsoe1xyXG4gICAgICAgICAgZW5hYmxlZDogKG9wdHMpID0+XHJcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgfHxcclxuICAgICAgICAgICAgKG9wdHMuZGlyZWN0aW9uID09PSBcImRvd25cIiAmJiBvcHRzLnJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBodHRwQmF0Y2hMaW5rKHtcclxuICAgICAgICAgIHVybDogYCR7Z2V0QmFzZVVybCgpfS9hcGkvdHJwY2AsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0UlBDIHNob3VsZCBhd2FpdCBxdWVyaWVzIHdoZW4gc2VydmVyIHJlbmRlcmluZyBwYWdlcy5cclxuICAgKlxyXG4gICAqIEBzZWUgaHR0cHM6Ly90cnBjLmlvL2RvY3MvbmV4dGpzI3Nzci1ib29sZWFuLWRlZmF1bHQtZmFsc2VcclxuICAgKi9cclxuICBzc3I6IGZhbHNlLFxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBJbmZlcmVuY2UgaGVscGVyIGZvciBpbnB1dHMuXHJcbiAqXHJcbiAqIEBleGFtcGxlIHR5cGUgSGVsbG9JbnB1dCA9IFJvdXRlcklucHV0c1snZXhhbXBsZSddWydoZWxsbyddXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSb3V0ZXJJbnB1dHMgPSBpbmZlclJvdXRlcklucHV0czxBcHBSb3V0ZXI+O1xyXG5cclxuLyoqXHJcbiAqIEluZmVyZW5jZSBoZWxwZXIgZm9yIG91dHB1dHMuXHJcbiAqXHJcbiAqIEBleGFtcGxlIHR5cGUgSGVsbG9PdXRwdXQgPSBSb3V0ZXJPdXRwdXRzWydleGFtcGxlJ11bJ2hlbGxvJ11cclxuICovXHJcbmV4cG9ydCB0eXBlIFJvdXRlck91dHB1dHMgPSBpbmZlclJvdXRlck91dHB1dHM8QXBwUm91dGVyPjtcclxuIl0sIm5hbWVzIjpbImh0dHBCYXRjaExpbmsiLCJsb2dnZXJMaW5rIiwiY3JlYXRlVFJQQ05leHQiLCJzdXBlcmpzb24iLCJnZXRCYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIlZFUkNFTF9VUkwiLCJQT1JUIiwiYXBpIiwiY29uZmlnIiwidHJhbnNmb3JtZXIiLCJsaW5rcyIsImVuYWJsZWQiLCJvcHRzIiwiZGlyZWN0aW9uIiwicmVzdWx0IiwiRXJyb3IiLCJ1cmwiLCJzc3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/api.ts\n");

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