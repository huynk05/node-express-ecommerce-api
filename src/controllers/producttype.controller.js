const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { ProductTypeService } = require("../services");
const pick = require("../utils/pick");

const createType = catchAsync(async (req, res) => { 
    const type = await ProductTypeService.createProductType(req.body)
    res.status(httpStatus.CREATED).send(type);
});

const getTypes = catchAsync(async (req, res) => {
  // const filter = {
  //   name: req.query.name
  // }
  // const options = pick(req.query, ['sortBy', '5', 'page','brandId']);
  // const filter = {
  //   name: req.query.name,
  //   brandId: req.query.brand
  // }
  const filter = pick(req.query, ['name']);
  const options = {
    sortBy: 'name:desc', // sort order
    limit: 5, // maximum results per page
    page: req.query.page, // page number
    populate: 'brandId',
  };
  const result = await ProductTypeService.getProductTypes(filter, options);
  res.send(result);
});

const deletProductTypeById = catchAsync(async (req, res) => {
  const type = await ProductTypeService.deletProductTypeById(req.params.id)
  res.status(httpStatus.CREATED).send(type);
})

const updateProductTypeById = catchAsync(async (req, res) => {
  const type = await ProductTypeService.updateProductTypeById(req.bod, req.params.id)
  res.status(httpStatus.CREATED).send(type);
})

module.exports ={
  createType,
  getTypes,
  deletProductTypeById,
  updateProductTypeById
}