import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "ROOTFUL",
	subtitle: "",
	lang: "ja", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 150,
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		{
			src: "/favicon/favicon-rootful-32.png",
			sizes: "32x32",
		},
		{
			src: "/favicon/favicon-rootful-128.png",
			sizes: "128x128",
		},
		{
			src: "/favicon/favicon-rootful-180.png",
			sizes: "180x180",
		},
		{
			src: "/favicon/favicon-rootful-192.png",
			sizes: "192x192",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/r-sasaki-dev", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "RIKU SASAKI",
	bio: "AWS ソリューションアーキテクト（を目標に学習中）| ROOTFUL代表 | 営業職→Web系企業に転職→フリーランスエンジニア | TOEIC930点 | 「根本理解は全てに優先する」をモットーに活動しています",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:x-twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://x.com/rootful_riku?s=11&t=YQyHGlE9DChIbyFa4maZow",
		},
		{
			name: "LinkedIn",
			icon: "fa6-brands:linkedin",
			url: "https://www.linkedin.com/in/riku-sasaki/",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/r-sasaki-dev",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
