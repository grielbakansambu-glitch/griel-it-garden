import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration - G-RIEL IT GARDEN
 */

const config: QuartzConfig = {
  configuration: {
    pageTitle: "G-RIEL IT GARDEN 🛡️ | Cybersecurity & Labs",
    pageTitleSuffix: "",
    brandLogo: "/static/logo.jpeg",
    enableSPA: true,
    enablePopovers: true,

    // 👉 Désactivé pour éviter erreurs si non configuré
    analytics: null,

    locale: "fr-FR",

    // 👉 Version stable pour GitHub Pages
    baseUrl: "grielbakansambu-glitch.github.io",

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
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#d32f2f",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#0d1117",
          lightgray: "#30363d",
          gray: "#8b949e",
          darkgray: "#c9d1d9",
          dark: "#f0f6fc",
          secondary: "#d32f2f",
          tertiary: "#3fb950",
          highlight: "rgba(211, 47, 47, 0.15)",
          textHighlight: "#d32f2f33",
        },
      },
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

      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: false,
      }),

      Plugin.GitHubFlavoredMarkdown(),

      Plugin.TableOfContents(),

      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
      }),

      Plugin.Description(),

      Plugin.Latex({
        renderEngine: "katex",
      }),
    ],

    filters: [
      Plugin.RemoveDrafts(),
    ],

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
      Plugin.CustomOgImages(),
    ],
  },
}

export default config