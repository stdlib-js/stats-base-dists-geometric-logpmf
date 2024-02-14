<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm of Probability Mass Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Geometric][geometric-distribution] distribution logarithm of [probability mass function][pmf] (PMF).

<section class="intro">

The [probability mass function][pmf] (PMF) for a [geometric][geometric-distribution] random variable is defined as

<!-- <equation class="equation" label="eq:geometric_pmf" align="center" raw="\Pr(X = x) = \begin{cases}(1-p)^{x}\,p & \text{ for } x=0,1,2,\ldots \\ 0 & \text{ otherwise } \end{cases}" alt="Probability mass function (PMF) for a geometric distribution."> -->

```math
\Pr(X = x) = \begin{cases}(1-p)^{x}\,p & \text{ for } x=0,1,2,\ldots \\ 0 & \text{ otherwise } \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\Pr(X = x) = \begin{cases}(1-p)^{x}\,p &amp; \text{ for } x=0,1,2,\ldots \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:geometric_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/geometric/logpmf/docs/img/equation_geometric_pmf.svg" alt="Probability mass function (PMF) for a geometric distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `0 <= p <= 1` is the success probability. The random variable `X` denotes the number of failures until the first success in a sequence of independent Bernoulli trials.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import logpmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-logpmf@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-geometric-logpmf/tags). For example,

```javascript
import logpmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-logpmf@v0.2.0-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-logpmf@esm/index.mjs';
```

#### logpmf( x, p )

Evaluates the logarithm of the [probability mass function][pmf] (PMF) of a [geometric][geometric-distribution] distribution with success probability `0 <= p <= 1`.

```javascript
var y = logpmf( 4.0, 0.3 );
// returns ~-2.631

y = logpmf( 2.0, 0.7 );
// returns ~-2.765

y = logpmf( -1.0, 0.5 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpmf( NaN, 0.0 );
// returns NaN

y = logpmf( 0.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, -1.0 );
// returns NaN

y = logpmf( 2.0, 1.5 );
// returns NaN
```

#### logpmf.factory( p )

Returns a function for evaluating the logarithm of the [probability mass function][pmf] (PMF) of a [geometric][geometric-distribution] distribution with success probability `0 <= p <= 1`.

```javascript
var mylogpmf = logpmf.factory( 0.5 );
var y = mylogpmf( 3.0 );
// returns ~-2.773

y = mylogpmf( 1.0 );
// returns ~-1.386
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpmf` or `logcdf` functions is preferable to manually computing the logarithm of the `pmf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import logpmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-logpmf@esm/index.mjs';

var p;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = round( randu() * 5.0 );
    p = randu();
    y = logpmf( x, p );
    console.log( 'x: %d, p: %d, ln( P( X = x; p ) ): %d', x, p.toFixed( 4 ), y.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-geometric-logpmf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-geometric-logpmf

[test-image]: https://github.com/stdlib-js/stats-base-dists-geometric-logpmf/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-geometric-logpmf/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-geometric-logpmf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-geometric-logpmf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-geometric-logpmf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-geometric-logpmf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-geometric-logpmf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-geometric-logpmf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-geometric-logpmf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-geometric-logpmf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-geometric-logpmf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-geometric-logpmf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-geometric-logpmf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-geometric-logpmf/main/LICENSE

[geometric-distribution]: https://en.wikipedia.org/wiki/Geometric_distribution

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
