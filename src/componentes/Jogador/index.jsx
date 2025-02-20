import "./Jogador.css";

function Jogador(props, corDeFundo) {
  return (
    <div className="jogador">
      <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
        <img src={props.imagem} alt={props.nome} />
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  )
}

export default Jogador
