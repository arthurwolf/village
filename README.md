# village
Artificial Intelligence training ground/experiment. 

Originally intended as a way to improve villager Artificial Intelligence for Minecraft Mods, this project is currently meant as a platform to experiment with different ways of evolving intelligence of individuals/populations in voxel worlds, mostly out of curiosity, and as an exploration of what is possible. 

The desired result would be to see interesting behaviors emerge naturally from the evolution of brains (using both Neural Networks and more traditional task-oriented programming modules).

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
# Unorganized notes:

These are mostly for quick reference and as reminders of future work:

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


