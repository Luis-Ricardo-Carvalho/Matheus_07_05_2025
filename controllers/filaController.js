const minhaFila = new FilaCircular(5);

function addElemento(){
      const novoNome = 
       document.getElementById("txtnovoNome");
      const novoCPF = 
       document.getElementById("txtnovoCPF");
    if(!minhaFila.isFull()){
       const novoAtendimento = new Atendimento(novoNome.value, novoCPF.value);
       // setar valor do objeto atendimento e inserir na fila

       minhaFila.enqueue(novoAtendimento);
       mostrarFila();
       novoNome.value = ""; // limpa
       novoCPF.value = ""; // limpa
       novoNome.focus(); // cursor no input
    } 
    else
        alert("Fila cheia!");     
}// fim addElemento
//-----------------------------------
function mostrarFila(){
   const listaFila = document.getElementById("listFila");
   //listaFila.textContent = minhaFila.toString();
   listaFila.innerHTML = ""; // limpa a lista
   for(let item of minhaFila){
      const listaElemento = document.createElement("li");
      listaElemento.textContent = item;
      listaFila.appendChild(listaElemento);
   }
}

//-----------------------------
function atenderFila(){
   if(!minhaFila.isEmpty()){
      const novoRemove = 
       document.getElementById("mensagem-remocao");
      const atendido = minhaFila.dequeue();
      atendido.finalizar(); // registra hora de saída
      novoRemove.textContent = 
               "Pessoa atendida: "+atendido+
               " Saída:"+atendido.horaSaida+
               " Tempo de espera:"+atendido.tempoDeEspera();
      //   alert(
      //       "Pessoa atendida: "+atendido+
      //       " Saída:"+atendido.horaSaida+
      //       " Tempo de espera:"+atendido.tempoDeEspera()
      //   );
      
      localStorage.setItem('ultimoAtendimento', atendido);

      mostrarFila();
      //salvar no banco texto do navegador
   }
   else
      alert("Fila vazia!");
}
//---------------------------------------
function buscarPorCPF() {
   const cpfProcurado = 
   document.getElementById("txtBuscarCPF");
   const atendimentoEncontrado = [...minhaFila].find
   (atendimento => atendimento.cpf === cpfProcurado.value);

   if (atendimentoEncontrado) {
       alert(
           "CPF encontrado:\n" +atendimentoEncontrado
       );
       cpfProcurado.value = ""; // limpa
   } else {
       alert("Atendimento não encontrado para o CPF informado.");
   }
}
//---------------------------------------
