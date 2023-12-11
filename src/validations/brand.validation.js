const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createBrand = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    country: Joi.string(),
  })
}

// const getBrand = {
//   params: Joi.object().keys({
//     id: Joi.string().custom(objectId),
//   })
// }

const getBrands = {
  params: Joi.object().keys({
    name: Joi.string().custom(objectId),
    country: Joi.string(),
  })
}

module.exports = {
  createBrand,
  // getBrand,
  getBrands
}