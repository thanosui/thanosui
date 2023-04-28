import { Meta, StoryObj } from '@storybook/react';

import { Collapse, } from './Collapse';


const meta: Meta<typeof Collapse> = {
    title: 'Components/Collapse',
    component: Collapse,
    tags: ['autodocs'],
};


export default meta;

type Story = StoryObj<typeof Collapse>;

export const Primary: Story = {
    render: () => <Collapse title='Tes' >
        <Collapse.Item>Ye</Collapse.Item>
    </Collapse>,
};

export const WithText: Story = {
    args: {
    },
}; 