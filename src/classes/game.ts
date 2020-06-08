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

// Augments the scene with the debug methods
import "@babylonjs/core/Debug/debugLayer";
// Injects a local ES6 version of the inspector to prevent automatically relying on the none compatible version
import "@babylonjs/inspector";

//My game classes
//import Player from './player';
//import Level from './level';
//import GameMaterials from './materialsgen';

export class Game {

    private _engine: Engine;
    private _scene: Scene;
    private _assets: any[];
    private _currentLevel: number;
    private _player: any;
    private _level: any;

    constructor(canvasId: string) {

        const canvas: any = document.getElementById(canvasId);
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

    public get engine(): Engine {
        return this._engine;
    }

    public set engine(value: Engine) {
        this._engine = value;
    }

    public get scene(): Scene {
        return this._scene;
    }

    public set scene(value: Scene) {
        this._scene = value;
    }

    public get assets(): any[] {
        return this._assets;
    }

    public set assets(value: any[]) {
        this._assets = value;
    }

    public get currentLevel(): number {
        return this._currentLevel;
    }

    public set currentLevel(value: number) {
        this._currentLevel = value;
    }

    public get player(): any {
        return this._player;
    }

    public set player(value: any) {
        this._player = value;
    }

    public get level(): any {
        return this._level;
    }

    public set level(value: any) {
        this._level = value;
    }

    private initScene = (engine: Engine) => {

        const scene = new Scene(engine);

        // The camera, necessary see the world
        const camera: UniversalCamera = new UniversalCamera("camera", new Vector3(2.5, 6, -6.5), scene);
        camera.rotation = new Vector3(Math.PI / 3.5, 0, 0)
        //Attach camera to the canvas
        camera.attachControl(engine.getRenderingCanvas());

        const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        return scene;
    }

    private initGame = () => {
        //this.player = new Player(this);
        //this.level = Level.FromInts(levels[this.currentLevel], this);
        //this.level = Level.FromInts(Level.LEVELS, this);
        //this.player.position = this.level.start.position.clone();
        //this.player.position.y = 2;
        //this.scene.debugLayer.show();
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