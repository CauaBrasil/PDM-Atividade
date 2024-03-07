let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        numeroChamada: 1225
    },
]

console.log(chamadaDeAlunos[0])

function avaliaAluno(materias){
    for(let i=0; i<chamadaDeAlunos.length; i++){
        for(let j=0; j<materias.nota.length; j++){
            if(materias.nota >= 6 && materias.presenca >= 75){
                console.log("APROVADO!!")
                console.log("NOME: " + materias.nome)
                console.log("NOTA: " + materias.nota)
                console.log("PRESENÇA: " + materias.presenca)
                return
            }
            console.log("REPROVADO!!")
            console.log("NOME: " + materias.nome)
            console.log("NOTA: " + materias.nota)
            console.log("PRESENÇA: " + materias.presenca)
        }
    }
}

function maioresNotas(materias){
    var valor = 0;
    for(let k=0; k<materias.length; k++){
        if(materias.notas[k] > valor){
            valor = materias.notas[k];
        }
    }
    var segundo = 0;
    for(let l=0; l<materias.length; l++){
        if(materias.notas[l] > segundo && materias.notas[l] != valor){
           segundo = materias.notas[l];
        }
    }
    var terceiro = 0;
    for(let m=0; m<materias.length; m++){
        if(materias.notas[m] > terceiro && materias.notas[m] != valor){
           terceiro = materias.notas[m];
        }
    }
    console.log(valor)
    console.log(seguundo)
    console.log(terceiro)
}

function menoresNotas(nome){
    var menor = 0;
    for(let n=0; n<materias.length; n++){
        if(materias.notas[n] < menor){
            valor = materias.notas[n];
        }
    }
    var menos = 0;
    for(let o=0; o<materias.length; o++){
        if(materias.notas[o] < menos && materias.notas[o] != menor){
           menos = materias.notas[o];
        }
    }
    console.log(menor)
    console.log(menos)
    console.log(terceiro)
}
