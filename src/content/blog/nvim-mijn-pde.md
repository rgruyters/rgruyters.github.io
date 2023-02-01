---
pubDatetime: 2023-01-16T19:44:27+1
title: Neovim, mijn PDE
featured: true
draft: false
tags:
  - neovim
  - coding
  - dev
  - pde
ogImage: ""
description:
  Al jaren maak ik met veel plezier gebruik van Vi(m) als mijn text editor en
  sinds een paar jaar ook van Neovim.
---

Al sinds dat ik begonnen ben met Linux heb ik Vi(m) als tekst editor gebruikt.
Veelal om snel wat tekst of code aan te passen en later steeds meer ook als een
waardig code editor gebruikt. Ik had toen wel naar andere editors gekeken die
meer Intergrated Development Environment (IDE) waren (Eclipse anyone?), maar ik
vond ze vooral log, onhandig en traag.

In de periode dat ik veel websites bouwde maakte ik gebruik van aantal plugins
in Vim om (o.a.) css- en sass syntax checks uit te voeren. In die periode waren
ook andere editors op komst die vooral gefocust waren op web development, zoals
[Coda](https://panic.com/coda), [Espresso](https://espressoapp.com) en
[Brackets](https://brackets.io). Allemaal hadden ze net dat iets extra's wat op
dat moment wat lastiger was in Vim.<br />
Die tijd maakte ik de basis klaar in één van de GUI editors, en ging vervolgens
verder in Vim. Na een tijdje had ik het bouwen van websites goed onder de knie
en was het makkelijker (en sneller) om direct in Vim te doen.

Later kwam ook [SublimeText](https://sublimetext.com) en iets later [VSCode](https://code.visualstudio.com)
in het leven.
Deze tools hebben dan ook veel plugins en functionaliteiten die je nodig hebt
als IDE, maar dat gaat soms ten koste van de snelheid. (zeker VSCode)<br />
Ander nadeel is dat als je al zo erg gewent bent om Vim te gebruiken dat je
soms keymaps tegen kwam in je code, wat eigenlijk een actie in Vim had moeten
zijn. Ja, je kon toen al Vim integratie gebruiken in SublimeText of VSCode,
maar die was vooral beperkt tot het navigeren in je code.

Om volledig over te stappen naar Vim als IDE, stelde een collega van mij voor om
[SpaceVim](https://spacevim.org) eens te gebruiken.<br />
Ik heb SpaceVim dan ook aantal jaren gebruikt, alleen was het soms lastig om de
Language Server Protocol (LSP) goed te configureren of nieuwe plugins toe te
voegen.
Soms kreeg ik het wel voor elkaar, maar soms had ik wat aangepast en werkte
vervolgens een ander plugin weer niet.
Het was ook best lastig om goed te achterhalen wat er nu echt fout ging.
(althans dat vond ik)<br />
Ander ding is dat SpaceVim een eigen keymap structuur heeft, die ik niet goed
onder de knie kreeg. Deze kon je wel aanpassen, maar kon weer problemen geven
bij updates van SpaceVim.<br />
Wat ook vervelend was is dat ze ineens [Github issues](https://github.com/SpaceVim/SpaceVim/issues)
dicht hadden gezet en overgestapt waren naar Google Groups, wat totaal niet
handig was. (inmiddels hebben ze dit weer terug gedraaid)<br />
In die periode kwam ik [Neovim](https://neovim.org) tegen als alternatief voor
Vim en zag er veel belovend uit.

Neovim is een herstructurering van Vim. Het bevat 30% minder source code dan Vim
en heeft [Lua](https://lua.org) scripting ondersteuning. Daarbij ondersteunt
het nog steeds de standaard Vimscripting van Vim zelf. Dit maakt het soms
makkelijker en beter om Vim uit te breiden met functionaliteiten. Het is geen
nieuwe tool, maar een verlenging van de standaard.

![plugins bijwerken via Neovim](/assets/posts/plugins-bijwerken-via-neovim.png)

Met Lua ondersteuning was het redelijk makkelijk om extra functies toe te voegen
aan mijn Neovim config. Nadeel was wel dat sommige wijzigingen weer in de weg
zaten met SpaceVim.<br />
Toen ik op YouTube filmpjes van Christian Chiarulli tegenkwam over [Neovim from scratch](https://www.youtube.com/playlist?list=PLhoH5vyxr6Qq41NFL4GvhFp-WLd5xzIzZ)
ben ik deze gaan volgen en uiteindelijk mijn [eigen Neovim config](https://github.com/rgruyters/nvim)
gaan opstellen. Het voordeel wat ik toen zag is dat ik Neovim beter begon te
begrijpen en dat de Neovim config helemaal naar mijn eigen hand kon leggen in hoe ik
het wou hebben.<br />
Deze manier van je Neovim config opstellen noemt [TJ de Vries](https://github.com/tjdevries/),
één van de code developers van Neovim, Personalized Development Environment (PDE).

<div class="vid"><iframe width="560" height="315" src="https://www.youtube.com/embed/QMVIJhC9Veg?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

Ik werk nu ongeveer drie kwart jaar in mijn opgestelde PDE en ben er zeer
tevreden mee hoe deze nu is opgebouwd en werkt. Beheren van [plugins](https://github.com/rgruyters/nvim/blob/main/lua/grtrs/plugins.lua)
gaat nu een stuk makkelijker en de [plugin configuraties](https://github.com/rgruyters/nvim/tree/main/after/plugin)
is ook overzichtelijker geworden.

Als je geïnteresseerd bent hoe mijn Neovim configuratie is opgebouwd, dan is deze
vinden op [https://github.com/rgruyters/nvim](https://github.com/rgruyters/nvim).<br />
Doe ermee wat je wilt, maar houd rekening mee dat het is afgestemd op mijn
wensen.
