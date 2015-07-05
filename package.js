Package.describe({
  name: 'evucale:fast-levenshtein',
  summary: "fast-levenshtein (inofficial): Efficient implementation with asynchronous callback support",
  version: "1.0.0",
  git: "https://github.com/evucale/meteor-fast-levenshtein.git"
});

Package.onUse(function (api) {
  api.versionsFrom("0.9.0");
  api.addFiles('levenshtein.js');
  api.export('Levenshtein');
});

Package.onTest(function(api) {
  api.use('sanjo:jasmine@0.14.0');
  api.use('evucale:fast-levenshtein');
  api.addFiles('meteorPackageTests.js');
});
