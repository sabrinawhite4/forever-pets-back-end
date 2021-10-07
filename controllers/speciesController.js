const { getSpecies, getAllSpecies, addSpecies, updateSpecies } = require('../database/speciesDb');

module.exports = {
    getSpecies: async (req, res) => {
        console.log('Get Species')
        console.log(req.params)
        const { name } = req.params;

        const species = await getSpecies(name);
        if (species) {
            res.status(200).json(species);
        } else {
            res.status(404).json({
                error: 'Species not found'
            });
        }
    
    },
    getAllSpecies: async (req, res) => {
        console.log('Get All Species')
        const species = await getAllSpecies();
        res.status(200).json(species);
    },
    addSpecies: async (req, res) => {
        console.log('Add Species')
        console.log(req.body)
        
        const species = await addSpecies(req.body);
        res.status(200).json(species);
    },
    updateSpecies: async (req, res) => {
        console.log('Update Species')
        console.log(req.body)
        const { id } = req.params;
        const species = await updateSpecies(id, req.body);
        res.status(200).json(species);
    }
}