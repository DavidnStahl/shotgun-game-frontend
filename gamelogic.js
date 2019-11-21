class GameLogic {
    constructor() {
        this.load = 1;
        this.block = 2;
        this.shoot = 3;
        this.shotgun = 4;
    }
    
    aiPlay(numberOfshots)
    {
       if(numberOfshots > 0 && numberOfshots < 3)
       {
           return this.getRandomNumber(this.load,this.shoot);
       }
       else if(numberOfshots == 0)
       {
        return this.getRandomNumber(this.load,this.block);
       }
       else if(numberOfshots == 3)
       {
        return this.shotgun;
       }
    }
    getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    checkActions(aiAction, playerAction)
    {
      if(aiAction == this.load && playerAction == this.load)
      {
        
          ai.addShots();
          newplayer.addShots();          
          return null;
      }
      else if(aiAction == this.load && playerAction == this.block)
      {
        ai.addShots();
        newplayer.block();
        return null;
      }
      else if(aiAction == this.block && playerAction == this.load)
      {
        ai.block();
        newplayer.addShots();
        return null;
      }
      else if(aiAction == this.block && playerAction == this.block)
      {
        ai.block();
        newplayer.block();
          return null;
      }
      else if(aiAction == this.shoot && playerAction == this.block)
      {
        ai.shoot();
        ai.removeShots();
        newplayer.block();
        return null;
      }
      else if(aiAction == this.block && playerAction == this.shoot)
      {
        ai.block();
        newplayer.shoot();
        newplayer.removeShots();
        return null;
      }
      else if(aiAction == this.shoot && playerAction == this.shoot)
      {
        ai.removeShots();
        ai.shoot();
        newplayer.removeShots();
        newplayer.shoot();
        return null;
      }
      else if(aiAction == this.load && playerAction == this.shoot)
      {
        ai.addShots();
        newplayer.shoot();
        return "player";
      }
      else if(aiAction == this.block && playerAction == this.shotgun)
      {
        ai.block()
        newplayer.shotgun();
          return "player";
      }
      else if(aiAction == this.load && playerAction == this.shotgun)
      {
        ai.addShots();
        newplayer.shotgun();
          return "player";
      }
      else if(aiAction == this.shoot && playerAction == this.shotgun)
      {
        ai.shoot();
        newplayer.shotgun();
          return "player";
      }
      else if(aiAction == this.shoot && playerAction == this.load)
      {
        ai.shoot();
        newplayer.addShots();
        return "ai";
      }
      else if(aiAction == this.shotgun && playerAction == this.load)
      {
        ai.shotgun();
        newplayer.addShots();
          return "ai";
      }
      else if(aiAction == this.shotgun && playerAction == this.block)
      {
        ai.shotgun();
        newplayer.block();
          return "ai";
      }
      else if(aiAction == this.shotgun && playerAction == this.shoot)
      {
        ai.shotgun();
        newplayer.shoot();
          return "ai";
      }     
      else if(aiAction == this.shotgun && playerAction == this.shotgun)
      {
        ai.shotgun();
        newplayer.shotgun();
          return "draw"
      }
    }
}