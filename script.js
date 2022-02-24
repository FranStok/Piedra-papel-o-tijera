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
    let PlayerIns=Player.toLowerCase();
    const Element=document.createElement("p");
    const Textos=document.querySelector(".Textos");
    Element.textContent="Elecciones: "+PlayerIns+" "+AI;
    Element.classList.add("Elecciones");
    Textos.appendChild(Element);
    console.log(PlayerIns + " " + AI);
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
/*
function game(){
    let I,PCount=0,AICount=0,P;
    let Result;
    for(I=0;I<5;I++){
        do
            P=window.prompt("Ingrese rock, paper, o scissors");
        while(!Verifica(P))
        Result=PlayRound(P,ComputerPlay());
        console.log(Result);
        if(Result.includes("Ganaste"))
            PCount++;
        else{
            if(Result.includes("Perdiste"))
                AICount++;
            else
                I--;
        }
    }
    if(PCount>AICount)
        console.log("Ganaste el juego");
    else{
        if(PCount<AICount)
            console.log("Perdiste el juego");
        else   
            console.log("Empate");
    }
}*/
let PCount=0,AICount=0
const buttons=document.querySelectorAll("button");
buttons.forEach(element => {
    element.addEventListener("click",function(e){
        let Juego;
        let Eleccion=document.querySelector(".Elecciones");
        if(Eleccion!=null){
            Eleccion.remove();
        }
        let Result=document.querySelector(".Results");
        if(Result!=null){
            Result.remove();
        }
        Result=document.createElement("p");
        const Textos=document.querySelector(".Textos");
        Juego=PlayRound(element.className,ComputerPlay())
        Result.textContent=Juego
        if(Juego.includes("Ganaste"))
            PCount++;
        else
            if(Juego.includes("Perdiste"))
                AICount++;
        if(PCount==3 || AICount==3){
            TerminarJuego();
        }
        Result.classList.add("Results");
        Textos.appendChild(Result);
    });
});
