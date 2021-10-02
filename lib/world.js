// Libraries 
const fs = require('fs');
const array = require( '@stdlib/ndarray/array' );

// World class describes a world individuals will live inside of.
module.exports = class World {
    
    constructor(configuration) {
        // Create the world data 4D array. The last two elements are [blocktype, properties(such as orientation, colors, in packed bit format)].
        this.world_data = array({ 'dtype': 'uint8', 'shape': [configuration.dimensions[0], configuration.dimensions[1], configuration.dimensions[2], 2] });
        
        // This world also contains items.  
        this.items = [];

        // Current time step, starts at zero.
        this.step = 0;

        // Container to hold the individuals present in this world. 
        this.individuals = [];

        // Fill the world
        this.fill_world_data(configuration);
    }

    // Add an individual to this world
    add_individual(individual) {
        this.individuals.push(individual);
    }

    // Run this world, step by step.
    run() {
        for (this.step = 0; this.step <= 16; this.step++){
            console.log(`Running step ${this.step}`);
        }
    }

    // Fill the world according to the world renderer 
    fill_world_data(configuration) {
        
    }

}