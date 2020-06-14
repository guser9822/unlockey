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