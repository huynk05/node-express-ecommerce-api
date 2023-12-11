const httpStatus = require("http-status");
const { brandService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const pick = require("../utils/pick");

const createBrand = catchAsync(async (req, res) => { 
    const brand = await brandService.createBrand(req.body)
    res.status(httpStatus.CREATED).send(brand);
});

const deleteBrand = catchAsync(async (req, res) => {
    const brand = await brandService.deletBrandById(req.params.id)
    res.status(httpStatus.NO_CONTENT).send();
})

const getBrands = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['name', 'country']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const brand = await brandService.getBrands(filter, options)
    res.status(200).send(brand)
})


module.exports ={
    createBrand,
    deleteBrand,
    getBrands
}