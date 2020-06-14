import {
    Mesh
} from "@babylonjs/core/Meshes/mesh";
import { GameObject } from "./gameObject";
import { Game } from './game';
import { AppearenceGenerator } from './appearencegenerator';

export class Spikes extends GameObject {

    private _sharpPart: Mesh;
    private _number: number;


    constructor(game: Game, number: number) {
        super('spikes', game);
        this._sharpPart = AppearenceGenerator.spikesMesh(game.scene);
        this._sharpPart.parent = this;
        this._sharpPart.material = AppearenceGenerator.spikesMaterial(game.scene)
    }

    get sharpPart(): Mesh {
        return this._sharpPart;
    }

    set sharpPart(value: Mesh) {
        this._sharpPart = value;
    }
    
    get number(): number {
        return this._number;
    }

    set number(value: number) {
        this._number = value;
    }

    updateMaterial = (mat) => {
        this._sharpPart.material = mat
    };

    delete = () => {
        this.dispose();
    }

}