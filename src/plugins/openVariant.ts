const plugin = require('tailwindcss/plugin');

const openVariant = plugin(function ({ addVariant }: any) {
  addVariant('group-open', ':merge(.group).open &');
  addVariant('peer-open', ':merge(.peer).open ~ &');
});

module.exports = openVariant;
