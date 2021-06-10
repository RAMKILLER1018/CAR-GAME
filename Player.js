class Player{
    constructor(){
        this.name=null;
        this.distance=0;
        this.index=null;
    }
    getCount(){
        var Count = database.ref('playerCount');
        Count.on('value', function(data){
            playerCount = data.val();
        });
        }

        updateCount(State){
            database.ref('/').update({
                playerCount:State
            });
        }
        update(){
            var playerindex = "players/player"+ this.index
            database.ref(playerindex).set({
                name:this.name,
                distance:this.distance
            })
        }
        static Pinfo(){
            var PInfo = database.ref("players");
            PInfo.on('value', function(data){
               allPlayers=data.val(); 
            })
        }
}