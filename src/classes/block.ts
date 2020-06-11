import {
    VertexData
} from '@babylonjs/core/Meshes/mesh.vertexData';

import {
    Mesh
} from "@babylonjs/core/Meshes/mesh";


import { GameObject } from "./gameObject";
import { Game } from "./game";
import { AppearenceGenerator } from './appearencegenerator';

enum TYPES {
    NOTHING = '-',
    NORMAL = 0,
    START = 'S',
    FINISH = 'F',
}

export class Block extends GameObject {

    static readonly Types = TYPES;

    constructor(x: number, z: number, game: Game) {
        super('block', game);
        const vertexData = AppearenceGenerator.blockMesh(game.scene);
        vertexData.applyToMesh(this);
        this.position.x = x;
        this.position.z = -z;
        this.material = AppearenceGenerator.blockMaterial(game.scene)
    }

}


// const Block = function (x, z, game) {
//     GameObject.call(this, 'block', game);
//     const vertexData = VertexData.CreateBox(1, Mesh.DEFAULTSIDE);
//     vertexData.applyToMesh(this);
//     this.position.x = x;
//     this.position.z = -z;

//     this.material = game.gameMaterials.groundMaterial;

// }

// Block.prototype = Object.create(GameObject.prototype);
// Block.prototype.constructor = Block;

// Block.TYPES = {
//     NOTHING: '-',
//     NORMAL: 0,
//     START: 'S',
//     FINISH: 'F',
// }

// export default Block;