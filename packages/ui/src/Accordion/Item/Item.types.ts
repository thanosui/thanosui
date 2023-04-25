import { Dispatch, SetStateAction } from 'react';

export type AccordionItemState = boolean;

export interface AccordionItemSetStateAction {
	setIsOpened: Dispatch<SetStateAction<boolean>>;
}
