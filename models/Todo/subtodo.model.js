import mongoose from "mongoose";

const SubTodoSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: true
        },
        Completed: {
            type: Boolean,
            default: false
        },
        UserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const SubTodo = mongoose.model("SubTodo", SubTodoSchema);