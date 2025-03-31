export const createRecipe = async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const recipe = new Recipe(req.body);
    await recipe.save();
    console.log('Created Recipe:', recipe);  
    res.status(201).json(recipe); 
  } catch (error) {
    console.error("Error creating recipe:", error);
    res.status(400).json({ message: 'Error creating recipe', error });
  }
};
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    console.log('Fetched Recipes:', recipes);  
    res.status(200).json(recipes); 
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ message: 'Error fetching recipes', error });
  }
};
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate('chef');
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipe', error });
  }
};
export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting recipe', error });
  }
};
export const editRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Error editing recipe', error });
  }
};