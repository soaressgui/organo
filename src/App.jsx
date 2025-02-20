import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {


  const times = [
    {
      nome: 'Shadow Operatives',
      corPrimaria: '#1E1E2C',
      corSecundaria: '#4A4A5E'
    },
    {
      nome: 'Ghost Division',
      corPrimaria: '#283655',
      corSecundaria: '#5B6D8A'
    },
    {
      nome: 'Crimson Phantoms',
      corPrimaria: '#8E44AD',
      corSecundaria: '#B57FCC'
    },
    {
      nome: 'Nightfall Raiders',
      corPrimaria: '#D35400',
      corSecundaria: '#E98B4D'
    },
    {
      nome: 'Vanguard Wolves',
      corPrimaria: '#3498DB',
      corSecundaria: '#85C1E9'
    },
    {
      nome: 'Blitz Havoc',
      corPrimaria: '#2ECC71',
      corSecundaria: '#7DCEA0'
    },
    {
      nome: 'Iron Breachers',
      corPrimaria: '#C0392B',
      corSecundaria: '#E5736A'
    }
  ]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) =>{
    debugger
    setJogadores([...jogadores, jogador])
  }


  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        jogadores={jogadores.filter(jogador => jogador.time === time.nome)}
        />)}
        <Rodape />
    </div>
  );
}

export default App
