const newsRequested = () => {
    return {
        type: 'FETCH_NEWS_REQUEST'
    }
}

const newsLoaded = (newBooks) => {
    return {
        type: 'FETCH_NEWS_SUCCESS',
        payload: newBooks
    }
}

const newsError = (error) => {
    return {
        type: 'FETCH_NEWS_FAILURE',
        payload: error
    }
}

const userLoginRequest = () => {
    return {
        type: 'AUTHORIZED_REQUEST'
    }
}

const userLogged = (userData) => {
    return {
        type: 'AUTHORIZED_SUCCESS',
        payload: userData
    }
}


const userLoggedError = (error) => {
    return {
        type: 'AUTHORIZED_FAILURE',
        payload: error
    }
}

const userLogout = () => {
    return {
        type: 'LOGOUT',
    }
}


const fetchTestNews = (newsService, dispatch) => () => {
    dispatch(newsRequested());
    newsService.getTestNews()
      .then((data) => dispatch(newsLoaded(data)))
      .catch((error) => dispatch(newsError(error)));
  };

const fetchNews = (newsService, dispatch) => () => {
    dispatch(newsRequested());
    newsService.getNews()
      .then((data) => dispatch(newsLoaded(data)))
      .catch((error) => dispatch(newsError(error)));
};  
  


export {
    userLoginRequest,
    userLogged,
    userLoggedError,
    userLogout,
    fetchNews,
    fetchTestNews,
}