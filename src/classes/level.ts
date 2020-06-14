import {
    Vector3
} from '@babylonjs/core/Maths/math';
import {
    Scene
} from "@babylonjs/core/scene";

import { Block } from "./block";
import { Key } from "./key";
import { Spikes } from "./spikes";
import { Apple } from "./apple";
import { Game } from './game';


const levels: any =
    [
        ['S', 0, 0, 0, -1, '-'],
        [1, '-', '-', '-', '-', '-'],
        [0, '-', 0, 0, -2, '-'],
        [0, 0, 0, '-', '-', '-'],
        ['-', '-', 2, 0, 0, 'F']
    ];

// // Level.LEVELS = [['S',0,0,0,-1,0,0,0,0,1,'F']]

export class Level {

    static readonly LEVELS = levels;

    private _game: Game;
    private _scene: Scene;
    private _start: Block;
    private _keys: Key[];
    private _spikes: Spikes[];
    private _blocks: Block[];
    private _finish: Block;

    constructor(game: Game) {
        this._game = game;
        this._scene = game.scene;

        this._start = null;
        this._keys = [];
        this._spikes = [];
        this._blocks = [];
    }

    public get game(): Game {
        return this._game;
    }

    public set game(value: Game) {
        this._game = value;
    }

    public get scene(): Scene {
        return this._scene;
    }

    public set scene(value: Scene) {
        this._scene = value;
    }

    public get start(): Block {
        return this._start;
    }

    public set start(value: Block) {
        this._start = value;
    }

    public get keys(): Key[] {
        return this._keys;
    }

    public set keys(value: Key[]) {
        this._keys = value;
    }

    public get spikes(): Spikes[] {
        return this._spikes;
    }

    public set spikes(value: Spikes[]) {
        this._spikes = value;
    }

    public get blocks(): Block[] {
        return this._blocks;
    }

    public set blocks(value: Block[]) {
        this._blocks = value;
    }

    public dispose = () => {
        this._blocks.forEach(it => it.dispose());
        this._keys.forEach(it => it.delete());
    }

    public get finish(): Block {
        return this._finish;
    }

    public set finish(value: Block) {
        this._finish = value;
    }

    static FromInts(matrix: any, game: Game) {
        const level = new Level(game);

        for (let z = 0; z < matrix.length; z++) {
            for (let x = 0; x < matrix[z].length; x++) {

                let type = matrix[z][x];

                let block = null;
                if (type === Block.Types.NOTHING) {
                    //Nothing
                } else {

                    block = new Block(x, z, game);
                    level.blocks.push(block);

                    if (type === Block.Types.NORMAL) {
                        //nothing
                    } else if (type === Block.Types.START) {
                        level.start = block;
                    } else if (type === Block.Types.FINISH) {
                        const a = new Apple(game);
                        a.position = block.position.clone();
                        a.position.y = 1;
                        level.finish = block;
                    } else {
                        //the block is a spike or a key 
                        if (type > 0) {
                            //Spike
                            const s = new Spikes(game, Math.abs(type));
                            s.position = new Vector3(x, 0.5, -z);
                            level.spikes.push(s)
                        } else {
                            //key
                            const k = new Key(game, Math.abs(type));
                            k.position = new Vector3(x, 0.75, -z);
                            level.keys.push(k);
                        }
                    }

                }
            }
        }

        //Link keys to spikes
        for (const k of level.keys) {
            for (const s of level.spikes) {
                if (k.number === s.number) {
                    k.link(s)
                }

            }
        }
        return level;
    }

}