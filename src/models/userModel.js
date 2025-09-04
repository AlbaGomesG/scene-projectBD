const pool = require("../config/database");

const getUsers = async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
};

const getUserById = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
};

module.exports = { getUsers, getUserById };