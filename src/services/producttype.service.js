const httpStatus = require("http-status");
const { ProductType } = require("../models");
const ApiError = require("../utils/ApiError");

const createProductType = async (ProductTypeBody) => {
  const {name, brandId} = ProductTypeBody;
  if (await ProductType.isProductTypeTaken(name, brandId)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'ProductType already taken');
  }
  return ProductType.create(ProductTypeBody)
}

const getProductTypes = async (filter, options) => {
  return await ProductType.paginate(filter, options)
}

const FindProductTypeById = async (ProductTypeId) => {
  return ProductType.findById(ProductTypeId)
}

const deletProductTypeById = async (ProductTypeId) => {
  const producttype = await FindProductTypeById(ProductTypeId)
  if (!producttype) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'ProductType not found');
  }
  return await producttype.deleteOne()
}

const updateProductTypeById = async (bodyProductType, ProductTypeId) => {
  const producttype = await FindProductTypeById(ProductTypeId)
  if (!producttype) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'ProductType not found');
  }
  return await ProductType.save(bodyProductType)
}

module.exports = {
  createProductType,
  getProductTypes,
  deletProductTypeById,
  updateProductTypeById
}