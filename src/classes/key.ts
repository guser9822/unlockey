import {
    Mesh
} from "@babylonjs/core/Meshes/mesh";

import { GameObject } from "./gameObject";
import { Game } from './game';
import { AppearenceGenerator } from './appearencegenerator';
import { Spikes } from './spikes';

export class Key extends GameObject {

    private _number: number;
    private _spike: Spikes;
    private _keyMesh: Mesh;


    constructor(game: Game, number: number) {
        super('key', game);
        this._number = number;
        this._spike = null;
        this._keyMesh = AppearenceGenerator.keyMesh(game.scene);
        this._keyMesh.parent = this;
        this._keyMesh.material = AppearenceGenerator.keyMaterial(game.scene)
    }

    get number(): number {
        return this._number;
    }

    set number(value: number) {
        this._number = value;
    }

    get spike(): Spikes {
        return this._spike;
    }

    set spike(value: Spikes) {
        this._spike = value;
    }

    get keyMesh(): Mesh {
        return this._keyMesh;
    }

    set keyMesh(value: Mesh) {
        this._keyMesh = value;
    }

    link = (spike) => {
        this._spike = spike
    };

    delete = () => {
        this._spike.delete();
        this.dispose();
    }

}