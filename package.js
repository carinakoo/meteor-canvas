Package.describe({
  name: 'carinakoo:canvas',
  version: '0.1.2',
  summary: "Wrapper for the NPM 'canvas' package",
  git: 'https://github.com/carinakoo/meteor-canvas.git',
  documentation: 'README.md'
});

Npm.depends({
    // OSX custom font workaround requires canvas version 1.1.6: 
    // https://github.com/Automattic/node-canvas/issues/548
    canvas:'1.1.6'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('lib/canvas.js', 'server');
  api.export(['Canvas']);
});
