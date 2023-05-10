import { jsx as _jsx } from "react/jsx-runtime";
import './MyLabel.css';
export const MyLabel = ({ allCaps = false, color = 'primary', label = 'No label ', size = 'normal', fontColor = '', backgroundColor = 'transparent' }) => {
    return (_jsx("span", Object.assign({ className: `label ${size} text-${color}`, style: { color: fontColor, backgroundColor } }, { children: allCaps ? label.toUpperCase() : label })));
};
export default MyLabel;
