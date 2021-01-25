// Minha chave da API
var apikey = {
    key: '89a53153-73ff-4d54-896d-96866f6d064f'
}

// GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='
    + apikey.key)
    .then((response) => {
        if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) => {
        //console.log(api);

        // para exibição com bootstrap
        var texto = '';
        for (let i = 0; i < 10; i++) {

            //formatação da data histórica
            var data = new Date(api.data[i].first_historical_data);
            var dataFormatada = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();

            //exibição das informações da API
            texto = texto + `
            
            <div class="media">
                <img src="img/coin.jpg" class="align-self-center mr-3" alt="coin" width="120" height="80">
                <div class="media-body">
                    <h5 class="mt-2">${api.data[i].name}</h5>
                    <p>
                        ${api.data[i].symbol}<br>
                        Primeira data Histórica: ${dataFormatada}
                    </p>
                </div>
            </div>

            `;
            document.getElementById("coins").innerHTML = texto;
        }

    })
    .catch((error) => {
        console.error(error.message);
    });