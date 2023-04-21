<div align="center">
<img src="assets/repo/banner.png" alt="banner">

[![languages](https://img.shields.io/github/languages/top/kiwphi/pop-shoot?style=flat)](https://github.com/kiwphi/pop-shoot)
[![stars](https://img.shields.io/github/stars/kiwphi/pop-shoot?style=flat)](https://github.com/kiwphi/pop-shoot/stargazers)
[![forks](https://img.shields.io/github/forks/kiwphi/pop-shoot?style=flat)](https://github.com/kiwphi/pop-shoot/forks)
[![license](https://img.shields.io/github/license/kiwphi/pop-shoot?style=flat)](https://github.com/kiwphi/pop-shoot/blob/main/LICENSE)
[![commit](https://img.shields.io/github/last-commit/kiwphi/pop-shoot?style=flat)](https://github.com/kiwphi/pop-shoot/commits/main)

</div>

# pop-shoot

A synthwave styled space shooter, inspired by the 80s arcades. Written in plain Javascript.  
The game includes 5 stages & bosses, as well as many cool features such as bullet-time, randomized item drops, weather effects and an awesome soundtrack by TeknoAxe.

:joystick: [Play](https://kiwphi.github.io/pop-shoot/) (F11 to toggle full-screen)  
:beetle: [Report Bug](https://github.com/kiwphi/pop-shoot/issues)

# screenshots

<img src="assets/repo/screenshot1.png" alt="screenshot1">
<img src="assets/repo/screenshot2.png" alt="screenshot2">
<img src="assets/repo/screenshot3.png" alt="screenshot3">
<img src="assets/repo/screenshot4.png" alt="screenshot4">

# contributing

If you have any suggestions or ideas, please feel free to create an issue or even better, a pull request.
Below are some areas of the game that can currently be improved:

#### Performance Improvements

-   [Collision Detection](https://github.com/kiwphi/pop-shoot/blob/main/modules/Logic/Motion/CollisionDetection.js) needs optimization.
    It's currently abusing forEach() and nested loops which is not efficient at all.
    One way to do it would be using a uniform grid to split the canvas into cells and let each entity report which cell(s) it's in.
    When a cell is reported by more than one entity, a collision has happened.

-   The [EnemyController](https://github.com/kiwphi/pop-shoot/blob/main/modules/Logic/Controllers/EnemyController.js)
    class responsible for spawning enemies need refactoring. Readability is average, and I'm not sure that intervals is the best way to spawn enemies.
    There must be a better way to implement it.

-   All enemies move by calling move() or moveTowards() from the [Movement](https://github.com/kiwphi/pop-shoot/blob/main/modules/Logic/Motion/Movement.js) class.
    These functions are using sin(), cos(), PI and sqrt() regardless of the type of movement. Some enemies just move in a straight line and
    don't need complicated calculations. A lot of improvements can be made on that front to improve performance.

#### Gameplay Improvements

-   Currently, the slow-mo mechanic does not have a clear indicator on remaining time & charging status. The flame below the
    ship which currently serves as a gauge doesn't seem like a very good indicator. HUD elements (progress bars and such) won't
    work either since these require the player to take their eyes off the ship. Creative solutions regarding this are welcome.

-   Feel free to submit ideas for new enemies, items, buffs or boss patterns.

#### Arts & Graphics

-   The Canvas on which the game is drawn is currently given hard-coded size in [Scene.js](https://github.com/kiwphi/pop-shoot/blob/main/modules/Scene/Scene.js).
    It's currently 1000px wide (yes, I know...). It is then scaled to fill the screen in style.css.
    It would be nice to have the canvas width dynamically scale according to the screen size, and all of the
    [Scene's elements](https://github.com/kiwphi/pop-shoot/tree/main/modules/Scene/Elements) have their coordinates calculated dynamically instead of
    hard-coded as they currenlty are. I'm not sure how this could be tackled since there's also the size of the imported assets to be taken into consideration.

-   The currently used [assets](https://github.com/kiwphi/pop-shoot/tree/main/assets) are all royalty-free and provided generously by their
    respective authors. It would be awesome to have original synthwave-styled pixel-art assets just for pop-shoot.

# debugging

The `Logic/State/Debugging.js` file provides some useful keybindings for jumping around the game without having to modify the code:

-   Jump to stage keys: `1` `2` `3` `4` `5`
-   Jump to current-stage boss (10 seconds before boss spawn): `B`
-   Receive random item: `I`
-   Clear items: `C`
-   Kill all enemies on-screen: `K`
-   Spawn RedPackage: `R` OrangePackage: `O`
-   Toggle weather: `W`
-   Keep playing after gameover: `P`

# license

This repository consists of two major parts:

-   The _source-code_, mostly contained within the ./modules directory
    is under the [GNU GPL-3.0 License](https://github.com/kiwphi/pop-shoot/blob/main/LICENSE).
-   The _assets_, which are all contained within the ./assets directory were fetched from several sources
    (mentionned in the _acknowledgments_ section) and are not under the same license. Each asset is owned by its respective author.

# acknowledgments

:musical_note: Music by [TeknoAxe](https://open.spotify.com/artist/0Hyqsw7GWssXIOVgy36ohS)  
:art: Original background images by [Paul Craft](https://co.pinterest.com/paulcraftone/) & [Nate Wren](https://natewren.com)  
:flying_saucer: Sprites & Audio by [Kenney.nl](https://kenney.nl), [OpenGameArt](https://opengameart.org) & [kalebsilva](https://www.vecteezy.com/members/kalebsilva)  
:pencil2: Fonts by [Rick Hoppman](https://www.dafont.com/thaleahfat.font), [Asiyah](https://www.dafont.com/handwriting-5.font) & [Photofunia](https://photofunia.com)

# tracklist

[Ascent to the Station](https://www.youtube.com/watch?v=r5L-CY9TcRc)  
[Retro Future Nights](https://www.youtube.com/watch?v=D_jQLR6zq30)  
[Lost in the Ether](https://www.youtube.com/watch?v=q2DFmJ46jFw)  
[Electronic Sunrise](https://www.youtube.com/watch?v=yjCWwkuOX7U)  
[City Lanes](https://www.youtube.com/watch?v=caPQEDHfaOI)  
[Nineteen Eighty Seven](https://www.youtube.com/watch?v=j6XKMywP3-g)  
[Dark Versus Light](https://www.youtube.com/watch?v=uxD88mxMDQc)  
[Twilight Metropolis A](https://www.youtube.com/watch?v=k1C1algxG0E)  
[Dystopian Paradise](https://www.youtube.com/watch?v=j9l6QWj4JqU)  
[Synthwave E](https://www.youtube.com/watch?v=RBxnYXGNNAk)
