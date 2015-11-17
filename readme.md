# Breakout
Based on https://github.com/city41/breakouts, however the implementation guidelines make it clear that
this repo doesn't qualify as it's not pure javascript.

entitas init breakout
entitas create -c Animation animation:any
entitas create -c Body body:any
entitas create -c Sprite object:any
entitas create -c Stats lives:number score:number level:number
entitas create -c Ball
entitas create -c Block
entitas create -c Counter
entitas create -c Paddle
entitas create -c Player
entitas create -c WallLeft
entitas create -c WallRight
entitas create -c WallTop
entitas create -e Ball
entitas create -e Block
entitas create -e Counter
entitas create -e Paddle
entitas create -e Player
entitas create -e WallLeft
entitas create -e WallRight
entitas create -e WallTop
entitas create -s AddViewSystem ISetPool IInitializeSystem IExecuteSystem
entitas create -s AnimationUpdater ISetPool IInitializeSystem IExecuteSystem
entitas create -s BallDeathChecker ISetPool IInitializeSystem IExecuteSystem
entitas create -s BlockHit ISetPool IInitializeSystem IExecuteSystem
entitas create -s CountdownSystem ISetPool IInitializeSystem IExecuteSystem
entitas create -s DestroySystem ISetPool IInitializeSystem IExecuteSystem
entitas create -s InitializedLevel ISetPool IInitializeSystem IExecuteSystem
entitas create -s LevelChanger ISetPool IInitializeSystem IExecuteSystem
entitas create -s PaddleHit ISetPool IInitializeSystem IExecuteSystem
entitas create -s PaddleMovement ISetPool IInitializeSystem IExecuteSystem
entitas create -s PhysicsStep ISetPool IInitializeSystem IExecuteSystem
entitas create -s Renderer ISetPool IInitializeSystem IExecuteSystem
entitas create -s SpriteBodyUpdated ISetPool IInitializeSystem IExecuteSystem
entitas create -x Pool createPlayer:Entity
entitas create -x Pool createPaddle:Entity
entitas create -x Pool createWallTop:Entity
entitas create -x Pool createWallLeft:Entity
entitas create -x Pool createWallRight:Entity
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

