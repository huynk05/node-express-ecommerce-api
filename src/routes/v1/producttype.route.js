const { ProductTypeController } = require("../../controllers");
const auth = require("../../middlewares/auth");

const express = require('express');
const validate = require("../../middlewares/validate");
const { ProductTypeValidation } = require("../../validations");

const router = express.Router();

router
  .route('/')
  .get(auth('manageUsers'), ProductTypeController.getTypes)
  .post(auth('manageUsers'), ProductTypeController.createType);

router
  .route('/:id')
  .delete(auth('manageUsers'), validate(ProductTypeValidation.deletProductType), ProductTypeController.deletProductTypeById)
  .patch(auth('manageUsers'), validate(ProductTypeValidation.updateProductType), ProductTypeController.updateProductTypeById)
module.exports = router;
  