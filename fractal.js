/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Styleguide Document');

/* Set Project Version */
fractal.set('project.version', 'v1.0');

/* Set Project Author */
fractal.set('project.author', 'Michinobu Nishimoto<nismit.dev@gmail.com>');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/docs/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs/pages');

/* Build Fractal where the published documentation */
fractal.web.set('builder.dest', __dirname + '/docs');

/* Set Actual Stylesheet Path in Preview */
fractal.web.set('static.path', __dirname + '/dist');