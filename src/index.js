import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import NewsService from './services/news-service';
import UserService from './services/user-service';
import NewsServiceContext from './components/news-service-context';
import UserServiceContext from './components/user-service-context';
import App from './components/app';
import store from './store';



const newsService = new NewsService();
const userService = new UserService()

ReactDOM.render(
    <Provider store={store}>
        <NewsServiceContext.Provider value={newsService}>
            <UserServiceContext.Provider value={userService}>
                <App />
            </UserServiceContext.Provider>
        </NewsServiceContext.Provider>
    </Provider>

, document.getElementById('root'));


