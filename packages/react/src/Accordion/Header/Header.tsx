import { Icon } from '../Icon/Icon';
import { HeaderProps } from './Header.types';

export const Header = (props: HeaderProps) => {
	const { isOpened, setIsOpened } = props;

	function clickHandler() {
		setIsOpened(!isOpened);
	}

	return (
		<h3 className="bg-slate-500 rounded">
			<button
				className="flex w-full justify-between gap-4 p-4"
				id="accordion-header-1"
				type="button"
				onClick={clickHandler}
				aria-expanded={isOpened ? true : false}
				aria-controls="accordion-panel-1"
			>
				Accordion title 1
				<Icon {...{ isOpened }} />
			</button>
		</h3>
	);
};
