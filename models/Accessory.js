const mongoose = require('mongoose');

const AccessorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    material: { type: String },
    color: { type: String },
    size: { type: String },
    origin: { type: String },
    price: { type: Number, required: true },
    availability: { type: String, enum: ["In Stock", "Out of Stock", "Limited Edition"], default: "In Stock" },
    tags: { type: [String] },
    description: { type: String }
}, { timestamps: true });

const Accessory = mongoose.model('Accessory', AccessorySchema);
module.exports = Accessory;
