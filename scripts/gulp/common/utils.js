/**
 * @name utils.js
 * @description utilities
 */
import { path } from './lib';

const ENVIRONMENT = '.secrets/environment.json';
const URL_SERVICE_SOAP_METADATA = 'my.salesforce.com/services/Soap/m';

/**
 * @name getEnvironment
 */
const getEnvironment = () => {
  const environment = require(path.join(
    __dirname,
    path.relative(__dirname, ENVIRONMENT)
  ));

  return environment;
};

export { URL_SERVICE_SOAP_METADATA, getEnvironment };
