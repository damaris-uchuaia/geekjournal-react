import React from 'react'
import './master.css'

class PhotoEntry extends React.Component{
    render(){
        console.log('this.props.caption =' + this.props.caption)
        console.log('this.props.location =' + this.props.location)
        console.log('this.props.src =' + this.props.src)
        console.log('-------------------------')

        const image_path = '../images/' + this.props.src;  //Com class: passo 01 exibir uma foto usando props e component de class
    

        return <div className='photo-entry-block'>
            <a href={image_path}>                         {/*  Com class: fazer chamada no elemento */}
                <img className='photo-img' src={image_path} alt={image_path}></img>
            </a>

            <h5>{this.props.location}</h5>
            <h6>{this.props.caption}</h6>
        </div>

        //* Versão sem class 01

       /*  return <div className='photo-entry-block'>
            <a href='../images/mario.jpg'>
                <img className='photo-img' src='../images/mario.jpg' alt='../images/mario.jpg'></img>
            </a>

            <h5>The Heart of Geeks</h5>
            <h6>Mario Bros</h6>
        </div> */

    }
}
export default PhotoEntry;