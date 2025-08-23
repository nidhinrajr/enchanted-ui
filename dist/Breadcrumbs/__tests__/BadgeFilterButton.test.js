"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const user_event_1 = __importDefault(require("@testing-library/user-event"));
const BadgeFilterButton_1 = __importDefault(require("../BadgeFilterButton"));
require("@testing-library/jest-dom");
describe('BadgeFilterButton', () => {
    it('toggles badge visibility when filter button is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        (0, react_2.render)(react_1.default.createElement(BadgeFilterButton_1.default, null));
        const filterButton = react_2.screen.getByTestId('testFilterButton');
        const badge = react_2.screen.getByTestId('testFilterBadge');
        // Initially invisible
        expect(badge).toHaveClass('MuiBadge-invisible');
        // Click to show badge
        yield user_event_1.default.click(filterButton);
        expect(badge).not.toHaveClass('MuiBadge-invisible');
        // Click again to hide badge
        yield user_event_1.default.click(filterButton);
        expect(badge).toHaveClass('MuiBadge-invisible');
    }));
});
