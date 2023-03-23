import { Meta, Story } from "@storybook/react";
import { Progress, ProgressProps } from "./Progress";

export default {
    title: 'components/Progress',
    component: Progress,
} as Meta;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

export const Default = Template.bind({});
Default.args = {

};