import './campo-texto.css'

<<<<<<< HEAD
const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
=======
const CampoTexto = ({ label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (<div className='campo-texto'>
        <label>{label}</label>
        <input value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
    </div>)
>>>>>>> 88bb814c82211707844f83e6a06622bdff87812a
}

export default CampoTexto