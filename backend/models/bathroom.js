const db = require('../db')

class Bathroom {
    static async createBathroom(params) {
        try{
            const result = await db.query(`
            INSERT INTO bathrooms (name, address)
            VALUES ($1, $2) 
            RETURNING *`,
            [params["name"], params["address"]])

            return result.rows
        } catch(e) {
            console.log(e)
        }
    }
    static async readBathroom(params) {
        try{
            const result = await db.query(`
            SELECT * FROM bathrooms
            WHERE id=$1`,
            [params["id"]])

            return result.rows
        } catch(e) {
            console.log(e)
        }
    }
    static async updateBathroom(params) {
        try{
            const result = await db.query(`
            UPDATE bathrooms 
            SET address=$2 
            WHERE id=$1 
            RETURNING *`,
            [params["id"], params["address"]])

            return result.rows
        } catch(e) {
            console.log(e)
        }
    }
    static async deleteBathroom(params) {
        try{
            const result = await db.query(`
            DELETE FROM bathrooms 
            WHERE id=$1`,
            [params["id"]])
        } catch(e) {
            console.log(e)
        }
    }
}

module.exports = Bathroom;