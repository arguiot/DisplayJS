# Noob Scroll
  <center><img src="https://rawgit.com/arguiot/NoobScroll/master/docs/img/noobscroll-logo.svg" width="256">

A lightweight jQuery Plugin that adds some cool function to make scrolling more fun.

[![GitHub release](https://img.shields.io/github/release/arguiot/NoobScroll.svg)](https://github.com/arguiot/NoobScroll/releases)
[![Build Status](https://travis-ci.org/arguiot/NoobScroll.svg?branch=master)](https://travis-ci.org/arguiot/NoobScroll)
[![Github All Releases](https://img.shields.io/github/downloads/arguiot/NoobScroll/total.svg)](https://github.com/arguiot/NoobScroll/)
[![npm](https://img.shields.io/npm/dt/noobscroll.svg)](https://www.npmjs.com/package/noobscroll)
[![License](https://img.shields.io/github/license/arguiot/NoobScroll.svg)](LICENSE)
  

</center>

## Getting Started

To use noobscroll.js, you'll need to download noobscroll.js and add it in your js folder. And after, add these line of code in the head or in the body of your page:
```html
// Add jQuery
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-3.2.1.min.js"><\/script>')</script>
// Add noobscroll.js
<script src="https://unpkg.com/noobscroll/dist/noobscroll.min.js"></script>
```
or you can install NoobScroll using [npm](https://npmjs.com/package/noobscroll)
```bash
$ npm install noobscroll
```

## Demo

```javascript
// Adds the click and drag style to scroll to any element
$("body").scrollDrag();

// Add a scroll bar to a div or any element
$(".myDiv").scrollMake({
  direction: "xy", // add a scroll bar for the the x and y axe
});

// Disable the scroll of any element that have a scroll bar
$("body").scrollDisable();

// Scroll to the element
$(".myDiv").scrollTo();

//And many more function ;) Go checkout the docs
```

The full docs can be found [here](https://github.com/arguiot/noobscroll/wiki)
