// Libraries, utils
const Log = require('./utils/log.js');
const progress = require('cli-progress'); // [https://www.npmjs.com/package/cli-progress]
const random = require('random');
const seedrandom = require('seedrandom')

// Instantiate utils
const log = new Log();

// Libraries
const blocks = require('./assets/blocks.js');
const WorldData = require('./worlddata.js');
const WorldState = require('./worldstate.js');

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

        // Debug
        log.log(`# World data: ${JSON.stringify(this.data)}`);

    }

    // Add an individual to this world
    add_individual(individual) {
        this.individuals.push(individual);
    }

    // Run this world, step by step.
    run(steps) {
        // Nice progress bar
        const bar = new progress.SingleBar({}, progress.Presets.shades_classic);
        bar.start(steps, 0)

        // A tool to save states/steps to disk
        const state = new WorldState();
        state.open("default");

        // For each step
        for (this.step = 0; this.step <= steps; this.step++){
            // Log
            bar.update(this.step);

            // Change a random block
            random.use(seedrandom(`step-${this.step}`));
            this.data[[random.int(6) + 1, random.int(6) + 1, 0]] = blocks.get_id('slime');

            // Save the current step to disk
            state.save(this.step, this);

        }

        // Close the state save
        state.close();

        // Stop the progress bar 
        bar.stop();
        log.log(`# Done running ${steps} steps`);
    }

    // Fill the world according to the world renderer
    fill_world_data(configuration) {
        for (let x = 0; x < configuration.dimensions[0]; x++){
            for (let y = 0; y < configuration.dimensions[1]; y++){
                this.data[[x, y, 0]] = blocks.get_id('obsidian');
            }
        }
    }

}
