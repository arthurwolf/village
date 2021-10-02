// Imports

// Libraries, ours 
const World = require('./lib/world.js');

// Configuration
const world_config = {
    dimensions: [8,8,8]
};

// Create a new world for individuals to live in
const world = new World(world_config);