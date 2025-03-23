import './botao.css'

<<<<<<< HEAD
const Botao = (props) => {
    return (<button className='botao'>
        {props.children}
    </button>)
=======
const Botao = ({texto}) => {
    return <button className="botao">
        {texto}
    </button>
>>>>>>> 88bb814c82211707844f83e6a06622bdff87812a
}

export default Botao