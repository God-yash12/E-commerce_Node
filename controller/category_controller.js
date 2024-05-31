const categoryModel = require("../model/category_model");
const { validationResult } = require("express-validator");

const categoryGetFormController = (req, res) => {
  const error = req.flash("error");
  console.log(error)
  res.render("category", { error: error });
};

//insert and redirect
const addCategoryController = async (req, res) => {
  try {
    const error = validationResult(req);

    if (error.isEmpty()) {
      const data = await categoryModel.addCategory(req.body);
      if (data) {
        req.flash("success", "successfully added category");
        return res.redirect("/admin/category/list");
      }
      return;
    }
    const errorData = error.mapped();
    req.flash("error", errorData);
    return res.redirect("/admin/category/");
  } catch (error) {
    if (error.code) {
      req.flash  
        ("error",
        {
          category_name: {
            msg: error.code,
          },
        });
      return res.redirect('/admin/category')
    }
    console.log(error);
  }
};

//get data into table
const getCategoryList = async (req, res) => {
  try {
    const data = await categoryModel.getCategory();

    return res.render("category_list", { categoryList: data });
  } catch (error) {
    console.log(error);
  }
};

// update category

const getByIdCategory = async (req, res) => {
  try {
    let data;

    const { id } = req.params;

    data = await categoryModel.getCategory(id);
    return res.render("category", { data: data[0] });
  } catch (error) {
    console.log(error);

    return res.status(500).send("Internal Server Error");
  }
};

// const updateCategoryById = async (req, res) => {
//   try {
//     const params = req.params;
//     const data = await categoryModel.updateCategoryByIdModel(params, req.body);
//     if (data) {
//       return res.render('category/list', { category: data });
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send("Internal Server Error update");
//   }
// };

// const updateCategoryById = async (req, res) => {
//   try {
//     const params = req.params;
//     const data = await categoryModel.updateCategoryByIdModel(params, req.body);
//     if (data) {
//       // Assuming you want to pass data via query parameters
//       return res.redirect(302, '/category/list?category=' + JSON.stringify(data));
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send("Internal Server Error update");
//   }
// };

const updateCategoryById = async (req, res) => {
  try {
    const params = req.params;
    const data = await categoryModel.updateCategoryByIdModel(params, req.body);
    if (data) {
      console.log("Data retrieved successfully:", data);
      return res.redirect("/admin/category/list", { category: data });
    } else {
      console.log("No data returned from updateCategoryByIdModel");
      // Handle case where no data is returned
      return res.status(404).send("No data found");
    }
  } catch (error) {
    console.error("Error in updateCategoryById:", error);
    return res.status(500).send("Internal Server Error update");
  }
};

const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;
  try {
    categoryModel.deleteCategoryModel(categoryId);
    res.redirect("/admin/category/list");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  categoryGetFormController,
  addCategoryController,
  getCategoryList,
  getByIdCategory,
  updateCategoryById,
  deleteCategory,
  // updateCategoryController
};
