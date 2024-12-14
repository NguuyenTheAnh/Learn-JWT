import { createNewUser, deleteUser, getListUser, getUser, updateUser } from '../services/userService.js'

const handleHelloWorld = (req, res) => {
    res.render('home.ejs');
}
const handleUserPage = async (req, res) => {
    const listUsers = await getListUser();
    res.render('user.ejs', { listUsers });
}
const handleCreateUser = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    await createNewUser(email, password, username);
    res.redirect('/user');
}

const handleDeleteUser = async (req, res) => {
    let userId = req.params.userId;
    await deleteUser(userId);
    res.redirect('/user');
}

const handleGetUpdateUser = async (req, res) => {
    let userId = req.params.userId;
    let userData = await getUser(userId);
    res.render('user-update.ejs', { userData });
}

const handleUpdateUser = async (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let username = req.body.username;
    await updateUser(id, email, username);
    res.redirect('/user');
}

export {
    handleHelloWorld,
    handleCreateUser,
    handleUserPage,
    handleDeleteUser,
    handleGetUpdateUser,
    handleUpdateUser,
};