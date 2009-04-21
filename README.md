# jQuery-jk

Lightweight jQuery plugin for traversing lists of things
like you do with Gmail messages.

## Usage

Just add the class name "jk" to something like a `ul` tag,
and all its `li` children will be considered traversable.

When an item has focus, it gets the class name `focus`.

When an item is selected, it gets the class name `selected`.

**View the spec/suite.html** for more info.

## Events

Custom events are triggered at different times:

### Focus

* `focus:added` When element gets focus
* `focus:lost` When element gets focus

### Selection

* `selection:added` When element gets selection
* `selection:lost` When element gets selection

### Pagination

These events are triggered when you can't traverse any further
in certain direction. They're a good hook for knowing when to
load additional elements or change the page. They are triggered
on the parent element.

* `paginate:next` When no next element is available
* `paginate:prev` When no previous element is available

<pre>
(c) Copyright 2009 Pat Nakajima

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
</pre>
