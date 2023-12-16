const Joi = require("joi");
const { UUID } = require("./custom.validation");

const createProductType = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    brandId: Joi.string().custom(UUID).required(),
    description: Joi.string(),
  })
}

const deletProductType = {
  params: Joi.object().keys({
    id: Joi.string().custom(UUID),
  })
}

const updateProductType = {
  params: Joi.object().keys({
    id: Joi.string().custom(UUID),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    brandId: Joi.string().custom(UUID),
    description: Joi.string(),
  })
}

module.exports = {
  createProductType,
  deletProductType,
  updateProductType
}