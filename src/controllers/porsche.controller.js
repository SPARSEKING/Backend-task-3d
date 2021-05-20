const PositionService = require('../services/porsche.service');

class PositionController {
    
    service = PositionService;

    addPosition = async(req, res) => {
        try {
            res
            .status(200)
            .send(await this.service.addPosition(req.body))
        } catch(error) {
            res.status(400).send({ error: error.message });
        }  
    }

    getPosition = async(req, res) => {
        try {
            res
            .status(200)
            .send(await this.service.getPosition())
        } catch(error) {
            res.status(400).send({ error: error.message });
        }  
    }

    updatePosition = async(req, res) => {
        try {
            res
            .status(201)
            .send(await this.service.updatePosition(req.body));
        } catch(error) {
            res.status(400).send({error: error.message});
        }  
    }
}

module.exports = new PositionController();