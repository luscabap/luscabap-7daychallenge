import Header from '../../Components/Header';
import Newsletter from '../../Components/Newsletter';
import styles from './HomePage.module.scss';
import vector from '../../assets/Vector.png'

export default function HomePage(){
    return (
        <div className={styles.container}>
            <img src={vector} alt="Mancha amarelo de fundo" className={styles.container__img}/>
            <Header />
            <Newsletter />
        </div>

    )
}