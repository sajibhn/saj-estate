'use strict';

/**
 * processcard service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::processcard.processcard');
