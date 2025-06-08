import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
    {
        Username: {
            type: String,
            required: true,
            unique: true,
            minlength: 3,
            maxlength: 20,
            trim: true,
            match: /^[a-zA-Z0-9_]+$/,
            validate: {
                validator: function (v) {
                    return /^[a-zA-Z0-9_]+$/.test(v);
                },
                message: props => `${props.value} is not a valid username! Only alphanumeric characters and underscores are allowed.`
            }
        },
        Password: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 128,
            select: false, // Exclude password from queries by default
            validate: {
                validator: function (v) {
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(v);
                },
                message: props => `Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number.`
            }
        },
        Email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (v) {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
                },
                message: props => `${props.value} is not a valid email address!`
            },
            trim: true,
            lowercase: true,
            default: '',
            set: function (v) {
                return v ? v.trim().toLowerCase() : '';

            },

        }
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model('User', UserSchema);