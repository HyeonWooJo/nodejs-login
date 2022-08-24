"use strict"

const UserStorage = require("./UserStorage"); 

class User{
    constructor(body){
        this.body = body;
    }

    async login() {
        const client = this.body;
        const {id, psword} = await UserStorage.getUserInfo(client.id);
        // await: Promise를 반환할 때만 사용가능하다. 이는 await 오른쪽에
        // 작성된 로직이 모두 실행되기까지 기다린 후에 왼쪽의 로직이 실행되도록 하는 것이다.
        // await는 async 안에서만 사용할 수 있다.

        if (id) {
            if (id === client.id && psword ==client.psword){
                return { success: true};
            }
            return { success: false, msg: '비밀번호가 틀렸습니다.'};
        }
        return { success: false, msg: '존재하지 않는 아이디입니다.'};
    }

    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;