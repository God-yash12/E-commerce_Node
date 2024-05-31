const connection = require("../connection/dbconnection");
const { param } = require("../routes");

function getCategory(){
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM category', (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
}

function addCategory(data){
    const {category_name} = data;
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO category(category_name) VALUES (?)", [category_name], (error, elements)=>{
            if(error){
                return reject(error)
            }
            return resolve(elements)
        });
    });
}




function updateCategoryByIdModel(params, body){
    const {id} = params;
    const { category_name } = body;
    return new Promise((resolve, reject) => {
        connection.query("UPDATE category SET category_name = ? WHERE id = ?", [category_name, id], (error, elements)=>{
            if(error){
                return reject(error)
            }
            return resolve(elements)
        })
    })
}


const deleteCategoryModel = (categoryId)=>{
    try {
        const sql = 'DELETE FROM category WHERE id = ?';
        connection.query(sql, [categoryId]);
    } catch (error) {
        throw error;
    }
}




module.exports = {
    getCategory,
    addCategory,
    // updateCategory.
    // getCategoryById,
    updateCategoryByIdModel,
    deleteCategoryModel

}