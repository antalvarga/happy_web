import React from 'react';

// Aula1 - 1:24:00 transferida a importa para Landing.tsx
//import './styles/pages/landing.css';
import '../styles/pages/landing.css';

//    /images/Logo.svg
import logoImg from '../images/Logo.svg';
import { FiArrowRight } from 'react-icons/fi';

// Aula1 1:30:17 
import { Link } from 'react-router-dom';


const Landing = () => {
    return(
        // Aula1 = 1:05:00
        // <div className="App">
        <div id='page-landing'>
        <div className="content-wrapper">
            <img src={logoImg} alt='Imagem do logo' />

            {/* Aula1 - 1:08:52 */}
            <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>

            <div className='location'>
            <strong>Freguesia / Jacarepaguá</strong>
            <span>Rio de Janeiro</span>
            </div>

            {/* Aula1 - 1:30:30 */}
            <Link to='/app' className='enter-app'>
                <FiArrowRight size={26} color='rgba(0,0,0,0.6)'/>
            </Link>
        </div>
        </div>

    );
}



export default Landing;