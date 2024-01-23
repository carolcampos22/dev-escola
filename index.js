const cursos = [
    {
        curso: "HTML e CSS", 
        descricao: "Aprenda a estruturar e estilizar uma página web.",
        duracao: "1 mês",
        valor: 500
    },
    {
        curso: "JavaScript",
        descricao: "Aprenda uma das linguagens de programação mais utilizadas no desenvolvimento web.",
        duracao: "2 meses",
        valor: 900
    },
    {   curso:  "APIs REST",
        descricao: "Aprenda APIs REST do básico ao avançado.",
        duracao: "6 meses",
        valor: 2000

    }

    ]

const turmas = [
    {
        turma: "Hipátia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numeroDeAlunos: 150,
        periodo: "noturno",
        concluida: false
    },
    {
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numeroDeAlunos: 200,
        periodo: "integral",
        concluida: false
    },
    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroDeAlunos: 180,
        periodo: "noturno",
        concluida: true
    },
    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numeroDeAlunos: 80,
        periodo: "integral",
        concluida: false
    },
    {
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numeroDeAlunos: 200,
        periodo: "noturno",
        concluida: true
    },
    {
        turma: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroDeAlunos: 100,
        periodo: "integral",
        concluida: true
    },
    {
        turma: "Elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numeroDeAlunos: 200,
        periodo: "noturno",
        concluida: true
    },
    {
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numeroDeAlunos: 90,
        periodo: "integral",
        concluida: false
    }
]
const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: 900,
        nParcelas: 9,
        desconto: false,
        parcelas: 100
    },
    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: 2000,
        nParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: 500,
        nParcelas: 1,
        desconto: true,
        parcelas: 400
    }
]

const mensagensCursos = document.getElementById("mensagens")
const buscarCurso = () => {
    const inputNomeDoCurso = document.getElementById("input-curso-procurado").value
    document.getElementById("input-curso-procurado").value = ""
    
    const cursoFiltrado = cursos.filter(cadaCurso => {
        if(cadaCurso.curso.toLowerCase().includes(inputNomeDoCurso.toLowerCase())){
            
            return cadaCurso.curso 
        }
    })    
    
    return (cursoFiltrado.length) > 0 ? cursoFiltrado[0] : mensagensCursos.innerHTML = "Curso não encontrado!"

    }

////////////////////////////////////////////////////////////////////////

const carrinhoCursos = []

const adicionarCarrinho = () => {
    
    let cursoEscolhido = buscarCurso()
    

    if(cursoEscolhido.curso !== undefined){
        carrinhoCursos.push(cursoEscolhido.valor)
    }
    
    mensagensCursos.innerHTML = cursoEscolhido.curso
    if(cursoEscolhido.curso === undefined){
        mensagensCursos.innerHTML = "Curso não encontrado!"
    }
    
    return carrinhoCursos
    
}



const parcelarCurso = () => {
    const parcela = document.getElementById("parcelas").value
    document.getElementById("parcelas").value = ""

    
//somatória dos valores dos cursos
    let valorTotal = 0
    for(let v = 0; v < carrinhoCursos.length; v++){
        valorTotal += carrinhoCursos[v]
    }
//desconto aplicado conforme a quantidade de cursos adquiridos:
    switch(carrinhoCursos.length){
        case 2:
            valorTotal = valorTotal - valorTotal * 0.1
            break
        case 3:
            valorTotal = valorTotal - valorTotal * 0.15
            break
    }
    
    
//desconto aplicado conforme o número de parcelas:
    if (parcela > 0 && parcela <= 2){
        valorTotal = valorTotal * 0.8 //aplicados 20% de desconto
        mensagensCursos.innerHTML =  (`Valor total do curso: R$${valorTotal} - foi concedido um desconto de 20%;\nValor da parcela: R$${valorTotal/parcela};\nQuantidade de parcelas: ${parcela}`)
    } else {
        mensagensCursos.innerHTML =  (`Valor total do curso: R$${valorTotal} \nValor da parcela: R$${valorTotal/parcela};\nQuantidade de parcelas: ${parcela}`)

    }
    
    
}

///////////////////////////////////////////////////////////////////

const containerDeTurmas = document.getElementById("cards-container")

