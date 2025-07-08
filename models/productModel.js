const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: String,
    brandName: String,
    category: String,
    productImage: [],
    description: String,
    price: Number,
    sellingPrice: Number,
    link: String,
    licenseIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'License' }],
    attributes: mongoose.Schema.Types.Mixed // <<--- Nuevo campo dinámico
}, {
    timestamps: true
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
