class Form{
constructor(){
    this.input=createInput("NAME");
    this.button=createButton("PLAY")
    this.gameName=createElement("h1");
    this.greet=createElement("h2");
    this.reset=createButton("reset");

}
display(){
    this.input.position(windowWidth/2-40,windowHeight/2);
    this.button.position(windowWidth/2-5,windowHeight/2+50);
    this.gameName.html("FRUIT CATCHER");
    this.gameName.position(windowWidth/2-220,windowHeight/2-400)
    this.reset.position(windowWidth/2+700,windowHeight/2-400)
    this.reset.style('background','red')
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
        playerCount=playerCount+1
        player.index=playerCount;
        player.writeName();
        player.updateCount(playerCount);
        
        this.greet.html("HELLO"    +   player.name);
        this.greet.position(windowWidth/2-200,windowHeight/2);
        this.greet.style('color','black');
        this.greet.style('font-size','60px')


    })
    this.reset.mousePressed(()=>{
        player.updateCount(0);
        location.reload();
    })
}
}