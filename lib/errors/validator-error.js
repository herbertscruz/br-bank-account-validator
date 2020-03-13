
const http = require('http');

module.exports = class ValidatorError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.name = http.STATUS_CODES[status];
    this.status = status;
    this.message = message;
  }
};
