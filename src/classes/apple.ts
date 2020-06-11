import {
    Mesh
} from "@babylonjs/core/Meshes/mesh";
import { GameObject } from "./gameObject";
import { Game } from './game';
import { AppearenceGenerator } from './appearencegenerator'


export class Apple extends GameObject {

    private _appleMesh: Mesh;

    constructor(game: Game) {
        super('apple', game);
        this._appleMesh = AppearenceGenerator.appleMesh(game.scene);
        this._appleMesh.parent = this;
        this._appleMesh.material = AppearenceGenerator.appleMaterial(game.scene);
    }


    get appleMesh(): Mesh {
        return this._appleMesh;
    }

    set appleMesh(value: Mesh) {
        this._appleMesh = value;
    }

}

// const Apple = function (game) {
//     GameObject.call(this, 'apple', game);
//     const apple = Mesh.CreateTorusKnot('knot', 0.25, 0.05, 64, 64, 2, 3, this.getScene());
//     apple.parent = this;
//     apple.material = game.gameMaterials.appleMaterial;
// }

// Apple.prototype = Object.create(GameObject.prototype);
// Apple.prototype.constructor = Apple;

// export default Apple;