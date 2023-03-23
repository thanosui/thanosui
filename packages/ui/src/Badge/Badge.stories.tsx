import { Meta, Story } from "@storybook/react";
import { Badge, BadgeProps } from "./Badge";

export default {
    title: 'components/Badge',
    component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {

};