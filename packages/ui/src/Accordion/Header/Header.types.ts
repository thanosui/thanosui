import { AccordionItemSetStateAction, AccordionItemState } from '../Item/Item.types';

export interface HeaderProps {
	isOpened: AccordionItemState;
	setIsOpened: AccordionItemSetStateAction['setIsOpened'];
}
