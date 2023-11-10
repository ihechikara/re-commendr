const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function(email, password) {
    // validation
    if (!email || !password) {
        throw Error("Please ensure all input fields are filled")
    }

    if (!validator.isEmail(email)) {
        throw Error("Not a valid email")
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Password is not strong enough")
    }

    const userExists = await this.findOne({ email })

    if (userExists) {
        throw Error("Email already exists")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user
}

module.exports = mongoose.model("user", userSchema)