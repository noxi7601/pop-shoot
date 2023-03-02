import { game } from '../../../app.js';
import { OrangePackage } from '../../Actors/Packages/OrangePackage.js';
import { RedPackage } from '../../Actors/Packages/RedPackage.js';
import {
    LASERSOUND,
    RELOADSOUND,
    SHIELDDOWNSOUND,
    SHIELDUPSOUND,
    MUSICS0,
    MUSICS1,
    MUSICS2,
    MUSICS3,
    MUSICBOSS0,
    MUSICBOSS1,
    MUSICBOSS2,
    MUSICSLOWMO,
    MUSICGAMEOVER,
    HITSOUND,
    HITQUADSOUND,
    HITMETALSOUND,
    MUSICCLOCK,
    MUSICBOSS3,
    MUSICBOSS4,
    MUSICS4,
    DIVERSOUND,
    SLOWMOCHARGESOUND,
    SLOWMOEMPTYSOUND,
    RAINSOUND,
    THUNDER0SOUND,
    THUNDER1SOUND,
    WINDSOUND,
    SANDSOUND,
    MIRAGESOUND,
    VORTEXSOUND,
    GLITCHSOUND,
    MATRIXSOUND,
    ANXIETYSOUND,
    PHASESOUND,
    SPLASHSOUND,
    PHEWSOUND,
    EXPLOSIONNORMALSOUND,
    EXPLOSIONBIGSOUND,
    SMOKESOUND,
    SWOOSHSOUND,
    STEAMSOUND,
    BEEPREDSOUND,
    BEEPORANGESOUND,
    POWERDOWNSOUND,
    FAMILIARMGSOUND,
    SIRENSOUND,
    COINSOUND,
} from '../../Assets/Audio.js';

const MUSIC = {
    stage0: MUSICS0,
    stage1: MUSICS1,
    stage2: MUSICS2,
    stage3: MUSICS3,
    stage4: MUSICS4,
    boss0: MUSICBOSS0,
    boss1: MUSICBOSS1,
    boss2: MUSICBOSS2,
    boss3: MUSICBOSS3,
    boss4: MUSICBOSS4,
    slowmo: MUSICSLOWMO,
    gameover: MUSICGAMEOVER,
    clock: MUSICCLOCK,
};

const SOUNDS = {
    anxiety: {
        audio: ANXIETYSOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: false,
    },
    beepRed: {
        audio: BEEPREDSOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: false,
    },
    beepOrange: {
        audio: BEEPORANGESOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: false,
    },
    bigThunder: {
        audio: THUNDER0SOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: false,
    },
    coin: {
        audio: COINSOUND,
        rewind: false,
        clone: true,
        volume: 1,
        loop: false,
        limit: 10,
    },

    diver: {
        audio: DIVERSOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: false,
    },
    exp_big: {
        audio: EXPLOSIONBIGSOUND,
        rewind: false,
        clone: true,
        volume: 1,
        loop: false,
    },
    exp_normal: {
        audio: EXPLOSIONNORMALSOUND,
        rewind: false,
        clone: true,
        volume: 1,
        loop: false,
    },
    familiarMg: {
        audio: FAMILIARMGSOUND,
        rewind: true,
        clone: false,
        volume: 1,
        loop: false,
    },
    glitch: {
        audio: GLITCHSOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: false,
    },
    hit: {
        audio: HITSOUND,
        rewind: false,
        clone: true,
        volume: 0.5,
        loop: false,
        limit: 5,
    },
    hitMetal: {
        audio: HITMETALSOUND,
        rewind: false,
        clone: true,
        volume: 0.5,
        loop: false,
        limit: 5,
    },
    hitQuad: {
        audio: HITQUADSOUND,
        rewind: false,
        clone: true,
        volume: 0.5,
        loop: false,
        limit: 5,
    },
    laser: {
        audio: LASERSOUND,
        rewind: false,
        clone: true,
        volume: 0.7,
        loop: false,
    },
    matrix: {
        audio: MATRIXSOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: true,
    },
    mirage: {
        audio: MIRAGESOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: false,
    },
    phase: {
        audio: PHASESOUND,
        rewind: false,
        clone: true,
        volume: 1,
        loop: false,
    },
    phew: {
        audio: PHEWSOUND,
        rewind: false,
        clone: true,
        volume: 1,
        loop: false,
    },
    powerDown: {
        audio: POWERDOWNSOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: false,
    },
    rain: {
        audio: RAINSOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: true,
    },
    reload: {
        audio: RELOADSOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: false,
    },
    sand: {
        audio: SANDSOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: true,
    },
    shieldDown: {
        audio: SHIELDDOWNSOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: false,
    },
    shieldUp: {
        audio: SHIELDUPSOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: false,
    },
    slowmoEmpty: {
        audio: SLOWMOEMPTYSOUND,
        rewind: false,
        clone: true,
        volume: 1,
        loop: false,
    },
    siren: {
        audio: SIRENSOUND,
        rewind: true,
        clone: false,
        volume: 1,
        loop: true,
    },
    slowmoCharge: {
        audio: SLOWMOCHARGESOUND,
        rewind: true,
        clone: false,
        volume: 1,
        loop: false,
    },
    smallThunder: {
        audio: THUNDER1SOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: false,
    },
    smoke: {
        audio: SMOKESOUND,
        rewind: false,
        clone: true,
        volume: 1,
        loop: false,
    },
    splash: {
        audio: SPLASHSOUND,
        rewind: false,
        clone: true,
        volume: 1,
        loop: false,
    },
    steam: {
        audio: STEAMSOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: false,
    },
    swoosh: {
        audio: SWOOSHSOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: false,
    },
    vortex: {
        audio: VORTEXSOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: true,
    },
    wind: {
        audio: WINDSOUND,
        rewind: false,
        clone: false,
        volume: 1,
        loop: true,
    },
};

