const interval = setInterval(() => {

    const header = document.querySelector("._1QUKR");

    if(header){
        clearInterval(interval)
    }

    const button = document.createElement("button");
    button.textContent = "2x";
    //Atribuindo uma classe ao butão
    button.classList.add("twoSpeedButton");

    // Acelerando o áudio 
    button.addEventListener("click", () => {
        const audios = document.querySelectorAll("audio");
        audios.forEach((audio)=>{
            audio.playbackRate = 2;
        });
    });

    header.appendChild(button);

}, 1000);




