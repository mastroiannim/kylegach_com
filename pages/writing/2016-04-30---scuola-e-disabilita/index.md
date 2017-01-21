---
title: Scuola e disabilità
path: /writing/scuola-e-disabilita/
date: 2016-04-30T22:08:10Z
intro: La questione dell’integrazione della diversità è molto importante nella scuola. Un tema sul quale si spendono parole, progetti, risorse da parte dei diversi attori del contesto scolastico.
commentPrompt: true
---

## Some things I already did

I purposefully did _not_ do many of the tasks below until I was able to write this post, because I wanted to measure the impact of each change and be able to explain each step. For example:

1. This site is static, meaning that all of the pages are pre-rendered on the server and then served directly. 
2. I’m using a webfont for the headings, but the body text uses a font stack that leverages the viewer’s system’s default font, which does not need to be loaded from the server.
3. The animations are built with SVG and driven by a ~40 Kb JS library.

Please see the [Colophon](/colophon/) for more details.

## Snapshot before any improvements

Before I do anything, let‘s get a snapshot of the current state of the site, to serve as a baseline. 

_Note: For all of the WebPageTest snapshots, I‘m testing the homepage of the site, three times, on a Motorola G in Chrome with a ‘3G - slow’ connection. The PageSpeed Insight snapshots are ran once, on the homepage._

<table>
	<thead>
		<tr>
			<th scope="col">Metric</th>
			<th scope="col">First View</th>
			<th scope="col">Repeat View</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>PageSpeed (Mobile)</td>
			<td colspan="1">68/100</td>
            <td colspan="1">68/100</td>
		</tr>
		<tr>
			<td>PageSpeed (Desktop)</td>
			<td colspan="2">71/100</td>
		</tr>
	</tbody>
	<caption>Summary of initial snapshot. <a href="http://www.webpagetest.org/result/160430_KW_176V/">Full results</a>.</caption>
</table>


## Preventing a Flash of Invisible Text (FOIT)

While it is loading, they’ll use the same font stack as the body text, changing the <abbr title="Flash of Invisible Text">FOIT</abbr> into a <abbr title="Flash of Unstyled Text">FOUT</abbr>. 
