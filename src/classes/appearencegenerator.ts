import {
    Scene
} from "@babylonjs/core/scene";

import {
    Mesh
} from "@babylonjs/core/Meshes/mesh";
import {
    StandardMaterial, FresnelParameters
} from "@babylonjs/core/Materials";
// Required side effects to populate the Create methods on the mesh class. Without this, the bundle would be smaller but the createXXX methods from mesh would not be accessible.
import "@babylonjs/core/Meshes/meshBuilder";

import {
    VertexData
} from '@babylonjs/core/Meshes/mesh.vertexData';

import {
    Color3
} from "@babylonjs/core/Maths/math";

import {
    Texture, CubeTexture
} from '@babylonjs/core/Materials/Textures';

//import groundTexture from '../assets/textures/ground.jpg'
import * as groundTexture from '../assets/ground.jpg';


//import groundTexture from '../assets/textures/ground.jpg'
// import spikesTexture from '../assets/textures/spikesTexture.jpg';
// import appleTexture from '../assets/textures/appleTexture.jpg';
// import keyTexture from '../assets/textures/keyTexture.jpg';

export class AppearenceGenerator {

    static playerMaterial = (scene: Scene) => {

        console.log('groundTexture ', groundTexture)

        const playerMaterial = new StandardMaterial("playerMaterial", scene);
        playerMaterial.diffuseColor = new Color3(1, 1, 1);
        playerMaterial.emissiveColor = new Color3(1, 1, 1);
        playerMaterial.alpha = 0.1;

        const color = Color3.FromInts(50, 50, 200);
        playerMaterial.emissiveFresnelParameters = new FresnelParameters();
        playerMaterial.emissiveFresnelParameters.bias = 0.6;
        playerMaterial.emissiveFresnelParameters.power = 2;
        playerMaterial.emissiveFresnelParameters.leftColor = Color3.Black();
        playerMaterial.emissiveFresnelParameters.rightColor = color;
        playerMaterial.opacityFresnelParameters = new FresnelParameters();
        playerMaterial.opacityFresnelParameters.leftColor = Color3.White();
        playerMaterial.opacityFresnelParameters.rightColor = Color3.Black();
        return playerMaterial;
    }

    static playerMesh = () => {
        //BabylonJS manage mesh vertex thorugh a VertexData
        return VertexData.CreateSphere({
            segments: 16,
            diameter: 0.75,
            slice: Mesh.DEFAULTSIDE
        });
    }

}


// const playerMaterialGen = function (scene) {
//     const playerMaterial = new StandardMaterial("playerMaterial", scene);
//     playerMaterial.diffuseColor = new Color3(1, 1, 1);
//     playerMaterial.emissiveColor = new Color3(1, 1, 1);
//     playerMaterial.alpha = 0.1;

//     const color = Color3.FromInts(50, 50, 200);
//     playerMaterial.emissiveFresnelParameters = new FresnelParameters();
//     playerMaterial.emissiveFresnelParameters.bias = 0.6;
//     playerMaterial.emissiveFresnelParameters.power = 2;
//     playerMaterial.emissiveFresnelParameters.leftColor = Color3.Black();
//     playerMaterial.emissiveFresnelParameters.rightColor = color;
//     playerMaterial.opacityFresnelParameters = new FresnelParameters();
//     playerMaterial.opacityFresnelParameters.leftColor = Color3.White();
//     playerMaterial.opacityFresnelParameters.rightColor = Color3.Black();
//     return playerMaterial;
// }

// const groundMaterialGen = function (scene) {
//     const groundMaterial = new StandardMaterial("groundMaterial", scene);
//     groundMaterial.diffuseTexture = new Texture(groundTexture, scene);
//     return groundMaterial;
// }

// const skyBox = function (scene) {
//     const skybox = Mesh.CreateBox("skyBox", 1000.0, scene);
//     const skyboxMaterial = new StandardMaterial("skyBox", scene);
//     skyboxMaterial.backFaceCulling = false;
//     skyboxMaterial.reflectionTexture = new CubeTexture('src/assets/skybox/SkyBoxTexture', scene);
//     skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
//     skyboxMaterial.diffuseColor = new Color3(0, 0, 0);
//     skyboxMaterial.specularColor = new Color3(0, 0, 0);
//     skybox.material = skyboxMaterial;
//     return skybox;
// }

// const spikesMaterialGen = function (scene) {
//     const spikesMaterial = new StandardMaterial("spikesMaterial", scene);
//     spikesMaterial.diffuseTexture = new Texture(spikesTexture, scene);
//     return spikesMaterial;
// }

// const appleMaterialGen = function (scene) {
//     const appleMaterial = new StandardMaterial("appleMaterial", scene);
//     appleMaterial.diffuseTexture = new Texture(appleTexture, scene);
//     return appleMaterial;
// }

// const keyMaterialGen = function (scene) {
//     const keyMaterial = new StandardMaterial("keyMaterial", scene);
//     keyMaterial.diffuseTexture = new Texture(keyTexture, scene);
//     return keyMaterial;
// }

// const GameMaterials = function (scene) {
//     this.playerMaterial = playerMaterialGen(scene);
//     this.groundMaterial = groundMaterialGen(scene);
//     this.spikesMaterial = spikesMaterialGen(scene);
//     this.appleMaterial = appleMaterialGen(scene);
//     this.keyMaterial = keyMaterialGen(scene);
//     this.skyBox = skyBox(scene);
// }

// GameMaterials.prototype.constructor = GameMaterials;
// export default GameMaterials;