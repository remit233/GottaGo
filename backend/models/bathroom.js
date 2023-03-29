const db = require('../db')
const axios = require('axios');

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
            //fix later
            const result = await db.query(`
            SELECT * FROM bathrooms
            WHERE id=$1`,
            [params["id"]]
            );
             
            if(result.rows.length>0){
                //if bathroom is found in db return it
                return result.rows
             }
             else{
                //if bathroom is not found search for it in RR db
                const refugeResult= await Bathroom.checkRefugeRestrooms(params);
                if(refugeResult){
                    //if bathroom is found in RR db add it to our db
                    await Bathroom.createBathroom(refugeResult);
                    return [refugeResult];
                }
                else{
                    //if bathroom is not found return null
                    return null;
                }
             }
            
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
   
    //this helper function checks Refuge Restrooms db for bathroom
    static async checkRefugeRestrooms(params){
        const url = `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=1&lat=${params.lat}&lng=${params.lng}`;
        const response = await axios.get(url);

        if (response.status === 200 && response.data.length > 0) {
            // if a bathroom is found, return an object with the name and address
            return { name: response.data[0].name, address: response.data[0].street };
        } else 
            {
            // if a bathroom is not found, return null
            return null;
        }
    }
    
}

module.exports = Bathroom;