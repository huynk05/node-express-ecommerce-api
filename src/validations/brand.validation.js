const Joi = require("joi");
const { UUID } = require("./custom.validation");

const createBrand = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    country: Joi.string(),
  })
}

const searchBrand = {
  query: Joi.object().keys({
    name: Joi.string().custom(UUID),
    country: Joi.string(),
  })
}

const getBrandByID = {
  params: Joi.object().keys({
    id: Joi.string().custom(UUID),
  })
}

const updateBrandByID = {
  params: Joi.object().keys({
    id: Joi.string().custom(UUID),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    country: Joi.string(),
  })
}

const deleteBrandByID = {
  params: Joi.object().keys({
    id: Joi.string().custom(UUID),
  })
}


module.exports = {
  createBrand,
  searchBrand,
  getBrandByID,
  updateBrandByID,
  deleteBrandByID
}