
function atualizarUltimoAtendimento(){
    const ultimo = localStorage.getItem('ultimoAtendimento');

    if(ultimo !== null){
        document.getElementById('ultimoAtendimento').textContent = ultimo;
    }else{        
        document.getElementById('ultimoAtendimento').textContent = "Aguardando...";
    }
}

atualizarUltimoAtendimento();

setInterval(atualizarUltimoAtendimento, 1000);