const pool = require("../config/database");

const getUsers = async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
};

const getUserById = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
};

const createUser = async (name, email, password, perfil_photo) => {
    const result = await pool.query("INSERT INTO users (name, email, password, perfil_photo) VALUES ($1, $2, $3, $4) RETURNING *", [name, email, password, perfil_photo]);
    return result.rows[0];
};

const updateUser = async (id, name, email, password,) => {
    const result = await pool.query("UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *", [name, email, password, id]);
    return result.rows[0];
};

module.exports = { getUsers, getUserById, createUser, updateUser };