const Handlebars = require('handlebars');

require('./templates/helpers.js')(Handlebars);
require('./templates/views.min.js');
require('./templates/partials.min.js');

let locales = {};

Handlebars.registerHelper('__', key => {

    if (locales[key]) {

        return locales[key];

    }

    return key;

});

const renderView = (view, data) => {

    document.querySelector('.contents').innerHTML = Handlebars.templates[view](data);

};

fetch('/api/locales')
    .then(response => response.json())
    .then(data => {

        locales = data;

        renderView('index', {
            'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'title': 'Hello, world.'
        });

    });
