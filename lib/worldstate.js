// Libraries
const shell = require('shelljs');
const fs = require('fs');

// World state class describes the state of a world at a given time/step, for saving
module.exports = class WorldState {
   
    constructor() {
        this.name = "default";
    }
    
    // Start the save, setup the folder, clean up any previous attempt
    open(name) {
        // Save the name of this state save
        this.name = name;

        // Save the temp folder for data storage
        this.tmp_folder = `/tmp/state-${this.name}/`;

        // Make the folder we'll save in 
        shell.mkdir('-p', this.tmp_folder);

    }

    save(name, world) {
        // Get the data from the worldData
        let data = `[${world.data.data.data}]`;
        console.log(`world data: ${data}`);

        // Write to a file
        fs.writeFileSync(`${this.tmp_folder}/${name}.json`, data);

        console.log(`${this.tmp_folder}/${name}.json`);
    }

    // End the save, pack it all into a zip file and clean up once done
    close() {

        // TODO: Count/display how much space both the unzipped and zipped contents take, for curiosity
        
    }

}
