Package.describe({
  name: 'levenshtein',
  summary: "Efficient Levenshtein implementation with asynchronous callback support",
  version: "1.0.0",
});

Package.onUse(function (api) {
  api.versionsFrom("0.9.0");
  api.addFiles('levenshtein.js');
  api.export('levenshtein');
});

Package.onTest(function(api) {
  api.use('sanjo:jasmine@0.14.0');
  api.use('levenshtein');
  api.addFiles('meteorPackageTests.js');
});
