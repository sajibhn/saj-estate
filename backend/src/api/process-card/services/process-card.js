'use strict';

/**
 * process-card service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::process-card.process-card');
