import { Meta, Story } from "@storybook/react";
import { Navbar, NavbarProps } from "./Navbar";

export default {
    title: 'components/Navbar',
    component: Navbar,
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {

};