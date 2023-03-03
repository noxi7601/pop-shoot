import { Movement } from '../../Logic/Motion/Movement.js';
import { game } from '../../../app.js';
import { CANVAS } from '../../Assets/OtherGfx.js';
import { Animation } from '../../Effects/Misc/Animation.js';
import { randomInRange } from '../../Logic/Helpers.js';
import { BOMBSPRITE, LASERSPRITE, QUADSPRITE, THORSPRITE } from '../../Assets/Lasers.js';

const SPEED = 10;
const RADIUS = 5;
const MINDMG = 3;
const MAXDMG = 6;
const DEFAULTDIRECTION = 270; // Angle (0=EAST 90=South 180=WEST 270=NORTH)

export class BlueLaser {
    constructor(direction = DEFAULTDIRECTION) {
        this.x = game.player.x;
        this.y = game.player.y;
        this.radius = RADIUS;
        this.sprite = LASERSPRITE;

        this.damage = randomInRange(MINDMG, MAXDMG) * game.state.variables.damageMultiplier;
        this.speed = SPEED;
        this.direction = direction;
        this.shattered = false;
        this.alreadyLooped = false;

        this.setSprite();
    }

    move() {
        if (game.state.variables.loopers && this.y <= 10 && !this.alreadyLooped) {
            this.y = CANVAS.height;
            this.alreadyLooped = true;
        }

        this.x += Movement.move(this.direction, this.speed).x;
        this.y += Movement.move(this.direction, this.speed).y;
    }

    setSprite() {
        if (game.state.variables.quaddamage) {
            return (this.sprite = QUADSPRITE);
        }
        if (game.state.variables.thorshammer) {
            return (this.sprite = THORSPRITE);
        }
        if (game.state.variables.bomb) {
            return (this.sprite = BOMBSPRITE);
        }
    }

    // laser will shatter when hitting an enemy
    shatter() {
        this.shattered = true;
        game.effects.add(new Animation(this.x, this.y, 'smoke_small'));
    }
}
