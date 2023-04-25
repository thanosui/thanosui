import { tv } from 'tailwind-variants';
import { AccordionProps } from './Accordion.types';
import { Item } from './Item/Item';

const accordion = tv({
	slots: {
		base: [],
	},
	variants: {},
	compoundVariants: [],
	defaultVariants: {},
});

export const Accordion = (props: AccordionProps) => {
	const { children } = props;

	// https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/#sc1_label
	// https://www.aditus.io/patterns/accordion/#aria-roles-states-and-properties
	return <div className="flex flex-row gap-2">{children}</div>;
};

Accordion.Item = Item;
