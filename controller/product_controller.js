const categoryModel = require("../model/category_model");
const productModel = require("../model/product_model");
const removeFile = require("../middleware/remove_file");
const { validationResult } = require("express-validator");

const productGetFormController = async (req, res) => {
  try {
    const error = req.flash("error");
    console.log(error);
    const category = await categoryModel.getCategory();
    res.render("product", { error: error, category: category });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const addProductController = async (req, res) => {
  try {
    const error = validationResult(req);

    if (req.isFileValid && error.isEmpty()) {
      const fileName = req.file.filename;
      const body = req.body;
      const data = await productModel.addProduct(body, fileName);
      if (data) {
        req.flash("success", "successfully added Product");
        return res.redirect("/admin/product/list");
      } else {
        removeFile(req.file.filename);
      }
    }
    const errorData = error.mapped();
    if (!req.isFileValid) {
      errorData["image"] = {
        msg: "please insert valid image jpeg, png, jpg",
      };
    }
    req.flash("error", errorData);
    res.redirect("/admin/product");

  } catch (error) {
    if (req.file) {
      removeFile(req.file.filename);
    }
    console.log(error);
  }
};





const getProductList = async (req, res) => {
  try {
    const data = await productModel.getProductModel();
    if(data){
      return res.render("product_list", {
        productList: data,
        message: req.flash(),
    })
    }
   
  } catch (error) {
    console.log(error);
  }
};

// delete functionss

const deleteproductController = async (req, res) => {
  try {
    const id = req.params.id;
    const productData = await productModel.getImageName(id);
    if (productData.length > 0) {
      await productModel.deleteProduct(id);
      removeFile(productData[0].image);
    }
    return res.redirect("/admin/product/list");
  } catch (error) {
    console.log(error);
  }
};

//getting update form

// const getProductById= async (req, res) => {
//   try {

//     let data;

//     const { id } = req.params;

//     data = await productModel.getProduct(id);
//     return res.render("product", { data: data[0] });
//   } catch (error) {
//     console.log(error);

//     return res.status(500).send("Internal Server Error");
//   }
// };

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const ProductData = await productModel.getProductById(id);
    const categoryData = await categoryModel.getCategory();
    return res.render("product", {
      data: ProductData[0],
      category: categoryData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};




const updateProductByIdController = async (req, res) => {
  try {
    const file = req.file;
    const id = req.params.id;

    if (file) {
      const imageName = req.file.filename;
      const oldData = await productModel.getImageName(id);
      const data = await productModel.updateProductByIdWithImage(
        req.body,
        id,
        imageName
      );

      if (data) {
        removeFile(oldData[0].image);
        return res.redirect("/admin/product/list");
      }
    } else {
      const data = await productModel.updateProductByIdWithoutImage(
        req.body,
        id
      );

      if (data) {
        return res.redirect("/admin/product/list");
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error.");
  }
};

module.exports = {
  productGetFormController,
  addProductController,
  getProductList,
  deleteproductController,
  getProductById,
  deleteproductController,
  updateProductByIdController,
};
