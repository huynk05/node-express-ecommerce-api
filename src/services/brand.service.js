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

const getBrandById = async (brandId) => {
    return await Brand.findById(brandId)
}

const deletBrandById = async (brandId) => {
    const brand = await getBrandById(brandId)
    if (!brand) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Brand not found');
    }
    return await brand.deleteOne()
}

const updateBrandById = async (bodyBrand, brandId) => {
    const brand = await getBrandById(brandId)
    if (!brand) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Brand not found');
    }
    return await Brand.save(bodyBrand)
}

module.exports = {
    createBrand,
    getBrands,
    deletBrandById,
    updateBrandById
}