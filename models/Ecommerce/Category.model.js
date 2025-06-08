import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true
    },
    description: {
        type: String,
        required: false,
        maxlength: 200,
        trim: true
    },
    imageUrl: {
        type: String,
        required: false,
        trim: true
    }
}, { timestamps: true });

export const Category = mongoose.model("Category", CategorySchema);