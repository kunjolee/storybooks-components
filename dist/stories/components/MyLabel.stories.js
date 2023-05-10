import { MyLabel } from '../../components/MyLabel';
//Necesito exportacion por defecto
const meta = {
    title: 'UI/MyLabel',
    component: MyLabel,
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
export default meta;
export const Basic = {
    args: {
        label: 'Agregando valor por defecto',
        size: 'h1',
        allCaps: false //true: capitalizar toda la palabra
    }
};
export const AllCaps = {
    args: {
        label: 'por ejemplo aca que estas haciendo',
        size: 'normal',
        allCaps: true,
    }
};
//primary podria ser por defecto
export const Secondary = {
    args: {
        size: 'normal',
        color: 'secondary', //primary | secondary | tertiary
    }
};
export const Tertiary = {
    args: {
        size: 'normal',
        color: 'tertiary',
    }
};
export const CustomFontColor = {
    args: {
        fontColor: '#fc0789',
        size: 'h1'
    }
};
export const CustomBackgroundColor = {
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
