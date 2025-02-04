const pool = require('./pool');

/**
   For now there is 3 types of logged-in user
 */
const UserRole = {
  ADMIN: 1,
  MEMBER: 2,
  USER: 3,
};

exports.newRole = (role) =>
  pool.query('INSERT INTO roles (role_name) VALUES ($1)', [role]);

exports.getRoles = () =>
  pool.query('SELECT * FROM roles').then((response) => response.rows);

exports.defaultUserRole = (user_id) =>
  pool.query('INSERT INTO user_roles (user_id, role_id) VALUES ($1, $2)', [
    user_id,
    UserRole.USER,
  ]);

exports.changeUserRole = (user_id, role_id) =>
  pool.query('UPDATE user_roles SET role_id = $2 WHERE user_id = $1', [
    user_id,
    role_id,
  ]);
