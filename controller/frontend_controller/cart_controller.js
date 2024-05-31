
const productModel = require("../../model/product_model");
const { search } = require("../../routes");
const removeFile = require("../../middleware/remove_file")
const TotalPriceCart = require("../../helper/countCartPrice")


const getCart = (req, res)=>{
    const cart = req.session.cart || [];

    return res.render("frontend_views/cart", {layout: "frontend", cart: cart })
}


const addNewItem = async (req, res)=>{
    const id = req.params.id;

    if(!req.session.cart){
        req.session.cart = []
    }

    let count = 0;
    for(let i = 0; i<req.session.cart.length; i++){
        if(req.session.cart[i].id === id){
            req.session.cart[i].qty += 1;
            count++;
        }
    }

    if(count === 0){
        const data = await productModel.getProductById(id);
        const cart_data = {
            id: id,
            productName: data[0].product_name,
            price: data[0].price,
           
            image: data[0].image,
            qty: 1
        }
   
        req.session.cart.push(cart_data);
    }
    return res.redirect("/cart")

};

const IncreamentItem = async (req, res)=>{
    const id = req.params.id;
    

    if(!req.session.cart){
        req.session.cart = []
    }

    let count = 0;
    for(let i = 0; i<req.session.cart.length; i++){
        if(req.session.cart[i].id === id){
            req.session.cart[i].qty += 1;
            
            count++;
        }
    }


    if(count === 0){
        const data = await productModel.getProductById(id);
        console.log(data)
        const cart_data = {
            id: id,
            productName: data[0].product_name,
            price: data[0].price,
            image: data[0].image,
            qty: 1
        }
   
        req.session.cart.push(cart_data);
    }
    const totalPriceCart =  TotalPriceCart.calculateTotalPrice(req.session.cart)
    return res.redirect("/cart")

};


const decreamentItem = async (req, res)=>{
    const id = req.params.id;

    if(!req.session.cart){
        req.session.cart = []
    }

    let count = 0;
    for(let i = 0; i<req.session.cart.length; i++){
        if(req.session.cart[i].id === id){
            if (req.session.cart[i].qty > 0) { 
                req.session.cart[i].qty -= 1;
            
            } 
            count++;
        }
    }
   
   
    if(count === 0){
        const data = await productModel.getProductById(id)
        const cart_data = {
            id: id,
            productName: data[0].product_name,
            price: data[0].price,
            image: data[0].image,
            qty: 1
        }
   
        req.session.cart.push(cart_data);
    }
    return res.redirect("/cart")

};


// const deleteCartItem = async (req, res) => {
//     try {
//       const id = req.params.id;
//       const productData = await productModel.getImageName(id);
//       if (productData.length > 0) {
//         await productModel.deleteProduct(id);
//         removeFile(productData[0].image);
//       }
//       if(req.session.cart){
//         delete req.session.cart[id]

//         if(Object.keys(req.sessios.cart).length === 0){
//             delete req.session.cart;
//         }
//       }
//       return res.redirect("/cart");
//     } catch (error) {
//       console.log(error);
//     }
//   };





// function addItem(id, cart){
//     searchItem(id)
//     for(let i = 0; i<=cart.length; i++){
//         if(cart[i].id == id){
//             cart[i].qty = cart[i].qty + 1
//         }
//     }
// }

module.exports = {
    getCart,
    // addItem,
    addNewItem,
    IncreamentItem,
    decreamentItem,
    // deleteCartItem,

}