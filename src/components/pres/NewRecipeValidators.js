const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.description) {
    errors.description = 'Required'
  }
  if (!values.subtitle) {
    errors.subtitle = 'Required'
  }
  if (!values.ingredients || !values.ingredients.length) {
    errors.instructions = { _error: 'At least one ingredient must be entered' }
  } else {
    const ingredientsArrayErrors = []
    values.ingredients.forEach((ingredient, ingredientIndex) => {
      const ingredientErrors = {}
      if (!ingredient || !ingredient.name) {
        ingredientErrors.name = 'Required'
        ingredientsArrayErrors[ingredientIndex] = ingredientErrors
      }
      if (!ingredient || !ingredient.amount) {
        ingredientErrors.lastName = 'Required'
        ingredientsArrayErrors[ingredientIndex] = ingredientErrors
      }
    })
    if (ingredientsArrayErrors.length) {
      errors.ingredients = ingredientsArrayErrors
    }
  }
  return errors
}

export default validate
