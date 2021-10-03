// Libraries
const fs = require('fs');
// A is the part of an individual that interacts with the World
module.exports = class Body {
   
    constructor() {
        // Body parts.
        // Note the plan is not to reproduce human anatomy, but to create a simplified version that is useful for our purposes
        this.anatomy = {
            leg: {}, // Responsible for moving around
            arm: {}, // Responsible for holding, pointing, fighting etc
            hand: {}, // Responsible for using tools
            neck: {}, // Responsible for orienting the sensory organs
            heart: {}, // Responsible for blood, inc. pressure and frequency
            lymphnode: {}, // Responsible for immune responses
            lung: {}, // Responsible for air intake
            stomach: {}, // Responsible for breaking down food
            intestine: {}, // Responsible for converting food to energy
            womb: {}, // Responsible for creating new individuals
            brain: {}, // Responsible for getting the mind up and running
            vein: {}, // Responsible for holding and distributing blood, contains blood-related cells
        };
        // Energy is required to perform work
        this.energy = 0;
    }
}