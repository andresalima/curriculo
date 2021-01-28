import React, { useState } from "react";
import Contatos from "../Contados"
import Educação from "../Educação"


function Aside(props) {
  const [dados, mostraDados] = useState(false)

  const botao = () => {
    mostraDados(!dados)
  }

  return (
    <>
      <aside>
        <div className="sidebar">
          <h3>Contatos</h3>

          <button onClick={botao}>Mostrar Contatos</button>

          {props.resposta.contatos.map(item => (
            dados && <Contatos key={item.id} sidebar={item} />
          ))}

        </div>

        <div className="sidebar">
          <h3>Educação</h3>
          {props.resposta.educacao.map(item => (
            <Educação key={item.id} sidebar={item} />
          ))}
        </div>
      </aside>
    </>
  )
}

export default Aside;