/**
 * @fileOverview
 * @name userQueries.js
 * @author
 * @license
 */
const pool = require('./pool');
const _ = require('lodash');
const roleQueries = require('./roleQueries');

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
exports.createUser = ({
  username,
  firstname,
  lastname,
  email,
  password_hash,
}) =>
  pool
    .query(
      'INSERT INTO users (username, firstname, lastname, email, password_hash) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [username, firstname, lastname, email, password_hash],
    )
    .then((response) => roleQueries.defaultUserRole(_.first(response.rows).id));
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
    .query(
      'SELECT u.*, r.role_name as user_role FROM users u JOIN user_roles ur ON u.id = ur.user_id JOIN roles r ON ur.role_id = r.id WHERE u.id = $1',
      [id],
    )
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
    .query(
      'SELECT u.*, r.role_name FROM users u JOIN user_roles ur ON u.id = ur.user_id JOIN roles r ON ur.role_id = r.id WHERE u.username = $1',
      [username],
    )
    .then((response) => _.first(response.rows));

exports.getUsers = () =>
  pool
    .query(
      'SELECT u.*, r.role_name FROM users u JOIN user_roles ur ON u.id = ur.user_id JOIN roles r ON ur.role_id = r.id',
    )
    .then((response) => response.rows);
