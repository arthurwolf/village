# Village

Artificial Intelligence training ground/experiment.

Originally intended as a way to improve villager Artificial Intelligence for Minetest (or Minecraft Mods), this project is currently meant as a platform to experiment with different ways of evolving intelligence of individuals/populations in voxel worlds, mostly out of curiosity, and as an exploration of what is possible.

The desired result would be to see interesting behaviors emerge naturally from the evolution of populations of simple body+brain units (using both Neural Networks and more traditional task-oriented programming modules working together to attempt to see emergent properties rise from the magic of Evolution).

# Plan
Here is the current working plan, approximately:
* Generate an engine/world the individuals can live inside of
* Create a DNA-based body and mind that can freely evolve
* Create a constraint-filled environment and run successive generations, see if we can get improvements to occur
* Try to use more modern AI tools for at least part of the brain structure

# Future work:
* Auto-export world data to Minecraft-compatible files, see npm:prismarine-world
* Create minecraft servers where current evolution can be seen live w/ https://www.npmjs.com/package/flying-squid
* Video output, one tick is one frame, and on the right of the screen, debug data showing what happened that tick (and why), as well as some status data. Presumably isometric, but maybe also a FP view from each individual?
* Actually do renders of the brain structure and functionning as video along with the actual world
* Implement crafting for individuals
* Abstract rendering of timelapses/visuals, so we can use different rendering engines not just the one
* Use more Cloudy stuff, use buckets for data storage, and process stuff remotely, use containers. Stuff.
* Maybe the step-by-step saves of world states should use Git instead of the current "pile of json zipped" thing we do? (https://github.com/mojombo/grit ?)

# Misc / Unorganized notes:
These are mostly for quick reference and as reminders of future work. 

## Links

* https://leafletjs.com/
* https://www.npmjs.com/package/perlin-noise
 * https://github.com/josephg/noisejs (also, try using shaders instead)
 * https://npm.io/package/perlin-fp
 * https://npm.io/package/tooloud
 * https://npm.io/package/perlin-noise-3d
* https://www.npmjs.com/package/minecraft-data
* For rendering, maybe try https://runemadsen.github.io/rune.js/ // http://printingcode.runemadsen.com/examples/ 
* https://www.npmjs.com/package/vixel
* http://jolicraft.andrejolicoeur.com/ for texture examples
* Voxel engine at https://www.npmjs.com/package/voxel-engine:
 * https://www.voxeljs.com/
 * https://github.com/voxel/voxel-plugins/wiki
 * https://github.com/deathcap/voxel-forest/blob/master/example/forest.js
 * https://github.com/maxogden/voxel-perlin-terrain
 * https://www.npmjs.com/package/vox-reader
 * https://github.com/FlorianFe/vox-viewer
 * https://www.npmjs.com/package/vox.js
 * https://github.com/shama/voxel-camera (can export PNG, if modified, can do isometric)
  * https://stackoverflow.com/questions/23450588/isometric-camera-with-three-js
  * https://threejs.org/docs/#api/en/cameras/OrthographicCamera
  * https://codepen.io/puritanner/pen/LbgMwo
 * https://www.npmjs.com/package/three-voxel-loader
 * https://andstor.github.io/three-voxel-loader/examples/ 
 * https://www.npmjs.com/package/vox-viewer (wow neat https://florianfe.github.io/vox-viewer/demo/)
 * https://github.com/maxogden/voxel-hello-world , https://github.com/maxogden/voxel-hello-world/blob/master/index.js
 * https://gist.github.com/maxogden/5147486 (good doc on getting started), same with https://www.npmjs.com/package/voxel-engine
 * NOA:
  * NOA looks like a good Minecraft-like engine that is actively maintained, maybe worth looking at: https://github.com/fenomas/noa-examples
  * https://github.com/fenomas/noa-examples/blob/master/src/hello-world/index.js
  * https://github.com/fenomas/noa-examples/blob/master/src/test/worldgen.js
  * https://github.com/fenomas/noa-examples/blob/master/src/test/index.js
 * Headless rendering of ThreeJS / Voxel-engine: https://discourse.threejs.org/t/headless-rendering/14401
  * https://github.com/mrdoob/three.js/blob/19beb8ecc83b8f52de1e00dcfca59fc2ce55078f/test/e2e/puppeteer.js
 * Headless rendering of BabylonJS: https://doc.babylonjs.com/divingDeeper/scene/renderRemoteScreenshot , which I think NOA is built on top of.
  * https://github.com/TrevorDev/babylonServer
 * General Pupeteer information: https://github.com/puppeteer/puppeteer/#usage

Command to remember for the voxel test: ./node_modules/browservefy/bin/browservefy voxel.js 3000

## Assets
Textures/ressource packs:
* https://github.com/Athemis/PixelPerfectionCE (looks good enough, good/CC license, seems perfect for our needs)
* https://www.npmjs.com/package/programmerart-textures


## Minecraft:
* Minecraft Botting API: https://github.com/PrismarineJS/mineflayer (can ultimately be used to implement the villagers as bots/players, and see them play the actual game)
* Prismarine viewer, in the mineflayer family, an Electron minecraft viewer example: https://github.com/PrismarineJS/prismarine-viewer

## Fun things / Inspiration:
* https://citycraft.io/ (Uses NOA)
* So neat: http://qake.se/demo/
* https://wwwtyro.github.io/vixel-editor/




