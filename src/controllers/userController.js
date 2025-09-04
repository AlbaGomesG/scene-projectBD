const userModel = require("../models/userModel");

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getUsers();
        res.json(users);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar usuários." });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "O usuário que você está procurando não foi encontrado."});
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar usuário."});
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const perfil_photo = req.file ? req.file.filename : null;
        const newUser = await userModel.createUser(name, email, password, perfil_photo);
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        if (error.code === "23505") {
            return res.status(400).json({ message: "Esse email já está cadastrado no nosso sistema."});
        }
        res.status(500).json({ message: "Erro ao criar usuário 👤"});
    }
};

const updateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const updateUser = await userModel.updateUser(req.params.id, name, email, password);
        if (!updateUser) {
            return res.status(404).json({ message: "O usuário que você está tentando atualizar não foi encontrado."});
        }
        res.json(updateUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao atualizar esse usuário."});
    }
};

module.exports = { getAllUsers, getUser, createUser, updateUser };