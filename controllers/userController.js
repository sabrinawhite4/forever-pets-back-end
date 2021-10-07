const { getUser, getUsers, updateUser, deleteUser } = require("../database/userDb");

module.exports = {
    getUser: async (req, res) => {
        console.log('Getting User');
        console.log(req.params.username);
        const user = await getUser(req.params.username);
        if (user) {
            let userToReturn = user;
            userToReturn.passwordHash = undefined;
            res.json(userToReturn);
        } else {
            res.status(400).json({ error: "User not found" })
        }
    },
    getUsers: async (req, res) => {
        console.log('Getting Users');
        const users = await getUsers();
        res.json(users);
    },
    updateUser: async (req, res) => {
        console.log('Updating User');
        console.log(req.body);
        const user = await updateUser(req.params.id, req.body);
        res.json(user);
    },
    deleteUser: async (req, res) => {
        console.log('Deleting User');
        console.log(req.params.id);
        await deleteUser(req.params.id);
        res.status(200).send('User Deleted!');
    }
}
