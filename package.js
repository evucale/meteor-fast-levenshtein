Package.describe({
  name: 'fast-levenshtein',
  summary: "fast-levenshtein (inofficial): Efficient Levenshtein implementation with asynchronous callback support",
  version: "1.0.0",
});

Package.onUse(function (api) {
  api.versionsFrom("0.9.0");
  api.addFiles('levenshtein.js');
  api.export('Levenshtein');
});

Package.onTest(function(api) {
  api.use('sanjo:jasmine@0.14.0');
  api.use('fast-levenshtein');
  api.addFiles('meteorPackageTests.js');
});
