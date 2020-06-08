import { Game } from '../src/classes/game'

//Start rendering the game when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    const game:Game = new Game('gameCanvas');
}, false)

