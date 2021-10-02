// Libraries 
const fs = require('fs');
const array = require( '@stdlib/ndarray/array' );

// World class describes a world individuals will live inside of.
module.exports = class World {
    
    constructor(configuration) {
        // Create the world data 4D array. The last two elements are [blocktype, properties].
        this.world_data = array({ 'dtype': 'uint8', 'shape': [configuration.dimensions[0], configuration.dimensions[1], configuration.dimensions[2], 2] });
        
        // This world also contains items.  
        this.items = [];

        // Current time step, starts at zero.
        this.step = 0;
    }

}