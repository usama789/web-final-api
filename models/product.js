var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var productSchema = mongoose.Schema({
    Name:String,
    ProductCode:String,
    Price:Number,
    Size:String,
    Availability:String,
    Quantity:Number,
    imageUrl:String
});
var Product = mongoose.model("Product", productSchema);

function validateProduct(data) {
  const schema = Joi.object({
      Name:Joi.string().min(3).max(15).required(),
      ProductCode:Joi.string().max(5).required(),
      Price:Joi.number().min(0).required(),
      Size:Joi.string().max(2).required(),
      Availability:Joi.string().max(20).required(),
      Quantity:Joi.number().max(50).required(),
      imageUrl:Joi.string().required()  
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Product = Product;
module.exports.validate = validateProduct;
