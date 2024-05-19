import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(tsx|ts)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  /*
   * MEMO: This is a workaround for the issue that the docs cannot be generated for TypeScript files.
   * The following configuration is using react-docgen-typescript instead of react-docgen.
   * Revert react-docgen-typescript when react-docgen becomes available, as it is no longer maintained and has inferior performance.
   *
   * See
   * - https://github.com/storybookjs/storybook/issues/26496
   * - https://github.com/reactjs/react-docgen
   * - https://github.com/styleguidist/react-docgen-typescript
   */
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
