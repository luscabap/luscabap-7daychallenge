import styles from './Newsletter.module.scss';
import vaso from '../../assets/vaso.png';
import { useEffect, useState } from 'react';
import Modal from '../Modal';

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
        <main className={styles.container}>
            <div className={styles.container__infos}>
                <h2 className={styles.container__infos__titulo}>Sua casa com as <br/>
                    <strong className={styles.container__infos__titulo__plantas}>melhores plantas</strong>
                </h2>
                <p className={styles.container__infos__texto}>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
                <form onSubmit={assinaturaRealizada}>
                    <input type="email" placeholder='Insira seu e-mail' className={styles.container__infos__input} required onChange={e => setEmailCadastrado(e.target.value)}/>
                    <button className={styles.container__infos__button}>Assinar newsletter</button>
                </form>
                <Modal 
                    emailCadastrado={emailCadastrado}
                    modalMensagem={modalMensagem}
                />
            </div>
            <div className={styles.container__visual}>
                <img src={vaso} alt="Vaso com uma planta verde" className={styles.container__visual__img}/>
            </div>
        </main>
    )
}