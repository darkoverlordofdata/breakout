# Breakout
Based on https://github.com/city41/breakouts, however the implementation guidelines make it clear that
this repo doesn't qualify as it's not pure javascript.

entitas init breakout

entitas create -c Position x:number y:number
entitas create -c Velocity x:number y:number
entitas create -c Resource name:string
entitas create -c Bounds radius:number
entitas create -c Mouse x:number y:number
entitas create -c Score value:number
entitas create -c Layer ordinal:number
entitas create -e Score
entitas create -e Mouse
entitas create -s AddViewSystem ISetPool IInitializeSystem IExecuteSystem
entitas create -s CollisionSystem  ISetPool IInitializeSystem IExecuteSystem
entitas create -s DestroySystem  ISetPool IInitializeSystem IExecuteSystem
entitas create -s HudRenderSystem  ISetPool IInitializeSystem IExecuteSystem
entitas create -s MovementSystem  ISetPool IInitializeSystem IExecuteSystem
entitas create -s PlayerInputSystem  ISetPool IInitializeSystem IExecuteSystem
entitas create -s SoundEffectSystem  ISetPool IInitializeSystem IExecuteSystem
entitas create -s SpriteRenderSystem  ISetPool IInitializeSystem IExecuteSystem
entitas create -x Pool createBrick:Entity color:number width:number x:number y:number
entitas create -x Pool createPaddle:Entity x:number y:number
entitas create -x Pool createBall:Entity x:number y:number
entitas generate

# MIT License

Copyright (c) 2015 Bruce Davidson &lt;darkoverlordofdata@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

