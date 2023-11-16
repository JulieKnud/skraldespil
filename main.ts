namespace SpriteKind {
    export const enemy2 = SpriteKind.create()
    export const enemy3 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.enemy2, assets.tile`myTile5`, function (sprite, location) {
    if (controller.A.isPressed()) {
        sprites.destroy(sprite)
        info.changeScoreBy(-1)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -150
})
scene.onOverlapTile(SpriteKind.enemy3, assets.tile`myTile3`, function (sprite, location) {
    if (controller.A.isPressed()) {
        sprites.destroy(sprite)
        info.changeScoreBy(-1)
    }
})
function makeSpriteFall (mySprite: Sprite) {
    mySprite.setPosition(randint(0, scene.screenWidth()), 0)
    mySprite.setVelocity(0, 16)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy2, function (sprite, otherSprite) {
    otherSprite.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile3`, function (sprite, location) {
    if (controller.A.isPressed()) {
        sprites.destroy(sprite)
        info.changeScoreBy(1)
        Sekunder += -100
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile5`, function (sprite, location) {
    if (controller.A.isPressed()) {
        sprites.destroy(sprite)
        info.changeScoreBy(-1)
    }
})
scene.onOverlapTile(SpriteKind.enemy3, assets.tile`myTile5`, function (sprite, location) {
    if (controller.A.isPressed()) {
        sprites.destroy(sprite)
        info.changeScoreBy(1)
        Sekunder += -100
    }
})
scene.onOverlapTile(SpriteKind.enemy3, assets.tile`myTile4`, function (sprite, location) {
    if (controller.A.isPressed()) {
        sprites.destroy(sprite)
        info.changeScoreBy(-1)
    }
})
scene.onOverlapTile(SpriteKind.enemy2, assets.tile`myTile3`, function (sprite, location) {
    if (controller.A.isPressed()) {
        sprites.destroy(sprite)
        info.changeScoreBy(-1)
    }
})
scene.onOverlapTile(SpriteKind.enemy2, assets.tile`myTile4`, function (sprite, location) {
    if (controller.A.isPressed()) {
        sprites.destroy(sprite)
        info.changeScoreBy(1)
        Sekunder += -100
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy3, function (sprite, otherSprite) {
    otherSprite.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile4`, function (sprite, location) {
    if (controller.A.isPressed()) {
        sprites.destroy(sprite)
        info.changeScoreBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.follow(mySprite)
})
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let randomNum = 0
let mySprite: Sprite = null
info.startCountdown(180)
let Sekunder = 2000
mySprite = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath2)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 350
info.setScore(0)
game.showLongText("Sorter afaldet for at rede klimaet! sotere du forkert får du minus point!", DialogLayout.Bottom)
game.showLongText("Pizza i orange, Glas i blå, tæppe i pink", DialogLayout.Bottom)
game.onUpdateInterval(Sekunder, function () {
    randomNum = randint(0, 2)
    if (randomNum == 0) {
        mySprite3 = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .....7977777777.....
            .....7777777777.....
            ......66666666......
            ......99999999......
            .....9999999999.....
            .....9999999999.....
            .....9999999999.....
            .....9999999999.....
            .....9999999999.....
            .....9999999999.....
            .....9999999999.....
            ......77777777......
            ....................
            ....................
            `, SpriteKind.enemy2)
        makeSpriteFall(mySprite3)
    } else if (randomNum == 1) {
        mySprite2 = sprites.create(img`
            . . . . . . b b b b . . . . . . 
            . . . . . . b 4 4 4 b . . . . . 
            . . . . . . b b 4 4 4 b . . . . 
            . . . . . b 4 b b b 4 4 b . . . 
            . . . . b d 5 5 5 4 b 4 4 b . . 
            . . . . b 3 2 3 5 5 4 e 4 4 b . 
            . . . b d 2 2 2 5 7 5 4 e 4 4 e 
            . . . b 5 3 2 3 5 5 5 5 e e e e 
            . . b d 7 5 5 5 3 2 3 5 5 e e e 
            . . b 5 5 5 5 5 2 2 2 5 5 d e e 
            . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
            . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
            b d 3 2 d 5 5 5 d d d 4 4 . . . 
            b 5 5 5 5 d d 4 4 4 4 . . . . . 
            4 d d d 4 4 4 . . . . . . . . . 
            4 4 4 4 . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        makeSpriteFall(mySprite2)
    } else {
        mySprite4 = sprites.create(img`
            ..3b3b3b3b3b3b3b3b3b3b3b3b3b3b..
            .3dd3b3b3b3b3b3b3b3b3b3b3b3bdd3.
            bbdd3dddddddddddddddddddddd3ddbb
            b333dd33333333333333333333dd333b
            bbbdd3333333333333333333333ddbbb
            b33d333d3333333d3333333d3333d33b
            bbbd333333333333333333333333dbbb
            b33d333333333333333333333333d33b
            bbbd333333333333333333333333dbbb
            b33d3333333d3333333d33333333d33b
            bbbd333333333333333333333333dbbb
            b33d333333333333333333333333d33b
            bbbd333333333333333333333333dbbb
            b33d333d3333333d3333333d3333d33b
            bbbd333333333333333333333333dbbb
            b33d333333333333333333333333d33b
            bbbd333333333333333333333333dbbb
            b33d3333333d33333333d3333333d33b
            bbbdd3333333333333333333333ddbbb
            b333dd33333333333333333333dd333b
            bbdd3dddddddddddddddddddddd3ddbb
            b3dd3b3b3b3b3b3b3b3b3b3b3b3bdd3b
            .bbb3b3b3b3b3b3b3b3b3b3b3b3b3bb.
            ...bbbbbbbbbbbbbbbbbbbbbbbbbb...
            `, SpriteKind.enemy3)
        makeSpriteFall(mySprite4)
    }
})
