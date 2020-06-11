import {
    Vector3
} from '@babylonjs/core/Maths/math';

import { Block } from "./block";
import { Key } from "./key";
import { Spikes } from "./spikes";
import { Apple } from "./apple";

const Level = function (game) {
    this.game = game;
    this.scene = game.scene;

    this.start = null;
    this.keys = [];
    this.spikes = [];
    this.blocks = [];
};

Level.prototype.dispose = function () {
    this.blocks.forEach(it => it.dispose());
    this.keys.forEach(it => it.delete());
}

Level.FromInts = function (matrix, game) {

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

//Level.prototype.constructor = Level;

Level.LEVELS =
    [
        ['S', 0, 0, 0, -1, '-'],
        [1, '-', '-', '-', '-', '-'],
        [0, '-', 0, 0, -2, '-'],
        [0, 0, 0, '-', '-', '-'],
        ['-', '-', 2, 0, 0, 'F']
    ];

// Level.LEVELS = [['S',0,0,0,-1,0,0,0,0,1,'F']]
export default Level;