const Handlebars = require('handlebars');

require('./templates/helpers.js')(Handlebars);
require('./templates/views.min.js');
require('./templates/partials.min.js');

document.querySelector('.contents').innerHTML = Handlebars.templates.index({
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'title': 'Hello, world.'
});