const buscarTurma = (turmaCard) => {
    const turmasMapeadas = turmaCard.map((item)=>{
        return `<section class="turma-relatorio">
        <p class="titulo-turma">${item.turma}</p>
        <p>Curso: ${item.curso}</p>
        <p>Início: ${item.inicio}</p>
        <p>Término: ${item.termino}</p>
        <p>Número de Alunos: ${item.numeroDeAlunos}</p>
        <p>Período: ${item.periodo}</p>
        <p>Concluído: ${item.concluida}</p>
        </section>`
    })
    return turmasMapeadas
}   



const turmasFiltradas = ()=>{
    const inputNomeDaTurma = document.getElementById("input-buscar-turma").value
    const turmaEncontrada = turmas.filter((item)=>{
        if (item.turma.toLowerCase().includes(inputNomeDaTurma)){
            return item
        }

    })
    return turmaEncontrada ? containerDeTurmas.innerHTML = buscarTurma(turmaEncontrada) : containerDeTurmas.innerHTML = buscarTurma(turmas)
}


////////////////////////////////////////////////////////////////////////
const relatorioDoEstudante = document.getElementById("relatorio-aluno-filtrado")

const buscarEstudante = () => {
    const inputNomeDoEstudante = document.getElementById("nome-do-estudante").value
    document.getElementById("nome-do-estudante").value = ""
    const estudanteEncontrado = estudantes.filter((item) => {
        if(item.estudante.toLocaleLowerCase().includes(inputNomeDoEstudante.toLowerCase())){
            
            return item
            
        }
        
    })
   
    return estudanteEncontrado.length > 0 ? relatorioDoEstudante.innerHTML = `Aluno: ${estudanteEncontrado[0].estudante} <br>Turma: ${estudanteEncontrado[0].turma}; <br>Curso: ${estudanteEncontrado[0].curso}; <br>Valor total: ${estudanteEncontrado[0].valor}; <br>Valor da parcela: R$${estudanteEncontrado[0].parcelas},00; <br>Número de parcelas: ${estudanteEncontrado[0].nParcelas}` : relatorioDoEstudante.innerHTML = "Estudante não encontrado!"
    
}

////////////////////////////////////////////////////////////////////////

const relatorioEstudanteMatriculado = document.getElementById("matriculado")

function matricular(nomeNovoEstudante, cursoNovoEstudante, turmaNovoEstudante, numeroDeParcelas){
    estudantes.push({nome: nomeNovoEstudante, turma: turmaNovoEstudante, curso: cursoNovoEstudante, nParcelas: numeroDeParcelas})
    return relatorioEstudanteMatriculado.innerHTML = (`<h2>Aluno Matriculado!</h2> <br> <b>Nome:</b> ${estudantes[estudantes.length-1].nome} <br> <b>Curso:</b> ${estudantes[estudantes.length-1].curso} <br> <b>Turma:</b> ${estudantes[estudantes.length-1].turma}` )
    
}

//console.log(matricular('Carolina', 'Full Stack', 'Ozemela', 10))


const matricularNovoEstudante = () => {
    const novoEstudanteNome = document.getElementById("nome-novo-estudante").value
    const novoEstudanteCurso = document.getElementById("curso-novo-estudante").value
    const novoEstudanteTurma = document.getElementById("turma-novo-estudante").value
    const novoEstudanteParcelas = document.getElementById("num-de-parcelas").value
    document.getElementById("nome-novo-estudante").value = ""
    document.getElementById("curso-novo-estudante").value = ""
    document.getElementById("turma-novo-estudante").value = ""
    document.getElementById("num-de-parcelas").value = ""
    return  matricular(novoEstudanteNome, novoEstudanteCurso, novoEstudanteTurma)
}

function relatorioEstudante (nome, callback) {
    const estudanteEscolhido = buscarEstudante(nome)
    callback(estudanteEscolhido)
    let relatorio =  `Aluno: ${estudanteEscolhido.estudante} <br>Turma: ${estudanteEscolhido.turma} <br>Curso: ${estudanteEscolhido.curso} <br> Valor total: ${estudanteEscolhido.valor} <br> Valor da parcela: ${estudanteEscolhido.parcelas}<br> Número de parcelas: ${estudanteEscolhido.nParcelas} <br>`
    return relatorio   

}

//console.log(relatorioEstudante("Lashana Lynch", buscarEstudante))








