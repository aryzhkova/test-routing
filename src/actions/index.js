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


  


export {
    newsRequested,
    newsLoaded,
    newsError,
    userLoginRequest,
    userLogged,
    userLoggedError,
}