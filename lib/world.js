// Libraries
const blocks = require('./assets/blocks.js');
const WorldData = require('./worlddata.js');

// World class describes a world individuals will live inside of
module.exports = class World {
   
    constructor(configuration) {
        // Create the world data 4D array. The last two elements are [blocktype, properties(such as orientation, colors, in packed bit format)].
        this.data = new WorldData(configuration);
       
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
        // TODO: Nice progress bar
        for (this.step = 0; this.step <= 4; this.step++){
            console.log(`# Step ${this.step}`);
        }
    }

    // Fill the world according to the world renderer
    fill_world_data(configuration) {
        for (let x = 0; x < configuration.dimensions[0]; x++){
            for (let y = 0; y < configuration.dimensions[1]; y++){
                this.data[[x, y, 0]] = 2;
            }
        }
        let a = this.data.asArray;
        console.log(this.data.data);
        console.log(a[0]);
        console.log(JSON.stringify(a));
        /*for (let x = 0; x < configuration.dimensions[0]; x++){
            for (let y = 0; y < configuration.dimensions[1]; y++){
                console.log([x,y,JSON.stringify(a[x][y][0])]);
            }
        }
        */ 
    }

}
