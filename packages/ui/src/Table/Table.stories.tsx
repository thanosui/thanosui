import { Meta, Story } from "@storybook/react";
import { Table, TableProps } from "./Table";

export default {
    title: 'components/Table',
    component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {

};