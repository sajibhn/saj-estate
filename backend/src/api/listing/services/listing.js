'use strict';

/**
 * listing service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::listing.listing');
