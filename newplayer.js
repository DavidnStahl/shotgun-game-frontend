class NewPlayer {
    constructor() {
      this.numberOfShots = 0;
    }
    addImg(action)
    {
        if(!document.getElementById("ImgPlayer"))
       {
        
        let elem = document.createElement("img");
        elem.setAttribute("src", "pictures/" + action + ".gif");
        elem.setAttribute("alt", action);
        elem.setAttribute("id", "ImgPlayer");
        
        let div = document.getElementById("actionPlayer");
        div.appendChild(elem);
        let div2 = document.getElementById("playerText");
        setTimeout(function(){ div2.innerHTML = action; }, 100);
        
       }
       else
       {
          
          let div = document.getElementById("actionPlayer");
          div.removeChild(document.getElementById("ImgPlayer"));
          let div2 = document.getElementById("playerText");
          div2.innerHTML = ""; 
          let elem = document.createElement("img");
          elem.setAttribute("src", "pictures/" + action + ".gif");
          elem.setAttribute("alt", action);
          elem.setAttribute("id", "ImgPlayer");
          
          let div1 = document.getElementById("actionPlayer");
          div1.appendChild(elem);
          setTimeout(function(){ div2.innerHTML = action; }, 100);
          
       }
    }
    shotgun()
    {
        this.addImg("shotgun!!!");
    }
    shoot()
    {
        this.addImg("shooting!!!");
    }
    block()
    {
        this.addImg("block!!!")
    }
  
    addShots()
    {

        this.addImg("loading...");
        
       this.numberOfShots += 1;
       document.getElementById("numberOfshootsCounter-player").innerHTML = "Shoots " + newplayer.numberOfShots;
    }

    removeShots()
    {
        this.numberOfShots -= 1;
        document.getElementById("numberOfshootsCounter-player").innerHTML = "Shoots " + newplayer.numberOfShots;
    }
    checkNumberOfShots()
    {
        return this.numberOfShots;
    }

}