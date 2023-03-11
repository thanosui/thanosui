import { withConsole } from '@storybook/addon-console';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import '../styles.css';

export const parameters = {
  // actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: themes.dark,
  },
};

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addParameters({
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
});
