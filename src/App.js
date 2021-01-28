import React,{useState} from "react";
import "./App.css"
import Perfil from "./Perfil/index"
import Aside from "./Aside/index"
import ExpProfissional from "./ExpProfissional/Index"


function App() {

  const fakeAPI =  
    {
      nome: 'Andresa Lima',
      ocupacao: 'ANALISTA DE QUALIDADE',
      resumo: '12 anos trabalhando na área da tecnologia.',
      perfilProfissional: 'Estudante de Engenharia da produção, fazendo curso de programação para se tornar uma desenvolvedora.',
      contatos: [
        {
          id: 1,
          tipo: 'telefone',
          contato: '19 982100221'
        },
        {
          id: 2,
          tipo: 'email',
          contato: 'desagiselelima@gmail.com'
        }
      ],
      educacao: [
        {
          id: 1,
          instituicao: 'Unifram',
          curso: 'Engenharia de Produção'
        },
        {
          id: 2,
          instituicao: 'Tech Talents',
          curso: 'React - fron end'
        }
      ],
      experiencia: [
        {
          id: 1,
          cargo: 'QA',
          periodo: 'Agosto 2015 - Atualmente',
          empresa: 'Elsys',
          local: 'Valinhos',
          conteudo: 'Caçadorora de bugs'
        },
        {
          id: 2,
          cargo: 'Lider',
          periodo: 'Marco 2012 - Agosto 2015',
          empresa: 'Elsys',
          local: 'Valinhos',
          conteudo: 'Gerenciava tarefas'
       }
      ]
  }
  
  const [resposta] = useState(fakeAPI);

  return (
    <main>

      <Perfil resposta={resposta} />
      <Aside resposta={resposta} />
      <ExpProfissional resposta={resposta} />

    </main>
  );
}

export default App;