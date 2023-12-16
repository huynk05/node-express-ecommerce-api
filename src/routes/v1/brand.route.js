      const { BrandController } = require("../../controllers");
const auth = require("../../middlewares/auth");
const validate = require('../../middlewares/validate');

const express = require('express');
const { brandValidation } = require("../../validations");

const router = express.Router();

router
  .route('/')
  .get(auth('manageUsers'), BrandController.getBrands)
  .post(auth('manageUsers'),validate(brandValidation.createBrand), BrandController.createBrand);

router
  .route('/:id')
  .delete(auth('manageUsers'), validate(brandValidation.deleteBrandByID), BrandController.deleteBrand)
  .patch(auth('manageUsers'), validate(brandValidation.updateBrandByID), BrandController.updateBrandById)

module.exports = router;
