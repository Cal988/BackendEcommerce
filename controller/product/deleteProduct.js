const uploadProductPermission = require("../../helpers/permission");
const productModel = require("../../models/productModel");
const License = require("../../models/licenseModel");

async function deleteProductController(req, res) {
    try {
        const sessionUserId = req.userId;

        if (!uploadProductPermission(sessionUserId)) {
            throw new Error("Permission denied");
        }

        const { productId } = req.body;

        if (!productId) {
            throw new Error("Product ID is required");
        }


        // Luego eliminamos el producto
        const deletedProduct = await productModel.findByIdAndDelete(productId);

        if (!deletedProduct) {
            throw new Error("Product not found");
        }

        res.status(200).json({
            message: "Product deleted successfully",
            error: false,
            success: true,
            data: deletedProduct
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = deleteProductController;