"use strict";
/* ======================================================================== *
 * Copyright 2024 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@mui/material/styles");
const Tab_1 = __importDefault(require("@mui/material/Tab"));
const TabStyled = (0, styles_1.styled)(Tab_1.default)(({ theme, iconPosition }) => {
    return {
        '&.MuiTab-root': Object.assign(Object.assign({}, theme.typography.subtitle2), { minHeight: '30px' }),
        '& .MuiSvgIcon-root': {
            marginBottom: iconPosition === 'top' ? '4px' : '0px',
        },
        '& .MuiTab-label': {
            color: theme.palette.text.secondary,
        },
        '&.Mui-selected': {
            color: theme.palette.text.primary,
        },
        '&.Mui-disabled': {
            color: theme.palette.text.disabled,
            '& .MuiSvgIcon-root': {
                color: theme.palette.action.disabled,
            },
        },
    };
});
const Tab = (_a) => {
    var props = __rest(_a, []);
    return (react_1.default.createElement(TabStyled, Object.assign({}, props, { sx: {
            minHeight: 'auto',
            minWidth: 'auto',
            textTransform: 'none',
        }, onClick: props.onClick })));
};
Tab.defaultProps = {};
__exportStar(require("@mui/material/Tab"), exports);
exports.default = Tab;
