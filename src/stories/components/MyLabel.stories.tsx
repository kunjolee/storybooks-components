import { StoryObj, Meta } from '@storybook/react'; 

import { MyLabel } from '../../components/MyLabel';
//Necesito exportacion por defecto
const meta = {
    title: 'UI/MyLabel', //define el punto en el cual se va a agrupar
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
} satisfies Meta<typeof MyLabel>

export default meta;
//utilizacion de nuestro componente
type Story = StoryObj<typeof meta>;


export const Basic: Story = {
    args: {
        label: 'Agregando valor por defecto',
        size: 'h1',
        allCaps: false //true: capitalizar toda la palabra
    }
}

export const AllCaps: Story = {
    args: {
        label: 'por ejemplo aca que estas haciendo',
        size: 'normal',
        allCaps: true,
    }
}
//primary podria ser por defecto

export const Secondary: Story = {
    args: {
        size: 'normal',
        color: 'secondary', //primary | secondary | tertiary
    }
}

export const Tertiary: Story = {
    args: {
        size: 'normal',
        color: 'tertiary',      
    }
}

export const customFontColor: Story = {
    args: {
        fontColor: '#fc0789',
        size: 'h1'
    }
}


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