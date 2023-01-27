export class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    getEmail() {
        return this.email
    }

    getPassword() {
        return this.password
    }

    equals(user) {
        return this.email == user.email && this.password == user.password
    }
}