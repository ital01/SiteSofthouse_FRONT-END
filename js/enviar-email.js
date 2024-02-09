document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function () {
      submitButton.disabled = true;
  
      var form = new FormData(document.getElementById('contatoForm'));
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '', true);
      xhr.onload = function () {
        if (xhr.status === 200) {
          try {
            var resultado = JSON.parse(xhr.responseText);
            var resposta = document.getElementById('resposta');
            resposta.innerHTML = resultado.message;
            resposta.className = 'text-center alert';
  
            if (resultado.status === 'success') {
              resposta.classList.add('alert-success');
              document.getElementById('contatoForm').reset();
  
              setTimeout(function () {
                resposta.innerHTML = '';
                resposta.classList.remove('alert-success');
              }, 3500);
              grecaptcha.reset();
            } else {
              resposta.classList.add('alert-danger');
              setTimeout(function () {
                resposta.innerHTML = '';
                resposta.classList.remove('alert-danger');
              }, 3500);
              grecaptcha.reset();
            }
  
          } catch (e) {
            console.error('Erro ao analisar a resposta JSON:', e);
            resposta.innerHTML = 'Erro durante o processamento da resposta do servidor.';
            resposta.classList.add('alert-danger');
            document.getElementById('contatoForm').reset();
            grecaptcha.reset();
          }
        } else {
          console.error('Erro durante a requisição AJAX. Status:', xhr.status);
          var resposta = document.getElementById('resposta');
          resposta.innerHTML = 'Erro durante a requisição AJAX. Atualize a pagina';
          resposta.classList.add('alert-danger');
          document.getElementById('contatoForm').reset();
          grecaptcha.reset();
        }
  
        submitButton.disabled = false;
      };
  
      xhr.onerror = function () {
        console.error('Erro durante a requisição AJAX. Status:', xhr.status);
        var resposta = document.getElementById('resposta');
        resposta.innerHTML = 'Erro durante a requisição AJAX. Atualize a pagina';
        resposta.classList.add('alert-danger');
        document.getElementById('contatoForm').reset();
        grecaptcha.reset();
  
        submitButton.disabled = false;
      };
  
      xhr.send(form);
    });
  });