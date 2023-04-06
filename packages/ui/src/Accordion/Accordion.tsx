import { tv } from 'tailwind-variants';
import { AccordionProps } from './Accordion.types';

const accordion = tv({
	slots: {
		base: [],
	},
	variants: {},
	compoundVariants: [],
	defaultVariants: {},
});

export const Accordion = (props: AccordionProps) => {
	return (
		// https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/#sc1_label
		// https://www.aditus.io/patterns/accordion/#aria-roles-states-and-properties
		<div className="">
			{/* <li className=""> */}
			<h3 className="bg-slate-500" id="accordion-header-1">
				<button
					className="flex w-full justify-between gap-4 p-4"
					type="button"
					aria-expanded="true"
					aria-controls="accordion-panel-1"
				>
					Accordion heading
					<svg className="h-6 w-6" viewBox="0 0 32 32" aria-hidden="true">
						<path d="M15.1,23.7l-9.4-9.3c-1-1-1-2.6,0-3.6l0,0c1-1,2.6-1,3.6,0l5.8,5.7c0.5,0.5,1.2,0.5,1.7,0l5.8-5.7c1-1,2.6-1,3.6,0l0,0c1,1,1,2.6,0,3.6l-9.4,9.3C16.4,24.1,15.6,24.1,15.1,23.7z" />
					</svg>
				</button>
			</h3>

			{/**
			 *	Note: In some circunstances using '<section>'
			 * for accordion panel is not advisable,
			 * as it can lead up to a huge number of region landmarks.
			 * If you have more than 6 accordion items,
			 * you should consider using a '<div>' instead.
			 * */}
			<section className="target:n p-4" id="accordion-panel-1" aria-labelledby="accordion-header-1" aria-hidden="false">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aperiam nam fugiat, quibusdam officiis neque
					ducimus repellendus ratione hic iure
				</p>
			</section>
			{/* </div> */}
		</div>
	);
};
