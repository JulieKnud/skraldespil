def on_up_pressed():
    mySprite.vy = -150
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_a_pressed():
    sprites.destroy(mySprite2)
    sprites.destroy(mySprite3)
    sprites.destroy(mySprite4)
    info.change_score_by(1)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    otherSprite.follow(mySprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

Skrald: Sprite = None
list2: List[Sprite] = []
mySprite4: Sprite = None
mySprite3: Sprite = None
mySprite2: Sprite = None
mySprite: Sprite = None
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
tiles.place_on_random_tile(mySprite, sprites.castle.tile_path2)
controller.move_sprite(mySprite, 100, 0)
mySprite.ay = 350
info.set_score(0)

def on_update_interval():
    global mySprite2, mySprite3, mySprite4, list2, Skrald
    mySprite2 = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    mySprite3 = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    mySprite4 = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    list2 = [mySprite2, mySprite3, mySprite4]
    Skrald = list2._pick_random()
    Skrald.set_position(randint(0, scene.screen_width()), 0)
    Skrald.set_velocity(0, 56)
game.on_update_interval(5000, on_update_interval)
