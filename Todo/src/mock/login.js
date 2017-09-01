const userMap = {
  admin: {
    token: 'admin',
    name: 'Super Admin'
  }
}

export default {
  loginByUsername: config => {
    const {username} = JSON.parse(config.body);
    return userMap[username];
  }
}
