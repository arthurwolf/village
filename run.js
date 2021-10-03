// Imports

// Libraries, core
const World = require('./lib/world.js');
const Individual = require('./lib/individual.js');

// Libraries, utils
const Log = require('./lib/utils/log.js');

// Instantiate utils
const log = new Log();

// Boot time
log.log("# Booting village");

// Configuration
const world_config = {
    dimensions: [2, 2, 2],
    populate: false
};

// Create a new world for individuals to live in
const world = new World(world_config);
log.log("# World created");

// Create an individual
const individual = new Individual();
log.log("# Individual created");

// Add this individual to the world
world.add_individual(individual);

// Start running the world
log.log("# Start running the world");
world.run();