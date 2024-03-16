import folha from '../../assets/folha.png';
import * as Style from './HeaderStyle'

export default function Header(){
    return (
        <Style.ContainerHeader>
            <Style.ContainerTitulo>
                <img src={folha} alt="Folha verde" className="containerTitulo__imagem"/>
                <h1 className="containerTitulo__titulo">Casa Verde</h1>
            </Style.ContainerTitulo>
            <Style.ContainerLista>
                <li className="containerLista__item">Como fazer</li>
                <li className="containerLista__separacao">/</li>
                <li className="containerLista__item">Ofertas</li>
                <li className="containerLista__separacao">/</li>
                <li className="containerLista__item">Depoimentos</li>
                <li className="containerLista__separacao">/</li>
                <li className="containerLista__item">Vídeos</li>
                <li className="containerLista__separacao">/</li>
                <li className="containerLista__item">Meu carrinho</li>
            </Style.ContainerLista>
        </Style.ContainerHeader>
    )
}