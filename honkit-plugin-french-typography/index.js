module.exports = {
  // Map of hooks
  hooks: {
    page: function (page) {
      page.content = page.content.replace(' ', '&nbsp;');
      return page;
    },
  },

  // Map of new blocks
  blocks: {},

  // Map of new filters
  filters: {},
};
