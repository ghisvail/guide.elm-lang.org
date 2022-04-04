module.exports = {
  // Map of hooks
  hooks: {
    "page:before": function (page) {
      page.content = page.content.replaceAll(" ", "&nbsp;");
      return page;
    },
  },

  // Map of new blocks
  blocks: {},

  // Map of new filters
  filters: {},
};
