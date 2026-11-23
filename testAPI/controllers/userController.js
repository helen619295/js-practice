const axios = require('axios');
class userController {
    async login(userName, password) {
        return await axios.post('https://demoqa.com/Account/v1/login',
            {
                userName: userName,
                password: password
            });
    }
}

module.exports = new userController();