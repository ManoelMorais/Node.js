// passo 3 (criação) 

// aqui ocorre a função que queremos executar

const soma = (req, res) => {
    const soma = 49 + 34;

    res.send({ soma: soma});
}


//exportamos ela para o passo 2
module.exports = { soma };
