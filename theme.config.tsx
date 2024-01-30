import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Chang Gi's Docs</span>,
  project: {
    link: "https://github.com/sscoderati",
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://github.com/sscoderati" target="_blank">
          Chang Gi Hong
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
    titleTemplate: "%s - Chang Gi's Docs";
  },
};

export default config;
