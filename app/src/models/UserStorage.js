"use strict"

class UserStorage{
    static #users = {
        id: ["jhw", 'cdr', 'aaa'],
        psword: ['1234', '1234', '123456'],
        name: ['자자자', '차차차', '아아아']
    };

    static getUsers(...fields) {
        const users =  this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;