export class AudioController {
    constructor() {
        for (const key in MUSIC) {
            MUSIC[key].loop = true;
            MUSIC[key].volume = 0;
        }

        for (const key in SOUNDS) {
            if (SOUNDS[key].loop) {
                SOUNDS[key].audio.loop = true;
            }
        }

        this.limits = {};
    }

    // ********* MUSIC *********

    updateMusic() {
        const track = this._getTrack();
        for (const key in MUSIC)
            if (key === track) {
                if (key === 'slowmo') {
                    MUSIC[key].currentTime = 0;
                }
                MUSIC[key].play();
            } else {
                MUSIC[key].pause();
            }
    }

    _getTrack() {
        // Called by updateMusic() to get the corresponding
        // track to play, depending on the state of the game
        if (game.state.over) {
            return 'gameover';
        }
        if (game.player.clock.active) {
            return 'clock';
        }
        if (game.state.slowmo) {
            return 'slowmo';
        }
        if (game.state.boss) {
            return `boss${game.state.stage}`;
        }
        return `stage${game.state.stage}`;
    }

    rewindMusic() {
        for (const key in MUSIC) {
            MUSIC[key].currentTime = 0;
        }
    }

    // ********* SOUNDS *********

    playSound(type) {
        const sound = SOUNDS[type].clone ? SOUNDS[type].audio.cloneNode() : SOUNDS[type].audio;
        sound.volume = SOUNDS[type].volume;

        if (SOUNDS[type].limit) {
            if (this.limits[type] === undefined) {
                this.limits[type] = 0;
            }

            sound.onended = () => {
                this.limits[type]--;
            };
            if (this.limits[type] <= SOUNDS[type].limit) {
                this.limits[type]++;
                sound.play();
            }
        } else {
            sound.play();
        }
    }

    stopSound(type) {
        const sound = SOUNDS[type];
        if (sound.rewind) {
            sound.audio.currentTime = 0;
        }
        sound.audio.pause();
    }

    playHit(enemy) {
        // HITTING PACKAGES
        if (enemy.constructor === RedPackage || enemy.constructor === OrangePackage) {
            return this.playSound('hitMetal');
        }

        // QUAD-DAMAGE
        if (game.state.variables.quaddamage) {
            return this.playSound('hitQuad');
        }

        // HITTING EVERYTHING ELSE
        this.playSound('hit');
    }
}
