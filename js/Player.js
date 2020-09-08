class Player{
      constructor(){
          this.name=null;
          this.index=0;

      }

      writeName(){
          var playerInfo='players/player'+this.index
          database.ref(playerInfo).set({
              name:this.name
          })
      }
      getCount(){
          var playerCountRef= database.ref('playerCount')
    playerCountRef.on("value",function(data){
              playerCount=data.val();
          })
      }
      updateCount(count){
          database.ref('/').update({
              playerCount:count
          })
      }
}