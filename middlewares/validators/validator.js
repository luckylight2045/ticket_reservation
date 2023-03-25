const { validationResult } = require("express-validator")

function checkError(req, res, next) {
  const validationErr = validationResult(req)
  if (validationErr.errors.length > 0) {
    return res.status(400).json({
      error: true,
      message: validationErr,
    })
  }
  next()
}

module.exports = checkError
