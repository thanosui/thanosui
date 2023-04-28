import { PanelProps } from './Panel.types';

export const Panel = (props: PanelProps) => {
	const { isOpened } = props;

	return (
		<>
			{/**
			 *	Note: In some circunstances using '<section>'
			 * for accordion panel is not advisable,
			 * as it can lead up to a huge number of region landmarks.
			 * If you have more than 6 accordion items,
			 * you should consider using a '<div>' instead.
			 * */}
			<div
				className="p-4"
				id="accordion-panel-1"
				role="region"
				aria-labelledby="accordion-header-1"
				aria-hidden={isOpened ? false : true}
			>
				<p>Accordion panel 1</p>
			</div>
		</>
	);
};
