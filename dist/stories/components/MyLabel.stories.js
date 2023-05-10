"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../../components/MyLabel");
//Necesito exportacion por defecto
var meta = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        size: {
            control: {
                type: 'radio',
                options: ['normal', 'h1', 'h2', 'h3']
            }
        },
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
};
exports.default = meta;
exports.Basic = {
    args: {
        label: 'Agregando valor por defecto',
        size: 'h1',
        allCaps: false //true: capitalizar toda la palabra
    }
};
exports.AllCaps = {
    args: {
        label: 'por ejemplo aca que estas haciendo',
        size: 'normal',
        allCaps: true,
    }
};
//primary podria ser por defecto
exports.Secondary = {
    args: {
        size: 'normal',
        color: 'secondary', //primary | secondary | tertiary
    }
};
exports.Tertiary = {
    args: {
        size: 'normal',
        color: 'tertiary',
    }
};
exports.CustomFontColor = {
    args: {
        fontColor: '#fc0789',
        size: 'h1'
    }
};
exports.CustomBackgroundColor = {
    args: {
        fontColor: '#eee',
        size: 'h1',
        backgroundColor: '#000'
    }
};
// customFontColor
// fontColor: fc0789
// size: h1
//el color se tiene que aplicar al label
//v.6
// const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args} /> 
//crear historias de ese componente
// export const Basic = Template.bind({});
// export const AllCaps = Template.bind({});
// export const Secondary = Template.bind({});
