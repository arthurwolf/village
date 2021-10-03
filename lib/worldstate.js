// Libraries
var shell = require('shelljs');

// World state class describes the state of a world at a given time/step, for saving
module.exports = class WorldState {
   
    constructor() {
        this.name = "default";
    }
    
    // Start the save, setup the folder, clean up any previous attempt
    open(name) {
        this.name = name;
    }

    save(name, world) {
        // Get the data from the worldData
        let data = `[${world.data.data.data}]`;
        console.log(`world data: ${data}`);

        
    }

    // End the save, pack it all into a zip file and clean up once done
    close() {
        
    }

}
