import Chef from '../models/chef.js';
export const createChef = async (req, res) => {
  try {
    const chef = new Chef(req.body);
    await chef.save();
    res.status(201).json(chef);
  } catch (error) {
    res.status(400).json({ message: 'Error creating chef', error });
  }
};
export const getAllChefs = async (req, res) => {
  try {
    const chefs = await Chef.find();
    res.status(200).json(chefs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chefs', error });
  }
};