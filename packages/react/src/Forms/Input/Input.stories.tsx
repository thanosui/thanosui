import { Meta, Story } from "@storybook/react";
import { Input, InputProps } from "./Input";

export default {
    title: 'components/Forms/Input',
    component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {

};