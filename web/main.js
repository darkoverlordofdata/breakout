bosco.start({
    "namespace": "breakout",
    "width": window.innerWidth,
    "height": window.innerHeight,
    "fullScreen": false,
    "scale": false,
    "scaleType": "FILL",
    "stats": true,
    "storage": false,
    "options": {
        "antialiasing": false,
        "transparent": false,
        "resolution": window.devicePixelRatio,
        "autoResize": true,
        "backgroundColor": "0x3c3c3c"
    },
    "controllers": {
        main: [
            "GameController",
            "ScoreLabelController"
        ]
    },
    "assets": {
        "images": "res/breakout.json"
    },
    "resources": {
        "ball_1" : {"path": "ball_1.png"},
        "ball_2" : {"path": "ball_2.png"},
        "ball_3" : {"path": "ball_3.png"},
        "ball_4" : {"path": "ball_4.png"},
        "ball_5" : {"path": "ball_5.png"},

        "brick_1_1" : {"path": "brick_1_1.png"},
        "brick_1_2" : {"path": "brick_1_2.png"},
        "brick_1_3" : {"path": "brick_1_3.png"},
        "brick_1_4" : {"path": "brick_1_4.png"},

        "brick_2_1" : {"path": "brick_2_1.png"},
        "brick_2_2" : {"path": "brick_2_2.png"},
        "brick_2_3" : {"path": "brick_2_3.png"},
        "brick_2_4" : {"path": "brick_2_4.png"},

        "brick_3_1" : {"path": "brick_3_1.png"},
        "brick_3_2" : {"path": "brick_3_2.png"},
        "brick_3_3" : {"path": "brick_3_3.png"},
        "brick_3_4" : {"path": "brick_3_4.png"},

        "brick_4_1" : {"path": "brick_4_1.png"},       
        "brick_4_2" : {"path": "brick_4_2.png"},       
        "brick_4_3" : {"path": "brick_4_3.png"},       
        "brick_4_4" : {"path": "brick_4_4.png"},       
 
        "one"   : {"path": "one.png"},       
        "two"   : {"path": "two.png"},
        "three" : {"path": "three.png"},       
        
        "paddle_big"    : {"path": "paddle_big.png"},       
        "paddle_small"  : {"path": "paddle_small.png"}, 
          
        "power_down"    : {"path": "power_down.png"},       
        "power_up"      : {"path": "power_up.png"}
    },
    "properties": {
        "skip": "false",
        "leaderboard": "off",
        "player": "",
        "userId": "",
        "playMusic": "true",
        "playSfx": "true"
    }
});

