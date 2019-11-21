
const newplayer = new NewPlayer();
const ai = new Ai();
const gamelogic = new GameLogic();

function startGame()
{
    
    if(!document.getElementById("ImgPlayer"))
    {
        
    }
    else 
    {
        let div = document.getElementById("actionPlayer");
        div.removeChild(document.getElementById("ImgPlayer"));
    }
    

    if(!document.getElementById("ImgComputer"))
    {
        
    }
    else 
    {
        let div = document.getElementById("actionComputer");
        div.removeChild(document.getElementById("ImgComputer"));
    }
   
   resetShoots();
   alert("Game have now started! you can now use block and load actions");
   makeButtonsAvaible();

}
function shotgun()
{
    let result = gamelogic.checkActions(gamelogic.aiPlay(ai.numberOfShots),4)
    if(result == "ai" || result == "player" || result == "draw")
    {
        gameEnd(result);
    }
    else if(result == null)
    {
        checkAvaibleActionsForPlayer();
    }
}
function shoot()
{
    let result = gamelogic.checkActions(gamelogic.aiPlay(ai.numberOfShots),3)
    if(result == "ai" || result == "player" || result == "draw")
    {
        gameEnd(result);
    }
    else if(result == null)
    {
        checkAvaibleActionsForPlayer();
    }
}
function block()
{
    let result = gamelogic.checkActions(gamelogic.aiPlay(ai.numberOfShots),2)
    if(result == "ai" || result == "player" || result == "draw")
    {
        gameEnd(result);
    }
    else if(result == null)
    {
        checkAvaibleActionsForPlayer();
    }
}
    
function load()
{
    let result = gamelogic.checkActions(gamelogic.aiPlay(ai.numberOfShots),1)
    if(result == "ai" || result == "player" || result == "draw")
    {
        gameEnd(result);
    }
    else if(result == null)
    {
        checkAvaibleActionsForPlayer();
    }
    
}

function resetShoots()
{
   ai.numberOfShots = 0;
   newplayer.numberOfShots = 0;
   document.getElementById("numberOfshootsCounter-player").innerHTML = "Shoots 0";
   document.getElementById("numberOfshootsCounter-ai").innerHTML = "Shoots 0";
   
}


function gameEnd(winner)
{
   document.getElementById("blockbutton").disabled = true;
   document.getElementById("loadbutton").disabled = true;
   document.getElementById("shootbutton").disabled = true;
   document.getElementById("shotgunbutton").disabled = true;
   setTimeout
   if(winner != "draw")
   {
    setTimeout(function(){ alert("The game ended with " + winner + " winning the game!!"); }, 3000);
   }
   else
   {
    setTimeout(function(){ alert("The game ended with a draw!!"); }, 3000);
    
   }
   
   
}

function makeButtonsAvaible()
{
   document.getElementById("blockbutton").disabled = false;
   document.getElementById("loadbutton").disabled = false;
}

function checkAvaibleActionsForPlayer()
{
    if(newplayer.checkNumberOfShots() > 0 && newplayer.checkNumberOfShots() < 3)
    {
        document.getElementById("shootbutton").disabled = false;
    }
    else if(newplayer.checkNumberOfShots() == 0)
    {
        document.getElementById("shootbutton").disabled = true;
    }
    else if(newplayer.checkNumberOfShots() > 2)
    {
        document.getElementById("shotgunbutton").disabled = false;
    }
}


