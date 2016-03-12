Package.describe({
  name: 'carinakoo:canvas',
  version: '0.1.0',
  summary: "Wrapper for the NPM 'canvas' package",
  git: 'https://github.com/carinakoo/meteor-canvas.git',
  documentation: 'README.md'
});

Npm.depends({
    canvas:'1.3.12'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('lib/canvas.js', 'server');
  api.export(['Canvas']);
});
