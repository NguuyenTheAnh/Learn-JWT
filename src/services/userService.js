import bcrypt from 'bcryptjs';
import db from '../config/database.js'

var salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    var hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = async (email, password, username) => {
    try {
        let hashPassword = hashUserPassword(password);
        await db.query(
            `INSERT INTO users (email,password,username)
             VALUES ($1,$2,$3);`,
            [email, hashPassword, username]
        );

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
        await db.query(
            `DELETE FROM users
         WHERE id=$1`,
            [userId]
        )
    } catch (error) {
        console.log(">>> Error getting: ", error);
    }
}

const getUser = async (userId) => {
    try {
        const { rows } = await db.query(
            `SELECT *
         FROM users
         WHERE id=$1`,
            [userId]
        )
        return rows[0];
    } catch (error) {
        console.log(">>> Error getting: ", error);
    }
}

const updateUser = async (id, email, username) => {
    try {
        await db.query(
            `UPDATE users
             SET email=$1, username=$2
             WHERE id=$3`,
            [email, username, id]
        )
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