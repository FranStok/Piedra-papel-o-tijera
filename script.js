let PCount=0,AICount=0
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
function TerminarJuego(){
    let Botones=document.querySelectorAll("button");
    Botones.forEach(element => {
        element.style.display="none";
    });
    let textos=document.querySelector(".Textos");
    textos.remove();
    Botones=document.createElement("button");
    Botones.classList.add("Reinicio");
    Botones.textContent="Jugar de nuevo";
    let body=document.querySelector("body");
    body.appendChild(Botones);
    const Reinicio=document.querySelector(".Reinicio");
    Reinicio.addEventListener("click",function(e){
        PCount=AICount=0;
        Reinicio.remove();
        let Botones=document.querySelectorAll(".Opciones");
        Botones.forEach(element => {
            element.style.display="inline";
        });
        textos=document.createElement("div");
        textos.classList.add("Textos");
        let body=document.querySelector("body");
        body.appendChild(textos);
    });
}
function Opcion(eleccion){
    if(eleccion.includes("paper"))
        return "paper"
    if(eleccion.includes("rock"))
        return "rock"
    if(eleccion.includes("scissors"))
        return "scissors"
}
const buttons=document.querySelectorAll(".Opciones");
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
        Juego=PlayRound(Opcion(element.className),ComputerPlay())
        Result.textContent=Juego
        if(Juego.includes("Ganaste"))
            PCount++;
        else
            if(Juego.includes("Perdiste"))
                AICount++;
        if(PCount==3 || AICount==3){
            TerminarJuego();
        }else{
            Result.classList.add("Results");
            Textos.appendChild(Result);
        }
    });
});
