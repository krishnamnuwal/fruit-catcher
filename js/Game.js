class Game{
    constructor(){

    }

    getState(){
    var gameStateRef=database.ref('gameState')
       gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    updateState(state){
        databasee.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
        player= new Player();
        var playerCountR=await database.ref('playerCount').once("value");
        if(playerCountR.exists()){
            playerCount=playerCountR.val();
            player.getCount();
        }
        form=new Form();
        form.display();
        
        }
    }

}