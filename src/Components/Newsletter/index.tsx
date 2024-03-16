import vaso from '../../assets/vaso.png';
import { useEffect, useState } from 'react';
import Modal from '../Modal';
import * as Style from './NewsletterStyle'

export default function Newsletter() {
    const [emailCadastrado, setEmailCadastrado] = useState<string>('');
    const [modalMensagem, setModalMensagem] = useState<boolean>(false);

    function assinaturaRealizada(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        setModalMensagem(true);
    }

    useEffect(() => {
        if (modalMensagem) {
            const timer = setTimeout(() => {
                setModalMensagem(false);
            }, 5000)

            return () => clearTimeout(timer)
        }
    }, [modalMensagem]);

    return (
        <Style.ContainerNewsletter>
            <Style.ContainerInfos>
                <h2 className="containerInfos__titulo">Sua casa com as <br/>
                    <strong className="containerInfos__titulo__planta">melhores plantas</strong>
                </h2>
                <p className="containerInfos__texto">Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
                <form onSubmit={assinaturaRealizada}>
                    <input type="email" placeholder='Insira seu e-mail' className="containerInfos__input" required onChange={e => setEmailCadastrado(e.target.value)}/>
                    <button className="containerInfos__botao">Assinar newsletter</button>
                </form>
                <Modal 
                    emailCadastrado={emailCadastrado}
                    modalMensagem={modalMensagem}
                />
            </Style.ContainerInfos>
            <Style.ContainerVisual>
                <img src={vaso} alt="Vaso com uma planta verde" className="containerVisual__img"/>
            </Style.ContainerVisual>
        </Style.ContainerNewsletter>
    )
}