document.addEventListener('DOMContentLoaded', function () {
  var submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', function () {
    submitButton.disabled = true;

    var form = new FormData(document.getElementById('contatoForm'));
    var resposta = document.getElementById('resposta');
    resposta.innerHTML = 'Enviando...';
    resposta.className = 'text-center alert alert-info fs-5_5';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '', true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        try {
          var resultado = JSON.parse(xhr.responseText);
          resposta.innerHTML = resultado.message;
          resposta.className = 'text-center alert fs-5_5';

          if (resultado.status === 'success') {
            resposta.classList.remove('alert-info');
            resposta.classList.add('alert-success');
            resposta.classList.add('text-center');
            document.getElementById('contatoForm').reset();

            setTimeout(function () {
              resposta.innerHTML = '';
              resposta.classList.remove('alert-success');
              resposta.classList.add('text-center');
            }, 4000);
            grecaptcha.reset();
          } else {
            resposta.classList.remove('alert-info');
            resposta.classList.add('alert-danger');
            resposta.classList.add('text-center');
            setTimeout(function () {
              resposta.innerHTML = '';
              resposta.classList.remove('alert-danger');
            }, 4000);
            grecaptcha.reset();
          }

        } catch (e) {
          console.error('Erro ao analisar a resposta JSON:', e);
          resposta.innerHTML = 'Erro durante o processamento da resposta do servidor.';
          resposta.classList.remove('alert-info');
          resposta.classList.add('alert-danger');
          resposta.classList.add('text-center');

          document.getElementById('contatoForm').reset();
          grecaptcha.reset();
        }
      } else {
        console.error('Erro durante a requisição AJAX. Status:', xhr.status);
        resposta.innerHTML = 'Erro durante a requisição AJAX. <br> Atualize a página e tente novamente. <br> Se o erro persistir, entre em contato com nosso suporte.';
        resposta.classList.remove('alert-info');
        resposta.classList.add('alert-danger');
        resposta.classList.add('text-center');
        document.getElementById('contatoForm').reset();
        grecaptcha.reset();
        setTimeout(function () {
          resposta.innerHTML = '';
          resposta.classList.remove('alert-danger');
        }, 5000);
      }

      submitButton.disabled = false;
    };

    xhr.onerror = function () {
      console.error('Erro durante a requisição AJAX. Status:', xhr.status);
      resposta.innerHTML = 'Erro durante a requisição AJAX. <br> Atualize a página e tente novamente. <br> Se o erro persistir, entre em contato com nosso suporte.';
      resposta.classList.remove('alert-info');
      resposta.classList.add('alert-danger');
      resposta.classList.add('text-center');
      document.getElementById('contatoForm').reset();
      grecaptcha.reset();
      setTimeout(function () {
        resposta.innerHTML = '';
        resposta.classList.remove('alert-danger');
      }, 5000);

      submitButton.disabled = false;
    };

    xhr.send(form);
  });
});
