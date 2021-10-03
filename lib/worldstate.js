// Libraries
const shell = require('shelljs');
const fs = require('fs');
const jszip = require("jszip");

// World state class describes the state of a world at a given time/step, for saving
module.exports = class WorldState {
   
    constructor() {
        this.name = "default";
        this.zip = new jszip();
    }

    // TODO: Use https://www.npmjs.com/package/isomorphic-git instead of just zipping
    
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
        // let data = `[${world.data.data.data}]`;

        // Write to a file
        //fs.writeFileSync(`${this.tmp_folder}/${name}.json`, data);
        this.zip.folder('states').file(`${name}.json`, `[${world.data.data.data}]`);
    }

    // End the save, pack it all into a zip file and clean up once done
    close() {
        // Determine zip file name and path 
        this.zip_file = `/tmp/world-${this.name}.zip`;
        const file = this.zip_file;
        
        // Save the data in compressed form to a file
        this.zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true, compression: 'DEFLATE', compressionOptions: { level: 9 } }).pipe( fs.createWriteStream(this.zip_file) ).on('finish', function () { console.log(`# File «${file}» written.`) });

        // TODO: Count/display how much space both the unzipped and zipped contents take, for curiosity
    }

}
