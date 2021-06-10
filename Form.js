class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        }
    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME");
        title.position(displayWidth/2-80,20);
        this.input.position(displayWidth/2-60,displayHeight/2-60);
        this.button.position(displayWidth/2,displayHeight/2-10);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount=playerCount+1
            player.index = playerCount;
            player.update()
            player.updateCount(playerCount);
            this.greeting.html("Hello "+ player.name);
            this.greeting.position(displayWidth/2-30,displayHeight/2-60);
        })
    }

}