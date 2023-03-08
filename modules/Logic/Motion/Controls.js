import { game } from '../../../app.js';
import { CANVAS } from '../../Assets/Other.js';

const PAUSEBUTTON = 'Space';
const UNSETGAMEOVERBUTTON = 'KeyP';

export class Controls {
    static addControls() {
        this.addMouseMovement();
        this.addMouseClicks();
        this.addPauseButton();
        this.addUnsetGameOverButton();
        this.disableRightClickMenu();
    }

    // EVENTS

    static addMouseMovement() {
        CANVAS.addEventListener('mousemove', (evt) => {
            game.player.x = evt.clientX > CANVAS.width ? CANVAS.width : evt.clientX;
            game.player.y = evt.clientY > CANVAS.height ? CANVAS.height : evt.clientY;
        });
    }

    static addMouseClicks() {
        CANVAS.addEventListener('mousedown', this._mouseClicks);
        CANVAS.addEventListener('mouseup', this._mouseClicksRelease);
    }

    static removeMouseClicks() {
        CANVAS.removeEventListener('mousedown', this._mouseClicks);
    }

    static addPauseButton() {
        document.addEventListener('keydown', this._pauseButton);
    }

    static addUnsetGameOverButton() {
        document.addEventListener('keydown', this._unsetGameOverButton);
    }

    static disableRightClickMenu() {
        CANVAS.addEventListener('contextmenu', (evt) => {
            evt.preventDefault();
        });
    }

    // FUNCTIONS

    static _mouseClicks(evt) {
        // left
        if (evt.button === 0) {
            if (!game.state.time) {
                game.state.startGame();
                CANVAS.requestFullscreen();
            }
            game.player.unsetShoot(); // used to prevent stuck to autoshooting by accident
            game.player.setShoot();
        }

        // right
        if (evt.button === 2) {
            game.state.startSlowmo();
        }
    }

    static _mouseClicksRelease(evt) {
        // left
        if (evt.button === 0) {
            game.player.unsetShoot();
        }

        // right
        if (evt.button === 2) {
            game.state.stopSlowmo();
        }
    }

    static _pauseButton(evt) {
        if (evt.code === PAUSEBUTTON) {
            if (!game.state.over) {
                game.state.togglePause();
            } else {
                game.state.replay();
            }
        }
    }

    static _unsetGameOverButton(evt) {
        if (evt.code === UNSETGAMEOVERBUTTON && game.state.over) {
            game.state.unsetGameOver();
        }
    }
}
