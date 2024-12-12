import bcrypt from 'bcryptjs';
import db from '../config/database.js'

var salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    var hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = (email, password, username) => {
    try {
        let hashPassword = hashUserPassword(password);
        db.query(
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

export {
    hashUserPassword,
    createNewUser,
    getListUser,
}