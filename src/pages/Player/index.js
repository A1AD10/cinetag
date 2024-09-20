import Banner from 'componentes/Banner'
import styles from './Player.module.css'
import Titulo from 'componentes/Titulo'
import { useParams } from 'react-router-dom'
import NaoEncontrado from 'pages/NaoEncontrado'
import { useEffect, useState } from 'react'

function Player() {
    const [video, setVideo] = useState()
    const parametros = useParams()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/A1AD10/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [])

    if(!video) {
        return <NaoEncontrado/>
    }
    
    return(
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player