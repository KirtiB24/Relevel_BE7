
const {createUser,getAllUsers,getUserById} = require("../controllers/userController") ;

module.exports = function(app){
    app.post("/crm/api/v1/users",createUser);
    app.get("/crm/api/v1/users",getAllUsers);
    app.get("/crm/api/v1/users",getUserById);
}
//roures calles controllers 
//step 6 --create to get all users