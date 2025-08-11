// postcss.config.js
import postcssImport from "postcss-import";
import postcssUrl from "postcss-url";
import combineMediaQuery from "postcss-combine-media-query";
import combineDuplicatedSelectors from "postcss-combine-duplicated-selectors";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcssReporter from "postcss-reporter";

export default {
  plugins: [
    postcssImport(),
    postcssUrl(),
    combineMediaQuery(),
    combineDuplicatedSelectors({
      removeDuplicatedProperties: true,
      removeDuplicatedValues: false,
    }),
    autoprefixer(),
    cssnano({
      preset: "default",
    }),
    postcssReporter(),
  ],
};
