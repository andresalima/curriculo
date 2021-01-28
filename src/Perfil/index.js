import React from "react";

function Perfil(props) {
  const { nome, ocupacao, resumo, perfilProfissional } = props.resposta;

  return (
    <>
      <div className="perfil">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQG6_H2PPT-VTQ/profile-displayphoto-shrink_400_400/0/1536621411821?e=1617235200&v=beta&t=MWzMYs_QbDIb1WCjnQ5rShNEFz4D5_wmHI8knwO-1o4" alt="Perfil" />
      </div>
      <div className="biografia">
        <h1>{nome}</h1>
        <div className="ocupacao">{ocupacao}</div>
        <p>{resumo}</p>
      </div>

      <div className="titulo">
        Perfil <br /> Profissional
      </div>

      <div className="perfil-profissional">
        <p>{perfilProfissional}</p>
      </div>
    </>
  );
}

export default Perfil;