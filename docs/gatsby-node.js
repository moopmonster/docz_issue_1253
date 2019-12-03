// gatsby-node.js
const path = require("path");

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [
        /* path.resolve(__dirname, "../../newtest/src/components"), */
        path.resolve(__dirname, "../../newtest"),
        "node_modules"
      ]
    }
  });
};
