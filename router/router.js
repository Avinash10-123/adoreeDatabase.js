import express from 'express'

import {signUp , login} from '../controllers/usercontroller.js';
import {postProduct, getProducts,gettingIDwise,gettingQuerywise } from '../controllers/productController.js';
import addToCart from '../controllers/cartcontroller.js';
import addTowishlist from '../controllers/wishlistcontroller.js';
import postToPurchase from '../controllers/purchasecontroller.js';
const router = express.Router();
router.post("/register",signUp)
router.post("/login",login)
router.post("/products",postProduct)
router.get("/query",gettingQuerywise)
router.get("/:id",gettingIDwise)
router.get("/get",getProducts)
router.post("/addcart/:userId",addToCart)
router.post("/addwishlist/:userId",addTowishlist)
router.post("/:id/purchase",postToPurchase)
export default router
