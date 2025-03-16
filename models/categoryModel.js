const mongoose = require('mongoose')

const catgorySchema = mongoose.Schema({
    categoryName: String
},{
    timestamps : true
})

const categoryModel =  mongoose.model("categoria",catgorySchema)

module.exports = categoryModel
