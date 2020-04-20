class UserService {
    _registeredUsers = [
        {
          username: 'admin',
          password: '12345'
        }
    ];

    login({username, password}){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const userData = this._registeredUsers.find(user => user.username.toLowerCase() === username);
                if (userData && userData.password === password) {
                    localStorage.setItem('user', JSON.stringify(userData));
                    resolve(userData);
                } else {
                    reject(new Error('Username or Password are incorrect'))
                }
            }, 700);
        });   
    }

    logout() {
        localStorage.removeItem('user');
    }
    
}

export default UserService;