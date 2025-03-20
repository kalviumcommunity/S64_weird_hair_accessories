const express = require('express');
const router = express.Router();
const Accessory = require('./models/Accessory'); // Assuming you have an Accessory model


router.post('/accessories', async (req, res) => {
    try {
        const newAccessory = new Accessory(req.body);
        await newAccessory.save();
        res.status(201).json(newAccessory);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add accessory' });
    }
});


router.get('/accessories', async (req, res) => {
    try {
        const accessories = await Accessory.find();
        res.status(200).json(accessories);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch accessories' });
    }
});


router.get('/accessories/:id', async (req, res) => {
    try {
        const accessory = await Accessory.findById(req.params.id);
        if (!accessory) return res.status(404).json({ error: 'Accessory not found' });
        res.status(200).json(accessory);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch accessory' });
    }
});


router.put('/accessories/:id', async (req, res) => {
    try {
        const updatedAccessory = await Accessory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAccessory) return res.status(404).json({ error: 'Accessory not found' });
        res.status(200).json(updatedAccessory);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update accessory' });
    }
});


router.delete('/accessories/:id', async (req, res) => {
    try {
        const deletedAccessory = await Accessory.findByIdAndDelete(req.params.id);
        if (!deletedAccessory) return res.status(404).json({ error: 'Accessory not found' });
        res.status(200).json({ message: 'Accessory deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete accessory' });
    }
});

module.exports = router;
