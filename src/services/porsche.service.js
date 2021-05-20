const Position = require('../models/Position');

class PositionService {

    addPosition = async(body) => {
        return await Position.create({ 
            name: body.name,
            X: body.x,
            Y: body.y,
            Z: body.z,
         });
    }

    getPosition = async() => {
        return await Position.findOne({ name: 'Position' });
    }

    updatePosition = async(body) => {
        console.log(body);
        return await Position.findOneAndUpdate({ name: 'Position' },
            { 
                X: body.position.x,
                Y: body.position.y,
                Z: body.position.z
            }
        );
    }
}

module.exports = new PositionService();