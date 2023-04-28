// Pagination.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
    title: 'Components/Pagination',
    component: Pagination,
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
    render: () => <Pagination currentPage={1} totalPages={20} onChange={console.log} />,
};