const BASE_GITHUB_URL = "https://github.com/elm-france/guide.elm-lang.org";

module.exports = {
  // Map of hooks
  hooks: {
    "page:before": function (page) {
      // Replace non-breaking spaces by their html entity
      page.content = page.content.replaceAll(" ", "&nbsp;");
      // Add page source & edit links
      page.content += `
---

[Source de cette page](${BASE_GITHUB_URL}/tree/master/book/${page.path}) —
[Suggérer une modification](${BASE_GITHUB_URL}/edit/master/book/${page.path})`;
      return page;
    },
  },

  // Map of new blocks
  blocks: {},

  // Map of new filters
  filters: {},
};
