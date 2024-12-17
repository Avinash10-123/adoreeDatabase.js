import mongoose from "mongoose";
import User from "../models/userScheme.js";
import Product from "../models/productSchema.js";

const postToPurchase = async (req, res) => {
  try {
    const userId = req.params.id;
 
    const user = await User.findById(userId);

    const cart = user.cart
    console.log(cart)

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    let purchase = user.purchase || [];

    if (!cart) {
        return res.status(404).json({ message: "cart Already empty" });
      }
      
    purchase.push(...cart)
    cart.splice(0,cart.length)
    user.purchase = purchase;
    
    await user.save();

    res.status(201).json({
      message: "Product moved to purchase list and removed from cart",
      purchase,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

export default postToPurchase;