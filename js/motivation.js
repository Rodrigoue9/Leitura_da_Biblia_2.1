function atualizarMensagemDiaria() {
    const agora = new Date();

    const leituras = {
        // ... Mês de janeiro
        // ... Mês de fevereiro
        // ... Levítico
        "02-01": "1-4",
        "02-02": "5-7",
        "02-03": "8-10",
        "02-04": "11-13",
        "02-05": "14-15",
        "02-06": "16-18",
        "02-07": "19-21",
        "02-08": "24-25",
        "02-09": "26-27",
        // ... Números
        "02-10": "1-3",
        "02-11": "4-6",
        "02-12": "7-9",
        "02-13": "Eu o darei a vocês. Venha conosco, e nós o trataremos bem, porque Jeová prometeu boas coisas a Israel.",
        "02-14": "Mas não se rebelem contra Jeová e não tenham medo do povo da terra, pois nós os venceremos facilmente. A proteção deles foi removida, e Jeová está conosco. Não tenham medo deles.”",
        "02-15": "Mas, se Jeová fizer algo extraordinário com eles, e a terra se abrir e engolir a eles e tudo o que lhes pertence, e eles descerem vivos à Sepultura, vocês certamente saberão que estes homens trataram a Jeová sem respeito.",
        "02-16": "19-21",
        "02-17": "22-24",
        "02-18": "25-27",
        "02-19": "No começo de cada mês, vocês apresentarão a Jeová como oferta queimada dois novilhos, um carneiro e sete cordeiros sadios de um ano.",
        "02-20": "31-32",
        "02-21": "33-36",
        // ... Deuteronômio
        "02-22": "1-2",
        "02-23": "3-4",
        "02-24": "5-7",
        "02-25": "8-10",
        "02-26": "11-13",
        "02-27": "14-16",
        "02-28": "17-19",
        "02-29": "20-22",
        // Adicione mais leituras conforme necessário
    };

    const formatoData = (data) => {
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const dia = data.getDate().toString().padStart(2, '0');
        return `${mes}-${dia}`;
    };

    const dataAtual = formatoData(agora);
    const motivationElemento = document.getElementById('motivation');

    if (leituras[dataAtual]) {
        const leituraDoDia = leituras[dataAtual];
        motivationElemento.innerText = leituraDoDia;
    } else {
        textMotivationElemento.innerText = "";
    }
}

var intervaloDeAtualizacao = 1000;
setInterval(atualizarMensagemDiaria, intervaloDeAtualizacao);
