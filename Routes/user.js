import express from "express";
import User from "../models/user.js";

const router = express.Router();

router.get("/dashboard/:username",async(req,res)=>{
    let username = req.params.username;
    let user = await User.findOne({username:username}).populate("products"); 
    let products = user.products;
        if (!user) {
            return res.status(404).send("User not found");
        }
    res.render('./users/dashboard.ejs',{user,products});
});

export default router;