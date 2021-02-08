import React from 'react';
import Header from './Header';
import Todolist from './Todolist';

const App = () => {
    return (
        <div className="container jumbotron">
            <div className="ml-auto mr-auto col-md-6 col-sm-8">
                <Header />
                <Todolist />
            </div>
        </div>
    );
};

export default App;