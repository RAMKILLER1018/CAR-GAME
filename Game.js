class Game{
    constructor(){

    }

    getState(){
        var gameStateref=database.ref('gameState');
        gameStateref.on("value",function(data){
            gameState=data.val();
        })
    }
    updateState(State){
        database.ref('/').update({
            gameState:State
        });
    }
    async start(){
        if(gameState===0){
            player = new Player();
            var playerc = await database.ref('playerCount').once("value");
            if(playerc.exists()){
                playerCount = playerc.val();
                player.getCount();
            }
            //Player.Pinfo
            form = new Form();
            form.display();
        }
        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);

        cars=[car1,car2,car3,car4];
    }
    play(){
        background("white");
        form.hide()
        textSize(30);
        text("Game Started",displayWidth/2-60,100);

        Player.Pinfo()
        if(allPlayers!== undefined){
            var x=0
            var y
            var index=0
            for(var plr in allPlayers){
                index=index+1;
                x=x+200;
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index===player.index){
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;
                    cars[index-1].shapeColor="red";
                }
            }
        }
        if(keyDown(UP_ARROW)&& player.index!==null){
            player.distance=player.distance+50;
            player.update();
        }
        drawSprites();
    }
}