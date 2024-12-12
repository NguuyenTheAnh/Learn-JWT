import { createNewUser, getListUser } from '../services/userService.js'

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

    createNewUser(email, password, username);
    res.send("Create user");
}

export { handleHelloWorld, handleCreateUser, handleUserPage };