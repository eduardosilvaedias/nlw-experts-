const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?", 
      respostas: [
        "var",
        "int",
        "string",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador usado para atribuição de valores em JavaScript?",
      respostas: [
        "=",
        "==",
        "===",
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "/* */",
        "//",
        "<>",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Em JavaScript, qual dos seguintes é um tipo de dado não primitivo?",
      respostas: [
        "string",
        "number",
        "object",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador lógico AND em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!",
      ],
      correta: 0
    },
    {
      pergunta: "Como você converte uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "toInt()",
        "stringToInt()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "delete()",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "func",
        "function",
        "def",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão `3 + 2 + '7'` em JavaScript?",
      respostas: [
        "12",
        "'57'",
        "57",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostratTotal = document.querySelector('#acertos span')
  mostratTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição 
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    quizItem.querySelector('dl').appendChild(dt)
    dt.querySelector('input').onchange =  (event) => {
      const estaCorreta = event.target.value == item.correta //true 
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostratTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      
    
    } 
  
  
  
  
  }
  
  quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }