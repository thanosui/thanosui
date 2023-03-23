import { Meta, Story } from "@storybook/react";
import { Tooltip, TooltipProps } from "./Tooltip";

export default {
    title: 'components/Tooltip',
    component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {

};