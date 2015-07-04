# fast-levenshtein - Levenshtein algorithm adapted for meteor.js

An efficient Javascript implementation of the [Levenshtein algorithm](http://en.wikipedia.org/wiki/Levenshtein_distance) adapted to meteor.js with asynchronous callback support.
This is *not* the official meteor integration of this library.

## Features

The following list was taken from the original project and only slightly adjusted:

* Works both on client and server.
* Better performance than other implementations by not needing to store the whole matrix ([more info](http://www.codeproject.com/Articles/13525/Fast-memory-efficient-Levenshtein-algorithm)).
* Provides synchronous and asynchronous versions of the algorithm.
* Asynchronous version is almost as fast as the synchronous version for small strings and can also provide progress updates.
* Comprehensive test suite and performance benchmark using npm and other tools, see the [orginal repository](https://github.com/hiddentao/fast-levenshtein)
* Small: <1 KB minified and gzipped [orginal package](https://github.com/hiddentao/fast-levenshtein)

## Installation

placeholder

## License

MIT - see [LICENSE.md](https://github.com/hiddentao/fast-levenshtein/blob/master/LICENSE.md)
