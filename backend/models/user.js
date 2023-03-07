const db = require('../db') 

class User {
    static async createUser(params) {
        try {
            const response = await db.query(`
                INSERT INTO users (first_name, last_name)
                VALUES ($1, $2)
                RETURNING *`,
            [ params["first_name"], params["last_name"] ])

            return response.rows;
        } catch(e) {
            console.log(e)
        }
    }

    static async readUser() {

    }

    static async updateUser() {

    }

    static async deleteUser() {
        
    }
}

module.exports = User;