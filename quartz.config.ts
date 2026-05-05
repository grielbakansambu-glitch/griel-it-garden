import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "grielbakansambu-glitch.github.io/griel-it-garden",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
  lightMode: {
    light: "#f5f7fa",
    lightgray: "#dce3ea",
    gray: "#9aa7b2",
    darkgray: "#2b3440",
    dark: "#1e2a36",

    secondary: "#1e88e5",   // 🔵 bleu cyber
    tertiary: "#2ecc71",    // 🟢 vert tech

    highlight: "rgba(30, 136, 229, 0.15)",
    textHighlight: "#2ecc7133",
  },

  darkMode: {
    light: "#0b1220",
    lightgray: "#1b2633",
    gray: "#7f8c9a",
    darkgray: "#cfd8e3",
    dark: "#f0f6fc",

    secondary: "#1e88e5",   // 🔵 bleu cyber
    tertiary: "#2ecc71",    // 🟢 vert tech

    highlight: "rgba(30, 136, 229, 0.15)",
    textHighlight: "#2ecc7133",
  },
}
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config