const { Brand } = require("../models")
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const createBrand = async (brandBody) => {
    const {name, country} = brandBody
    if (await Brand.isBrandTaken(name, country)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Brand with this name and country already taken');
    }
    return await Brand.create(brandBody)
}

const getBrands = async (filter, options) => {
    return await Brand.paginate(filter, options)
}

const getBrand = async (brandId) => {
    return await Brand.findById(brandId)
}

const deletBrandById = async (brandId) => {
    const brand = await getBrand(brandId)
    if (!brand) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Brand not found');
    }
    return await brand.deleteOne()
}


module.exports = {
    createBrand,
    getBrands,
    deletBrandById
}