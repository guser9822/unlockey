import {
    Mesh
} from "@babylonjs/core/Meshes/mesh";
import { Game } from '../classes/game'

export class GameObject extends Mesh {

    private _game: Game;

    constructor(name: string, game: Game) {
        super(name, game.scene)
        //Mesh.call(this, name, game.scene);// TODO
        this._game = game;
    }

    get game(): Game {
        return this._game;
    }

    set game(value: Game) {
        this._game = value;
    }

}