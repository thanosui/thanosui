import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
    title: 'Components/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    args: {
        logo: 'https://volta.net/mac/icon.png',
        links: [
            {
                name: 'Home',
                href: '#'
            },
            {
                name: 'Setvice',
                href: '#!'
            },
            {
                name: 'Contact',
                href: '#!'
            }
        ]
    }
};