import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
	title: 'Components/Accordion',
	// component: Accordion,
	parameters: {
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
	args: {},
	render: () => (
		<Accordion>
			<Accordion.Item />
			<Accordion.Item />
			<Accordion.Item />
		</Accordion>
	),
};
