import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: true
        },
        UserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        SubTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            }
        ]
    },
    {
        timestamps: true
    }
);
export const Todo = mongoose.model("Todo", TodoSchema);
