function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = ``
    if(hora >=0 && hora < 12){
        //BOM DIA!
        msg.innerHTML += ' Bom dia!'
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        msg.innerHTML += ' Boa tarde!'
        
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //BOA TARDE!
        msg.innerHTML += ' Boa tarde!'
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }

    var timeDisplay = document.getElementById("time");

    function refreshTime() {
    var dateString = new Date().toLocaleString("pt-br", {timeZone: "America/Sao_Paulo"});
    var formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = formattedString;
    }

    setInterval(refreshTime, 1000);

}