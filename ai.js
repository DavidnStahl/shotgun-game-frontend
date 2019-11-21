class Ai {
    constructor() {
        this.numberOfShots = 0;
    }
    addImg(action)
    {
        if(!document.getElementById("ImgComputer"))
        {
         
         let elem = document.createElement("img");
         elem.setAttribute("src", "pictures/" + action + ".gif");
         elem.setAttribute("alt", action);
         elem.setAttribute("id", "ImgComputer");
         
         let div = document.getElementById("actionComputer");
         div.appendChild(elem);
         
        }
        else
        {
            
           let div = document.getElementById("actionComputer");
           div.removeChild(document.getElementById("ImgComputer"));         
           let elem = document.createElement("img");
           elem.setAttribute("src", "pictures/" + action + ".gif");
           elem.setAttribute("alt", action);
           elem.setAttribute("id", "ImgComputer");
           let div1 = document.getElementById("actionComputer");
           div1.appendChild(elem);
           
           
        } 
    }
    shotgun()
    {
        this.addImg("shotgun!!!");

    }

    block()
    {
        this.addImg("block!!!");
    }
    shoot()
    {
        this.addImg("shooting!!!");
    }

    addShots()
    {
       this.addImg("loading...");
        
     
        this.numberOfShots ++;
        document.getElementById("numberOfshootsCounter-ai").innerHTML = "Shoots " + ai.numberOfShots;
    }

    removeShots()
    {
        this.numberOfShots --;
        document.getElementById("numberOfshootsCounter-ai").innerHTML = "Shoots " + ai.numberOfShots;
    }
    checkNumberOfShots()
    {
        return this.numberOfShots;
    }
}