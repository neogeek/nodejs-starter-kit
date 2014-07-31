define(['jquery', 'templates'], function ($, templates) {

    'use strict';

    $('body').append(templates.sample({ title: 'Sample Handlebars Template' }));

});
