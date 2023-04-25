import { IconProps } from './Icon.types';

export const Icon = (props: IconProps) => {
	const { isOpened } = props;

	return (
		<svg
			className={`h-6 w-6 ${isOpened ? 'rotate-180' : 'rotate-0'} transition rotate duration-300 ease-in-out`}
			viewBox="0 0 32 32"
			aria-hidden="true"
		>
			<path d="M15.1,23.7l-9.4-9.3c-1-1-1-2.6,0-3.6l0,0c1-1,2.6-1,3.6,0l5.8,5.7c0.5,0.5,1.2,0.5,1.7,0l5.8-5.7c1-1,2.6-1,3.6,0l0,0c1,1,1,2.6,0,3.6l-9.4,9.3C16.4,24.1,15.6,24.1,15.1,23.7z" />
		</svg>
	);
};
