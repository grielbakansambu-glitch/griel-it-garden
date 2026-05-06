import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "G-RIEL IT GARDEN 🛡️",
    pageTitleSuffix: "",

    enableSPA: true,
    enablePopovers: true,

    locale: "fr-FR",

    baseUrl: "https://grielbakansambu-glitch.github.io/griel-it-garden/",

    analytics: {
      provider: "plausible",
    },

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
          secondary: "#1e88e5",
          tertiary: "#84a59d",
          highlight: "rgba(30, 136, 229, 0.15)",
          textHighlight: "#1e88e588",
        },
        darkMode: {
          light: "#0d1117",
          lightgray: "#30363d",
          gray: "#8b949e",
          darkgray: "#c9d1d9",
          dark: "#f0f6fc",
          secondary: "#1e88e5",
          tertiary: "#3fb950",
          highlight: "rgba(30, 136, 229, 0.15)",
          textHighlight: "#1e88e533",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate(),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown(),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks(),
      Plugin.Description(),
      Plugin.Latex(),
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