import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home/Home';
import MainLayout from './Components/layouts/mainLayout';
import News from './Components/newsComponent/News';
import SinglePost2 from './Components/newsComponent/singleNews';
import Recommend from './Components/recommend/recommend';
import SingleMovie from './Components/common/moviePoster/singleMovie';
import Login from './Components/Login_Register/Login';
import Register from './Components/Login_Register/Register';

const App = () => {

    return (
        <React.Fragment>
            <BrowserRouter>
                <MainLayout>
                    <Switch>
                        <Route path="/singleMovie" component={SingleMovie}/>
                        <Route path="/" exact render={()=>(<Home/>)} />
                        <Route path="/recommend" render={()=>(<Recommend/>)}/>
                        <Route path="/news/singleNews" render={()=> (<SinglePost2/>)}/>
                        <Route path="/news" render={()=>(<News/>)}/>
                        <Route path="/login" render={()=>(<Login/>)}/>
                        <Route path="/register" render={()=>(<Register/>)}/>
                        
                       


                    </Switch>

                </MainLayout>
            </BrowserRouter>

        </React.Fragment>
    );
}

export default App;