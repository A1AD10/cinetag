import Banner from 'componentes/Banner'
import styles from './Favoritos.module.css'
import Titulo from 'componentes/Titulo'
import Card from 'componentes/Card'
import { useFavoritoContext } from 'contextos/Favoritos'

function Favoritos() {
    const { favoritos } = useFavoritoContext()
    return (
        <>
            <Banner imagem="Favoritos"></Banner>
            <Titulo><h1>Meus Favoritos</h1></Titulo>
            <section className={styles.container}>
                {favoritos.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos