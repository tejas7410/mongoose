import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
    {
        Username: {
            type: String,
            required: true,
            unique: true
        },
        Password: {
            type: String,
            required: true
        },
        Email: {
            type: String,
            required: true,
            unique: true
        },

    },
    {
        timestamps: true
    }
);

export const User = mongoose.model('User', UserSchema); 