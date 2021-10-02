// Libraries, general 
const fs = require('fs');

// Libraries, ours
const Mind = require('./individual/mind.js');
const Body = require('./individual/body.js');
const Inventory = require('./individual/inventory.js');
const Genetics = require('./individual/genetics.js');

// An object representing an individual, including its DNA, and holding everything that makes it tick, both its body and its mind
module.exports = class Individual {
    
    constructor() {
        // This individual has a body, through which it interacts with the world.
        this.body = new Body();

        // This individual has a mind, which it uses to think.
        this.mind = new Mind();

        // This individual has an inventory
        this.inventory = new Inventory();

        // This individual has a specific genetic code
        this.genetics = new Genetics();
    }

}