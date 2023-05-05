/// <reference types="react" />
import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ allCaps, color, label, size, fontColor, backgroundColor }: import("../../components/MyLabel").MyLabelProps) => JSX.Element;
    tags: string[];
    argTypes: {
        label: {
            control: string;
        };
        size: {
            control: {
                type: string;
                options: string[];
            };
        };
        color: {
            control: string;
        };
        fontColor: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const AllCaps: Story;
export declare const Secondary: Story;
export declare const Tertiary: Story;
export declare const CustomFontColor: Story;
export declare const CustomBackgroundColor: Story;
