import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 100,
            trim: true
        },
        description: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 500,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        stockQuantity: {
            type: Number,
            required: true,
            min: 0
        },
        imageUrl: [{
            type: String,
            trim: true
        }]
    }, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);
