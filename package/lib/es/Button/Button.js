import { forwardRef } from 'react';
import tw from 'tailwind-styled-components';
const TwElement = tw.button `rounded bg-purple-600 px-4 py-2`;
const Button = forwardRef((props, ref) => {
    const asElement = props.href ? 'a' : 'button';
    return (React.createElement(TwElement, Object.assign({}, props, { "$as": asElement, ref: ref })));
});
export default Button;
