module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', '::v-deep'],
      },
    ],
    'keyframes-name-pattern': null,
    'selector-class-pattern': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'selector-descendant-combinator-no-non-space': null,
    'selector-combinator-space-before': null,
    'declaration-block-no-redundant-longhand-properties': null,
  },
};
