'use strict';

/**
 * benefit-stripe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::benefit-stripe.benefit-stripe');
