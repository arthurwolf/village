// Libraries
const array = require('@stdlib/ndarray/array');
const unary = require('@stdlib/ndarray/base/unary');
const ndarray2array = require( '@stdlib/ndarray/base/to-array' );
const blocks = require('./assets/blocks.js');

// World class describes a world individuals will live inside of
module.exports = class WorldData {
   
    constructor(configuration) {
        // Create the world data 4D array. The last two elements are [blocktype, properties(such as orientation, colors, in packed bit format)].
        this.data = array({ 'dtype': 'uint16', 'shape': [configuration.dimensions[0], configuration.dimensions[1], configuration.dimensions[2], 2] });

        // Save the configuration for later use
        this.configuration = configuration;

        return new Proxy(this, {
            // Generic getter for when we do value = array[[x,y,z]]
            get: (target, prop, receiver) => {
                let position = prop.split(',');
                if (!isNaN(position[0])) { // TODO: Check the other two
                    position = position.map(a => Number(a));
                    return target.data.get(position[0],position[1],position[2],0);
                } else {
                    // Or this isn't a numerical address
                    return target[prop];
                }   
            // Generic setter for when we do array[[x,y,z]] = value
            }, set: function (target, prop, value) {
                let position = prop.split(',');
                if (!isNaN(position[0])) {
                    position = position.map(a => Number(a));
                    return target.data.set(position[0],position[1],position[2],0, Number(value));
                } else {
                    // Or this isn't a numerical address
                    target[prop] = value;
                    return target[prop]; 
                }
            }
        })
    }

    // Get the length of this array
    get length() { return this.data.length }

    get asArray() {
        return ndarray2array(this.data, [ 2, 2, 2, 2 ], [ 8, 4, 2, 1 ], 0, 'row-major');
    }

}
