// import { addDecorator, DecoratorFn } from '@storybook/react';
// import { withThemesProvider } from 'storybook-addon-styled-component-theme';
// import { ThemeProvider } from 'styled-components';
// import buttonTheme from '../src/themes/button';

// // https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
// export const parameters = {
//   // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
//   actions: { argTypesRegex: '^on.*' },
// };

// const withTheme: DecoratorFn = (StoryFn) => {
//   return (
//     <ThemeProvider theme={buttonTheme}>
//       <StoryFn />
//     </ThemeProvider>
//   );
// };

// // export all decorators that should be globally applied in an array
// export const decorators = [withTheme];

// .storybook/preview.tsx
import { ThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';
import { theme as button } from '../src/themes/button';
import { theme as bcgov } from '../src/themes/bcgov';

const withTheme: DecoratorFn = (StoryFn, context) => {
  // Get the active theme value from the story parameter
  const { theme } = context.parameters;
  const storyTheme = theme === 'button' ? button : bcgov;
  return (
    <ThemeProvider theme={storyTheme}>
      <StoryFn />
    </ThemeProvider>
  );
};

// export all decorators that should be globally applied in an array
export const decorators = [withTheme];
