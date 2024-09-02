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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Typography_1 = __importDefault(require("../../Typography"));
const Button_1 = __importStar(require("../../Button"));
/**
 * @component Renders the progress subheader component.
 * @param {ProgressSubHeaderProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const ProgressSubHeader = (props) => {
    const { totalSize, totalTime, literals, cancelAll, } = props;
    return (react_1.default.createElement(material_1.Box, { sx: (theme) => {
            return ({
                padding: '5px 12px',
                background: theme.palette.background.secondary,
                boxShadow: theme.shadows[6],
            });
        }, height: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" },
        react_1.default.createElement(material_1.Box, { display: "flex", alignItems: "center" },
            react_1.default.createElement(Typography_1.default, { variant: "caption", color: "text.secondary" }, `${literals.totalSizeLabel}:`),
            react_1.default.createElement(Typography_1.default, { variant: "caption", color: "text.primary", style: { marginLeft: '4px' } }, totalSize),
            totalTime && (react_1.default.createElement(Typography_1.default, { variant: "caption", color: "text.primary", style: { marginLeft: '8px' } }, totalTime))),
        cancelAll && (react_1.default.createElement(Button_1.default, { variant: Button_1.ButtonVariants.TEXT, onClick: () => { if (cancelAll)
                cancelAll(); }, sx: (theme) => {
                return ({
                    background: theme.palette.background.secondary,
                    height: '14px',
                    padding: '0px 3px',
                });
            } },
            react_1.default.createElement(Typography_1.default, { variant: "caption", color: "primary.main" }, literals.cancelAllLabel)))));
};
exports.default = ProgressSubHeader;