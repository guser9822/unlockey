import {
    Engine
} from "@babylonjs/core/Engines/engine";
import {
    Scene
} from "@babylonjs/core/scene";
import {
    Vector3
} from "@babylonjs/core/Maths/math";
import {
    UniversalCamera
} from "@babylonjs/core/Cameras/universalCamera";
import {
    HemisphericLight
} from "@babylonjs/core/Lights/hemisphericLight";

//My game classes
import { Player } from './player';
//import Level from './level';
//import GameMaterials from './materialsgen';

export class Game {

    private _engine: Engine;
    private _scene: Scene;
    private _assets: any[];
    private _currentLevel: number;
    private _player: Player;
    private _level: any;

    constructor(canvasId: string) {

        const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this._engine = new Engine(canvas, true);
        this._scene = this.initScene(this._engine);
        //this.gameMaterials = new GameMaterials(this.scene);
        this._assets = [];
        this._currentLevel = 1;
        this._player = null;
        this._level = null;
        this.initGame()
        const _this = this;
        this._engine.runRenderLoop(function () {
            _this._scene.render();
        })

    }

    get engine(): Engine {
        return this._engine;
    }

    set engine(value: Engine) {
        this._engine = value;
    }

    get scene(): Scene {
        return this._scene;
    }

    set scene(value: Scene) {
        this._scene = value;
    }

    get assets(): any[] {
        return this._assets;
    }

    set assets(value: any[]) {
        this._assets = value;
    }

    get currentLevel(): number {
        return this._currentLevel;
    }

    set currentLevel(value: number) {
        this._currentLevel = value;
    }

    get player(): Player {
        return this._player;
    }

    set player(value: Player) {
        this._player = value;
    }

    get level(): any {
        return this._level;
    }

    set level(value: any) {
        this._level = value;
    }

    private initScene = (engine: Engine) => {

        const scene = new Scene(engine);

        // The camera, necessary see the world
        const camera: UniversalCamera = new UniversalCamera('camera', new Vector3(2.5, 6, -6.5), scene);
        camera.rotation = new Vector3(Math.PI / 3.5, 0, 0)

        //Attach camera to the canvas
        camera.attachControl(engine.getRenderingCanvas());

        const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        return scene;
    }

    private initGame = () => {
        this._player = new Player(this);
        //this.level = Level.FromInts(levels[this.currentLevel], this);
        //this.level = Level.FromInts(Level.LEVELS, this);
        //this.player.position = this.level.start.position.clone();
        this.player.position.y = 2;
    }

}


// const Game = function (canvasId) {

//     const canvas = document.getElementById(canvasId);
//     this.engine = new Engine(canvas, true);
//     this.scene = this._initScene(this.engine);
//     //his.gameMaterials = new GameMaterials(this.scene);
//     this.assets = [];
//     this.currentLevel = 1;
//     this.player = null;
//     this.level = null;
//     this._initGame()
//     const _this = this;
//     this.engine.runRenderLoop(function () {
//         _this.scene.render();
//     })
// }

// Game.prototype._initScene = function (engine) {

//     const scene = new Scene(engine);

//     // The camera, necessary see the world
//     const camera = new UniversalCamera("camera", new Vector3(2.5, 6, -6.5), scene);
//     camera.rotation = new Vector3(Math.PI / 3.5, 0, 0)
//     //Attach camera to the canvas
//     camera.attachControl(engine.getRenderingCanvas());

//     const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
//     light.intensity = 0.7;

//     return scene;
// }

// Game.prototype._initGame = function () {
//     this.player = new Player(this);
//     //this.level = Level.FromInts(levels[this.currentLevel], this);
//     this.level = Level.FromInts(Level.LEVELS, this);
//     this.player.position = this.level.start.position.clone();
//     this.player.position.y = 2;
//     //this.scene.debugLayer.show();
// }


// export default Game;