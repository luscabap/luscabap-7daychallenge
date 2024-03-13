import styles from './Header.module.scss';
import folha from '../../assets/folha.png'

export default function Header(){
    return (
        <header className={styles.container}>
            <div className={styles.container__titulo}>
                <img src={folha} alt="Folha verde" className={styles.container__titulo__img}/>
                <h1 className={styles.container__titulo__texto}>Casa Verde</h1>
            </div>
            <ul className={styles.container__lista}>
                <li className={styles.container__lista__item}>Como fazer</li>
                <li className={styles.container__lista__item}>/</li>
                <li className={styles.container__lista__item}>Ofertas</li>
                <li className={styles.container__lista__item}>/</li>
                <li className={styles.container__lista__item}>Depoimentos</li>
                <li className={styles.container__lista__item}>/</li>
                <li className={styles.container__lista__item}>Vídeos</li>
                <li className={styles.container__lista__item}>/</li>
                <li className={styles.container__lista__item}>Meu carrinho</li>
            </ul>
        </header>
    )
}