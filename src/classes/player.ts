import { GameObject } from "./gameObject";
import { Game } from './game';
import { AppearenceGenerator } from './appearencegenerator'

export class Player extends GameObject {

    private _body: any;
    private _directions: [number, number];
    private _rotations: [number, number];
    static readonly START_HEIGHT = 1;

    constructor(game: Game) {
        super('player', game)
        this._body = null;
        this._directions = [0, 0];
        this._rotations = [0, 0];

        // BabylonJS manage mesh vertex thorugh a VertexData
        const vertexData = AppearenceGenerator.playerMesh();

        // Our player geometry became a sphere
        vertexData.applyToMesh(this);

        this.position.y = Player.START_HEIGHT;

        this.material = AppearenceGenerator.playerMaterial(game.scene);

        const _this = this;
        this.getScene().registerBeforeRender(function () {
            if (_this.position.y < -10) {
                //_this.game.reset(); TODO
            }
        });
    }

    get body(): any {
        return this._body
    }

    set body(value: any) {
        this._body = value;
    }

    get directions(): any {
        return this._directions
    }

    set directions(value: any) {
        this._directions = value;
    }

    get rotations(): any {
        return this._rotations
    }

    set rotations(value: any) {
        this._rotations = value;
    }
}