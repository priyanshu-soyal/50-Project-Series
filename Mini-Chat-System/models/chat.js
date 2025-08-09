//idea: step 1 - firstly we create a schema & Chat model or export Chat.

const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: [true, "Sender name is required"],
        trim: true,
        minlength: [2, "Sender name must be at least 2 characters"],
        maxlength: [50, "Sender name cannot exceed 50 characters"]
    },
    to: {
        type: String,
        required: [true, "Receiver name is required"],
        trim: true,
        minlength: [2, "Receiver name must be at least 2 characters"],
        maxlength: [50, "Receiver name cannot exceed 50 characters"]
    },
    msg: {
        type: String,
        required: [true, "Message is required"],
        trim: true,
        minlength: [1, "Message cannot be empty"],
        maxlength: [500, "Message cannot exceed 500 characters"]
    },
    created_At: {
        type: Date,
        required: true,
        default: Date.now
    }
}, {
    timestamps: true
});

// Add index for better query performance
chatSchema.index({ created_At: -1 });

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;