import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import Form from './Components/Form'
import Nav from './Components/Navbar'
import Cards from './Components/Cards'
import Content from './Components/Content';
import Individual from './Components/Individual'
import Card from './Components/play/cards'
import Footer from './Components/Footer'

const App = ()=>{
    
   return( 
            <Switch> 
               <div className='container'>
                 <Nav />
                
                 <Route exact path='/'>
                    <Cards />
                 </Route>

                 <Route path='/form'>
                    <Form />
                 </Route>
                 
                 <Route path='/cards'>
                    <Cards />
                 </Route>          
                 
                 <Route path='/cart'>
                    <Card />
                 </Route> 

                 <Route path='/content'>
                    <Content />
                 </Route>       

                 <Route path='/indi/:id'>
                    <Individual />
                 </Route> 
                
               <Footer />
               
               </div>

            </Switch> 
    )
}

export default App;