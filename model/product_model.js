
const connection = require("../connection/dbconnection");
const fs = require("fs");
const path = require("path");

function getProduct() {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM product_table", (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
}

function addProduct(data, filename) {
  const { productName, price, description, category_id } = data;
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO product_table(product_name, price, description, image, category_id) VALUES (?, ?, ?, ?, ?)",
      [productName, price, description, filename, category_id],
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
}

// delete functionality for product

// function deleteProduct(productId) {
//     return new Promise((resolve, reject) => {
//         connection.query("DELETE FROM product_table WHERE id = ?", [productId], (error, result) => {
//             if (error) {
//                 return reject(error);
//             }
//             if (result.length === 0) {
//                 return reject(new Error("Product Not Found"));
//             }

//             const imageFilename = result[0].image;
//             const imagePath = path.join(__dirname, 'public', 'images', imageFilename);

//             fs.unlink(imagePath, (error) => {
//                 if (error && error.code !== "ENOENT") {
//                     return reject(error);
//                 }

//                 connection.query("DELETE FROM product_table WHERE id = ?", [productId], (error, result) => {
//                     if (error) {
//                         return reject(error);
//                     }
//                     return resolve(result);
//                 });
//             });
//         });
//     });
// }

function deleteProduct(id) {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM product_table WHERE id = ?";
    connection.query(sql, [id], (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
}

// joining 2 table category and product to retrieve category name on product list

function getProductModel() {
  return new Promise((resolve, reject) => {
    const sql =
      "SELECT product_table.id, product_table.product_name, product_table.price, product_table.description, product_table.image, category.category_name FROM product_table  INNER JOIN category ON product_table.category_id = category.id";
    connection.query(sql, (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
}


// to manupulate image
function getImageName(id) {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT image FROM product_table WHERE id = ?",
      [id],
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
}

//updating data

function getProductById(id) {
  return new Promise((resolve, reject) => {
    const sql =
      "SELECT product_table.id, product_table.product_name, product_table.category_id, product_table.price, product_table.description, product_table.image, category.category_name FROM product_table  INNER JOIN category ON product_table.category_id = category.id WHERE product_table.id = ?";
    connection.query(sql, [id], (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
}

function updateProductByIdWithoutImage(data, product_id) {
  const { productName, price, description, category_id } = data;
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE product_table SET product_name = ?, price = ?, description = ?, category_id = ? WHERE id = ?",
      [productName, price, description, category_id, product_id],
      (error, elements) => {
        console.log(data);
        if (error) {
          return reject(error);
        }
        resolve(elements);
      }
    );
  });
}


function updateProductByIdWithImage(data, product_id, image_name) {
  const { productName, price, description, category_id } = data;
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE product_table SET product_name = ?, price = ?, description = ?, image = ?, category_id = ? WHERE id = ?", [ productName, price, description, image_name, category_id, product_id],
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        resolve(elements);
      }
    );
  });
}

module.exports = {
  getProduct,
  addProduct,
  getProductModel,
  deleteProduct,
  getImageName,
  getProductById,
  updateProductByIdWithoutImage,
  updateProductByIdWithImage,
};
