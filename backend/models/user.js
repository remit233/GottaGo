const db = require('../db')

class User {
    static async createUser(params) {
        try{
            const result = await db.query(`
                INSERT INTO users (first_name, last_name, password, email)
                VALUES ($1, $2, $3, $4)
                RETURNING *`,
                [ params["first_name"], params["last_name"], params["password"], params["email"]]
            )

            return result.rows;
        } catch(e) {
            console.log(e)
        }
    }

    static async readUser(params) {
        try{
            const result = await db.query(`
                SELECT * FROM users 
                WHERE id=$1`,
                [params["id"]]
            )

            return result.rows
        } catch(e) {
            console.log(e)
        }
    }

    static async updateUser(params) {
        try{
            const result = await db.query(`
                UPDATE users
                SET email=$2 
                WHERE id=$1 
                RETURNING *`,
                [params["id"], params["email"]]
            )

            return result.rows
        } catch(e) {
            console.log(e)
        }
    }

    static async deleteUser(params) {
        try{
            const result = await db.query(`
                DELETE FROM users
                WHERE id=$1`,
                [params["id"]]
            )
        } catch(e) {
            console.log(e)
        }
    }
}

module.exports = User;