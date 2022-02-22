function ComputerPlay(){
    let Random=Math.floor(Math.random() * 3);
    if(Random==0)
        return "rock"
        else
            if(Random==1)
                return "paper"
                else
                    return "scissors"
}
function PlayRound(Player, AI){
    let PlayerIns=PLayer.toLowerCase();
    switch(PlayerIns){
        case "rock":{
            if(AI=="paper")
                return "Perdiste, papel gana piedra";
                else if(AI=="scissors")
                    return "Ganaste, piedra le gana a tijera";
                    else
                        return "Empate";
            break;
        }
        case "paper":{
            if(AI=="paper")
                return "Empate";
                else if(AI=="scissors")
                    return "Perdiste, tijeras le gana a papel";
                    else
                        return "Ganaste, papel le gana a piedra";
            break;
        }
        case "scissors":{
            if(AI=="paper")
                return "Ganaste, tijera gana papel";
                else if(AI=="scissors")
                    return "Empate";
                    else
                        return "Perdiste, piedra le gana a tijera";
            break;
        }
    }
}