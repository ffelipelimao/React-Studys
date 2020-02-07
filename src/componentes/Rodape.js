import React from 'react'

const Rodape = props => {

    return (
        <footer className='container-fluid text-center'>
            <a href='#myPage' title='To Top'>
                <span className='glyphicon glyphicon-chevron-up'></span>
            </a>
            <p>Site feito no curso de React <a href='https://github.com/ffelipelimao' title='Visit GitHub'>Meu GitHub</a></p>
        </footer>
    )

}

export default Rodape