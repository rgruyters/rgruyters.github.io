import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://nieuweavonturenvan.nl",
  author: "Robin Gruyters",
  desc: "Mijn persoonlijk blog site",
  title: "Nieuwe Avonturen Van",
  ogImage: "banner.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  lang: "nl-NL",
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/rgruyters",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linked.in/in/rgruyters",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/rgruyters",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@commandantkeen",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@rgruyters",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];
