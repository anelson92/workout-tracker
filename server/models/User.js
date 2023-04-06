// username, password, email, phone number (for reminder texts, maybe)
const { Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true, 
            unique: true,
            trim: true
        },
        email: {
            type: String, 
            required: true, 
            unique: true, 
            format: email 
        }
    }
)