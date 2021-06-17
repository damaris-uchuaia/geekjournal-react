import React from 'react'
import PhotoEntry from './PhotoEntry'
import entries from './data/photo-entries' //se quero usar um arquivo json já instaciado, preciso importa-lo

class AlbumMaker extends React.Component{
    render(){

        return(
            <div className='flex-container'>

                {
                    entries.itemlist.map((photo)=>{
                        return <PhotoEntry key={photo.src} src={photo.src} location={photo.location} caption={photo.caption} />
                    })
                }

              
                {/*<PhotoEntry src='chess.jpg' location="Jogo de Tabuleiro" caption='Heart of Europe' />
                <PhotoEntry src='fliperama.jpg' location="Jogos Eletrônicos" caption='Heart of Europe' />
                <PhotoEntry src='mario.jpg' location="Videogame" caption='Heart of Europe' />
                <PhotoEntry src='tabuleiro.jpg' location="Jogo de Tabuleiro" caption='Heart of Europe' />  */}
                        
            </div>
        )
    }
}

export default AlbumMaker;