---
title: Tiddlywiki - Inability to scale
---



See [Scalability Limits for Note taking Applications](scalability_limits_for_note_taking_applications)

There are [claims in the official website][1] about how much data can a single Tiddlywiki can hold. However, no actual benchmarks are given. I looked around and found the biggest public examples of Tiddlywiki I could find:

- [H0p3's wiki][3]. It has above 15K notes, 50.4 MB in size as of 13th March 2022.
- [Tiddlygittly's Huge Wiki][2]: It has close to 16K notes, with a size of 70+MB.

I downloaded them for further testing. H0p3 seems to be managing all lists in the wiki statically[^1]. That is fine by me, I am a firm believer of not using app specific markup in the notes. However, an [audit note by the author][4] in which he talks about data loss, issues with NodeJS and other TW5 saver mechanisms and so on gives some serious points to ponder over.

Tiddlygittly's huge wiki content takes its sweet time to load. However, to its credit, it seemed to work rather fast once loaded.

The RAM usage that comes with loading and editing such a large single page application is also quite significant. Adding and editing notes in these wikis crashed my browser multiple times.

One of the most veteran users of Tiddlywiki had recently [raised the issue of scalability][5] which the community seems to have largely ignored.

Usual advice from the community is to split the data among several wikis. However, that will

- Undercut the ability to see back-links.
- Make it unable to search the text content of your notes.
- Adds link-rot upon modification of note titles.

[^1]: If you are familiar with the Tiddlywiki community, you will be hard-pressed to find a wiki where a list is created statically. Usage of [list widget][6] is the bread and butter of Tiddlywiki users. Yet here is the biggest Tiddlywiki that seems to have been extra careful in avoiding the same.

[1]: https://tiddlywiki.com/#Scalability
[2]: https://tiddly-gittly.github.io/HugeWikiExample/#Index:Index
[3]: https://h0p3.neocities.org/
[4]: https://h0p3.neocities.org/#2019.03.26%20-%20Wiki%20Audit%3A%20Cake
[5]: https://groups.google.com/g/tiddlywiki/c/dEhq2V4ZYzg/m/PZVkt5hLFAAJ
[6]: https://tiddlywiki.com/#ListWidget
