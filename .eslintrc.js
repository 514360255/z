module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    'import/newline-after-import': 1,
    'lines-between-class-members': 1,
    'react/jsx-key': 1,
    'no-unused-expressions': 1,
    'spaced-comment': 1
  },
};
