"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const tailwind_styled_components_1 = __importDefault(require("tailwind-styled-components"));
const TwElement = tailwind_styled_components_1.default.button `rounded bg-purple-600 px-4 py-2`;
const Button = (0, react_1.forwardRef)((props, ref) => {
    const asElement = props.href ? 'a' : 'button';
    return (React.createElement(TwElement, Object.assign({}, props, { "$as": asElement, ref: ref })));
});
exports.default = Button;
