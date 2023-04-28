import { Meta, Story } from "@storybook/react";
import { Modal, ModalProps } from "./Modal";

export default {
    title: 'components/Modal',
    component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {

};