const { brandController } = require("../../controllers");
const auth = require("../../middlewares/auth");
const validate = require('../../middlewares/validate');

const express = require('express');
const { brandValidation } = require("../../validations");

const router = express.Router();

router
  .route('/')
  .get(auth('manageUsers'), validate(brandValidation.getBrands), brandController.getBrands)
  .post(auth('manageUsers'),validate(brandValidation.createBrand), brandController.createBrand);

router
  .route('/:id')
  .delete(auth('manageUsers'), validate(), brandController.deleteBrand)

module.exports = router;
