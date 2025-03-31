import express from 'express';
import Chef from '../models/Chef.js';
const router = express.Router();
router.post('/', async (req, res) => {
  try {
    const newChef = new Chef(req.body);
    await newChef.save();
    res.status(201).json(newChef);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get('/', async (req, res) => {
  try {
    const chefs = await Chef.find();
    res.status(200).json(chefs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const chef = await Chef.findById(req.params.id);
    if (!chef) {
      return res.status(404).json({ error: 'Chef not found' });
    }
    res.status(200).json(chef);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default router;