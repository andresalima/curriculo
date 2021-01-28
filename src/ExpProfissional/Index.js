import React from "react";
import Exp from "../Exp"

function ExpProfissional(props) {
  
  const {experiencia} = props.resposta

  return (
    <>
      <div className="experience">
        <h2>Experiência Profissional</h2>
        {experiencia.map(item =>(
          <Exp key={item.id} experience={item}/>
        ))}  
      </div>
    </>
  )
}

export default ExpProfissional;
