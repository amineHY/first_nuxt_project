jsdom = require("jsdom");

module.exports = function (content) {
  this.cacheable && this.cacheable(true);

  // parse HTML including normalizing broken HTML
  const doc = new jsdom.JSDOM("<html><body>" + content + "</body><html>").window
    .document;

  // rewrite all site-local anchors to nuxt-links
  // that will pre-load within the single page web app
  doc.querySelectorAll("a[href^='/']").forEach((element) => {
    const nuxt = doc.createElement("nuxt-link");
    nuxt.setAttribute("to", element.getAttribute("href"));
    element.removeAttribute("href");
    var attrs = element.attributes;
    for (var i = attrs.length - 1; i >= 0; i--) {
      nuxt.setAttribute(attrs[i].name, attrs[i].value);
    }
    nuxt.innerHTML = element.innerHTML;
    element.replaceWith(nuxt);
  });

  // make all images loading lazily using native browser support
  doc.querySelectorAll("img").forEach((element) => {
    // BUG: lazily loading images will not print unless the user scrolled down to the page first!
    // workaround: use beforeprint event and switch images to eager loading
    // https://bugs.chromium.org/p/chromium/issues/detail?id=875403
    element.setAttribute("loading", "lazy");
    if (element.getAttribute("alt")) {
      element.setAttribute("title", element.getAttribute("alt"));
    }
  });

  content = doc.querySelector("body").innerHTML;

  // wrap content in a section
  // as Vue.js needs a single root element in the template
  return `<template><section>${content}</section></template>`;
};
