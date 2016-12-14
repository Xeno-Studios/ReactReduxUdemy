import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCwVr_w7x4Fqy8BhmW9qfMOM0WMb7xpNoo';

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar / >
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));