import './Banner.css'

function Banner() {
    //JSX, como o react trabalha com a parte visual lendo o código abaixo e transformando elementos no DOM, parece html mas não é
    return(
        <header className="banner">
            <img src="/imagens/banner.png" alt="O banner principal da página Organo"/>
        </header>
    )
}

export default Banner