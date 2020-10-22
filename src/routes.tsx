import React from 'react';

// Aula1 - 1:20:12
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// // Aula1 - 1:24:35
import Landing from '../src/pages/Landing';
// Aula1 - 1:26:00
import OrphanagesMap from './pages/OrphanagesMap';


// function Routes() {
//     return (

//     );
// }


const Routes = () => {
    return(
        <BrowserRouter>
        
            {/* Aula1 1:28:32 */}
            <Switch>
                {/* Aula1 - 1:27:49  exact*/}
                <Route path='/' exact component={Landing}/>
                <Route path='/app' component={OrphanagesMap}/>
            </Switch>

        </BrowserRouter>
    );
}

export default Routes;