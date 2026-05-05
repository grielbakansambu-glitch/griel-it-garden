import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "G-RIEL IT GARDEN 🛡️ | Cybersecurity & Labs",

    pageTitleSuffix: "",

    enableSPA: true,
    enablePopovers: true,

    locale: "fr-FR",

    baseUrl: "grielbakansambu-glitch.github.io",

    // ⚠️ Analytics OBLIGATOIRE → on garde minimal
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