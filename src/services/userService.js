import bcrypt from 'bcryptjs';
import db from '../config/database.js';
import dataUser from '../models/index.js';

var salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    var hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = async (email, password, username) => {
    try {
        let hashPassword = hashUserPassword(password);
        // user ORM
        await dataUser.user.create({
            email: email,
            password: hashPassword,
            username: username
        });

    } catch (error) {
        console.log(">>> Error getting: ", error);
    }
}

const getListUser = async () => {
    try {
        const { rows } = await db.query(
            `SELECT *
         FROM users`
        )
        return rows;
    } catch (error) {
        console.log(">>> Error getting: ", error);
    }
}

const deleteUser = async (userId) => {
    try {
        await dataUser.user.destroy({
            where: {
                id: userId,
            },
        })
    } catch (error) {
        console.log(">>> Error getting: ", error);
    }
}

const getUser = async (userId) => {
    try {
        let user = {};
        user = await dataUser.user.findOne({
            where: { id: userId }
        })
        return user;
    } catch (error) {
        console.log(">>> Error getting: ", error);
    }
}

const updateUser = async (id, email, username) => {
    try {
        await dataUser.user.update(
            { email: email, username: username },
            {
                where: {
                    id: id,
                },
            },
        );
    } catch (error) {
        console.log(">>> Error getting: ", error);
    }
}

export {
    hashUserPassword,
    createNewUser,
    getListUser,
    deleteUser,
    getUser,
    updateUser,
}