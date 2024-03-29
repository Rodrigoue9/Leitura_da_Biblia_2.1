function atualizarMensagemDiaria() {
    const agora = new Date();

    const leituras = {
           // ... Mês de Janeiro

            // ... Gênesis
       "01-01": { livro: "Gênesis", capitulo: "1-3" },
       "01-02": { livro: "Gênesis", capitulo: "4-7" },
       "01-03": { livro: "Gênesis", capitulo: "8-11" },
       "01-04": { livro: "Gênesis", capitulo: "12-15" },
       "01-05": { livro: "Gênesis", capitulo: "16-18" },
       "01-06": { livro: "Gênesis", capitulo: "19-22" },
       "01-07": { livro: "Gênesis", capitulo: "23-24" },
       "01-08": { livro: "Gênesis", capitulo: "25-27" },
       "01-09": { livro: "Gênesis", capitulo: "28-30" },
       "01-10": { livro: "Gênesis", capitulo: "31-32" },
       "01-11": { livro: "Gênesis", capitulo: "33-34" },
       "01-12": { livro: "Gênesis", capitulo: "35-37" },
       "01-13": { livro: "Gênesis", capitulo: "38-40" },
       "01-14": { livro: "Gênesis", capitulo: "41-42" },
       "01-15": { livro: "Gênesis", capitulo: "43-45" },
       "01-16": { livro: "Gênesis", capitulo: "46-48" },
       "01-17": { livro: "Gênesis", capitulo: "49-50" },
        
            // ... Exodo
           "01-18": { livro: "Êxodo", capitulo: "1-4" },
           "01-19": { livro: "Êxodo", capitulo: "5-7" },
           "01-20": { livro: "Êxodo", capitulo: "8-10" },
           "01-21": { livro: "Êxodo", capitulo: "11-13" },
           "01-22": { livro: "Êxodo", capitulo: "14-15" },
           "01-23": { livro: "Êxodo", capitulo: "16-18" },
           "01-24": { livro: "Êxodo", capitulo: "19-21" },
           "01-25": { livro: "Êxodo", capitulo: "22-25" },
           "01-26": { livro: "Êxodo", capitulo: "26-28" },
           "01-27": { livro: "Êxodo", capitulo: "29-30" },
           "01-28": { livro: "Êxodo", capitulo: "31-33" },
           "01-29": { livro: "Êxodo", capitulo: "34-35" },
           "01-30": { livro: "Êxodo", capitulo: "36-38" },
           "01-31": { livro: "Êxodo", capitulo: "39-40" },
    
                    // ... Mês de Janeiro
    
             // ... Mês de fevereiro
    
                // ... Levítico
           "02-01": { livro: "Levítico", capitulo: "1-4" },
           "02-02": { livro: "Levítico", capitulo: "5-7" },
           "02-03": { livro: "Levítico", capitulo: "8-10" },
           "02-04": { livro: "Levítico", capitulo: "11-13" },
           "02-05": { livro: "Levítico", capitulo: "14-15" },
           "02-06": { livro: "Levítico", capitulo: "16-18" },
           "02-07": { livro: "Levítico", capitulo: "19-21" },
           "02-08": { livro: "Levítico", capitulo: "24-25" },
           "02-09": { livro: "Levítico", capitulo: "26-27" },
            // ... Números
    
          "02-10": { livro: "Números", capitulo: "1-3" },
          "02-11": { livro: "Números", capitulo: "4-6" },
          "02-12": { livro: "Números", capitulo: "7-9" },
          "02-13": { livro: "Números", capitulo: "10-12" },
          "02-14": { livro: "Números", capitulo: "13-15" },
          "02-15": { livro: "Números", capitulo: "16-18" },
          "02-16": { livro: "Números", capitulo: "19-21" },
          "02-17": { livro: "Números", capitulo: "22-24" },
          "02-18": { livro: "Números", capitulo: "25-27" },
          "02-19": { livro: "Números", capitulo: "28-30" },
          "02-20": { livro: "Números", capitulo: "31-32" },
          "02-21": { livro: "Números", capitulo: "33-36" },
        
            // ... Deuteronômio
           
           "02-22": { livro: "Deuteronômio", capitulo: "1-2" },
           "02-23": { livro: "Deuteronômio", capitulo: "3-4" },
           "02-24": { livro: "Deuteronômio", capitulo: "5-7" },
           "02-25": { livro: "Deuteronômio", capitulo: "8-10" },
           "02-26": { livro: "Deuteronômio", capitulo: "11-13" },
           "02-27": { livro: "Deuteronômio", capitulo: "14-16" },
           "02-28": { livro: "Deuteronômio", capitulo: "17-19" },
           "02-29": { livro: "Deuteronômio", capitulo: "20-22" },

    
                    // ... Fevereiro

                    // ...  Março

                    "03-01": { livro: "Deuteronômio", capitulo: "23-26" },
                    "03-02": { livro: "Deuteronômio", capitulo: "27-28" },
                    "03-03": { livro: "Deuteronômio", capitulo: "29-31" },
                    "03-04": { livro: "Deuteronômio", capitulo: "32" },
                    "03-05": { livro: "Deuteronômio", capitulo: "33-34" },
                    "03-06": { livro: "Josué", capitulo: "1-4" },
                    "03-07": { livro: "Josué", capitulo: "5-7" },
                    "03-08": { livro: "Josué", capitulo: "8-9" },
                    "03-09": { livro: "Josué", capitulo: "10-12" },
                    "03-10": { livro: "Josué", capitulo: "13-15" },
                    "03-11": { livro: "Josué", capitulo: "16-18" },
                    "03-12": { livro: "Josué", capitulo: "19-21" },
                    "03-13": { livro: "Josué", capitulo: "22-24" },
                    "03-14": { livro: "Juízes", capitulo: "1-2" },
                    "03-15": { livro: "Juízes", capitulo: "3-5" },
                    "03-16": { livro: "Juízes", capitulo: "6-7" },
                    "03-17": { livro: "Juízes", capitulo: "8-9" },
                    "03-18": { livro: "Juízes", capitulo: "10-11" },
                    "03-19": { livro: "Juízes", capitulo: "12-13" },
                    "03-20": { livro: "Juízes", capitulo: "14-16" },
                    "03-21": { livro: "Juízes", capitulo: "17-19" },
                    "03-22": { livro: "Juízes", capitulo: "20-21" },
                    "03-23": { livro: "Rute", capitulo: "1-4" },
                    "03-24": { livro: "1 Samuel", capitulo: "1-2" },
                    "03-25": { livro: "1 Samuel", capitulo: "3-6" },
                    "03-26": { livro: "1 Samuel", capitulo: "7-9" },
                    "03-27": { livro: "1 Samuel", capitulo: "10-12" },
                    "03-28": { livro: "1 Samuel", capitulo: "13-14" },
                    "03-29": { livro: "1 Samuel", capitulo: "15-16" },
                    "03-30": { livro: "1 Samuel", capitulo: "17-18" },
                    "03-31": { livro: "1 Samuel", capitulo: "19-21" },






                    // ...  Março
        // Adicione mais leituras conforme necessário
    };
    const formatoData = (data) => {
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const dia = data.getDate().toString().padStart(2, '0');
        return `${mes}-${dia}`;
    };

    const dataAtual = formatoData(agora);
    const mensagemDiariaElemento = document.getElementById('mensagemDiaria');
    const leituraElemento = document.getElementById('Leitura');

    if (leituras[dataAtual]) {
        const leituraDoDia = leituras[dataAtual];
        mensagemDiariaElemento.innerText = leituraDoDia.livro;
        leituraElemento.innerText = leituraDoDia.capitulo;
    } else {
        mensagemDiariaElemento.innerText = "";
    }
}



var intervaloDeAtualizacao = 1000;
 setInterval(atualizarMensagemDiaria, intervaloDeAtualizacao);
