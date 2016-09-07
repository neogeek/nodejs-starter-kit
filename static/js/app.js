const Handlebars = require('handlebars');

require('./templates/helpers.js');
require('./templates/views.js');
require('./templates/partials.js');

document.querySelector('.contents').innerHTML = Handlebars.templates.index({
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'title': 'Hello, world.'
});
