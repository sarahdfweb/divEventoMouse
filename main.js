var a =window.document.getElementById('rodape2')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

 function clicar() {
    a.innerText = 'Clicou!'
    a.style.background = 'red'
 }
 function entrar() {
    a.innerText = 'Entrou!'
    a.style.background = 'pink'
 }
 function sair() {
    a.innerText = 'Saiu!'
    a.style.background = 'green'
 
  
   
}



  

