import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    role: {
        type: Boolean,
        enum: ["employee", "recruiter"],
        required: true,
    },
    profile: {
        bio: {
        type: String,
        },
        skills: {
        type: [
            {
            type: String,
            },
        ],
        },
        experience: {
        type: String,
        },
        resume: {
        type: String,
        },
        resumeName: {
        type: String,
        },
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Company",
        },
        profilePic: {
            type: String,
            default: "",
        },
    },
}, {timestamps: true});

const User = mongoose.model("User", userSchema);
