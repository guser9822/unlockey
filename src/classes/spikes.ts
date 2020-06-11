import {
    Mesh
} from "@babylonjs/core/Meshes/mesh";
import { GameObject } from "./gameObject";
import { Game } from './game';
import { AppearenceGenerator } from './appearencegenerator';

export class Spikes extends GameObject {

    private _sharpPart: Mesh;

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

    updateMaterial = (mat) => {
        this._sharpPart.material = mat
    };

    delete = () => {
        this.dispose();
    }

}

// const Spikes = function (game, number) {
//     GameObject.call(this, 'spikes', game);
//     this.sharpPart = Mesh.CreateCylinder("cylinder", 0.5, 0.5, 0.5, 6, 1, this.getScene());
//     this.sharpPart.parent = this;
//     this.sharpPart.material = game.gameMaterials.spikesMaterial;

// };

// Spikes.prototype = Object.create(GameObject.prototype);
// Spikes.prototype.constructor = Spikes;
// Spikes.prototype.updateMaterial = function (mat) {
//     this.sharpPart.material = mat
// };

// Spikes.prototype.delete = function () {
//     this.dispose();
// }

// export default Spikes;
