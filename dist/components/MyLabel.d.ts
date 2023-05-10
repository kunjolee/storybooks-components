/// <reference types="react" />
import './MyLabel.css';
export interface MyLabelProps {
    /**
     * Message will appear in the tag
     */
    label?: string;
    /**
     * This is the default label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize label
     */
    allCaps?: boolean;
    /**
     * Set the color
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Set font color
     */
    fontColor?: string;
    /**
     * backgroundColor
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
export default MyLabel;
