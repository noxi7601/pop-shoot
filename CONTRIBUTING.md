# Contributing to pop-shoot

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

-   The currently used [sprites](https://github.com/kiwphi/pop-shoot/tree/main/assets/sprites) are all royalty-free and provided generously by their
    respective authors. It would be awesome to have original synthwave-styled pixel-art sprites just for pop-shoot.
