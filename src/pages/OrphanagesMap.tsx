import React from 'react';

// Aula1 - 1:33:45
import {Link} from 'react-router-dom';

// Aula1 - 1:32:46
import mapMarkerImg from '../images/map-marker.svg';

// Aula1 - 1:34:13
import {FiPlus} from 'react-icons/fi';

// Aula1 - 1:34:42 
// import '../styles/pages/orphanages-map.css';
import '../styles/pages/orphanages-map.css';

// Aula1 - 1:40:05
import { Map, TileLayer } from 'react-leaflet';

// Aula1 - 1:44:55
import 'leaflet/dist/leaflet.css';



const OrphanagesMap = () => {
    return(
        <div id='page-map'>
            <aside>
                <header>
                    <img src={mapMarkerImg} alt = 'HappyLogo' />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Freguesia </strong>
                    <span>Jacarepagua</span>
                </footer>
            </aside>

            
            <div></div> 

            <Map
                center={[-22.988325,-43.3584274]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}
            >
                {/* Aula1-1:47:57 usar o mapbox*/}
                <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'/>

                {/*                 
                <TileLayer 
                    url={`https://api.mapbox.com/style/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                    // url={`https://api.mapbox.com/style/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                /> */}

                {/* <TileLayer
                    url={`https://api.mapbox.com/style/v1/mapbox/satelite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}                             
                ></TileLayer> */}

            </Map>

            <Link to='' className='create-orphanage'>
                <FiPlus size={32} color='#fff'/>
            </Link>
        </div>
    );
}


export default OrphanagesMap;