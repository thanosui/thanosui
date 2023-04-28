import { motion } from 'framer-motion';
import { useState } from 'react';
import { Header } from '../Header/Header';
import { Panel } from '../Panel/Panel';
import { AccordionItemState } from './Item.types';

export const Item = () => {
	const [isOpened, setIsOpened] = useState<AccordionItemState>(true);

	return (
		<motion.div
			className={'overflow-hidden'}
			animate={{
				height: isOpened ? 'auto' : 55,
			}}
		>
			<Header {...{ isOpened, setIsOpened }} />
			<Panel {...{ isOpened }} />
		</motion.div>
	);
};
