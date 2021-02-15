controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball = sprites.createProjectileFromSprite(img`
        . . . . . . 2 2 
        . . . . . . 2 2 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, mySprite, -50, 0)
    pause(200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite2.destroy(effects.spray, 500)
})
let ball: Sprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
mySprite2 = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
    2 1 2 2 2 2 2 2 2 2 2 2 2 2 2 1 2 
    2 1 2 1 1 1 1 1 1 1 1 1 1 1 2 1 2 
    2 1 2 1 2 2 2 2 2 2 2 2 2 1 2 1 2 
    2 1 2 1 2 1 1 1 1 1 1 1 2 1 2 1 2 
    2 1 2 1 2 1 2 2 2 2 2 1 2 1 2 1 2 
    2 1 2 1 2 1 2 1 1 1 2 1 2 1 2 1 2 
    2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 
    2 1 2 1 2 1 2 1 1 1 2 1 2 1 2 1 2 
    2 1 2 1 2 1 2 2 2 2 2 1 2 1 2 1 2 
    2 1 2 1 2 1 1 1 1 1 1 1 2 1 2 1 2 
    2 1 2 1 2 2 2 2 2 2 2 2 2 1 2 1 2 
    2 1 2 1 1 1 1 1 1 1 1 1 1 1 2 1 2 
    2 1 2 2 2 2 2 2 2 2 2 2 2 2 2 1 2 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e . . 7 7 . . 
    . . . . . . e d d e . . 7 9 . . 
    . . . . . . e d d e . . 4 . . . 
    . . . . . . . d d . 4 4 . . . . 
    . . . . . . 4 5 5 4 4 . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . 9 4 4 . 4 4 . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . 3 3 . 3 3 . . . . . . 
    . . . . . 3 . . . 3 3 . . . . . 
    . . . . . 3 . . . . 3 . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(145, 60)
mySprite2.setPosition(9, 57)
