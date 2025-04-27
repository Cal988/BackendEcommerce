const uploadProductPermission = require("../../helpers/permission");
const productModel = require("../../models/productModel");
const License = require("../../models/licenseModel");

async function deleteProductController(req, res) {
    try {
        // Elimina cualquier verificación de permisos o userId
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({ error: "Product ID is required" });
        }

       

        // Elimina el producto
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
}

module.exports = deleteProductController;