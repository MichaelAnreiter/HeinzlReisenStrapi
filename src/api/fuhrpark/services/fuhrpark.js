'use strict';

/**
 * fuhrpark service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fuhrpark.fuhrpark');
