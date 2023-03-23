import { Meta, Story } from "@storybook/react";
import { Loading, LoadingProps } from "./Loading";

export default {
    title: 'components/Loading',
    component: Loading,
} as Meta;

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {

};