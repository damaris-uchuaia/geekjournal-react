import React from 'react'
import './master.css'


function BannerImage(){                //criamos uma função, para exibir uma imagem na tela
    return(
        <div>
            <img className='banner' src="../images/banner.jpg" alt="BannerImage"></img>
        </div>
    )
}

export default BannerImage;