import { AiFillCloseCircle } from 'react-icons/ai';
import './colaborador.css'

<<<<<<< HEAD
const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
=======
const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return (<div className="colaborador">
        <AiFillCloseCircle size={25} className="deletar" onClick={aoDeletar} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
>>>>>>> 88bb814c82211707844f83e6a06622bdff87812a
        </div>
    </div>)
}

export default Colaborador