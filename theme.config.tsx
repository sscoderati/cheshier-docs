import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Cheshier's Docs</span>,
  project: {
    link: "https://github.com/sscoderati",
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://github.com/sscoderati" target="_blank">
          Changgi Hong
        </a>
        .
      </span>
    ),
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  primaryHue: {
    dark: 192,
    light: 250,
  },
  useNextSeoProps() {
    titleTemplate: "%s - Cheshier's Docs";
  },
};

export default config;
