const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createBrand = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    country: Joi.string(),
  })
}

const searchBrand = {
  query: Joi.object().keys({
    name: Joi.string().custom(objectId),
    country: Joi.string(),
  })
}

const getBrandByID = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  })
}

const updateBrandByID = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    country: Joi.string(),
  })
}

const deleteBrandByID = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  })
}


module.exports = {
  createBrand,
  searchBrand,
  getBrandByID,
  updateBrandByID,
  deleteBrandByID
}