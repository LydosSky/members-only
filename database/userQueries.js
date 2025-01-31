const pool = require('./pool');
const _ = require('lodash');

/**
 * Create a new Users in the database
 * @param {Object} user
 * user Object is
 * {
 *   @property {string} firstname
 *   @property {string} lastname
 *   @property {string} email
 *   @property {string} password_hash
 * }
 * */
exports.createUser = ({ firstname, lastname, email, password_hash }) =>
  pool.query(
    'INSERT INTO users (firstname, lastname, email, password_hash) VALUES ($1, $2, $3, $4)',
    [firstname, lastname, email, password_hash],
  );

/**
 * Returns the user with given id
 * @param {Object} -
 * id Object is
 * {
 *   @property {number} id
 * }
 * */
exports.getUserById = ({ id }) =>
  pool
    .query('SELECT * FROM users WHERE id = $1', [id])
    .then((response) => _.first(response.rows));

/**
 * Returns the user with given username
 * @param {Object} - username
 * username Object is
 * {
 *   @property {string} username
 * }
 * */
exports.getUserByUsername = ({ username }) =>
  pool
    .query('SELECT * FROM users WHERE username = $1', [username])
    .then((response) => _.first(response.rows));
