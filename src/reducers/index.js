let user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    newsList: {
        loading: true,
        news: [],
        error: null
    },
    // userAuthentication: {
    //     authorized: false,
    //     user: null,
    //     error: null
    // }
}
initialState.userAuthentication = user ? { authorized: true, user, error: null } : {authorized: false, user: null, error: null};

const updateNews = (state, action) => {
    switch (action.type) {
        case 'FETCH_NEWS_REQUEST':
            return {
                loading: true,
                news: [],
                error: null
            }
        case 'FETCH_NEWS_SUCCESS':
            return {
                loading: false,
                news: action.payload,
                error: null
            }
        case 'FETCH_NEWS_FAILURE':
            return {
                loading: false,
                news: [],
                error: action.payload
            }
        default:
            return state.newsList;
    }
}


const updateUserAuthentication = (state, action) => {
    switch (action.type) {
        case 'AUTHORIZED_REQUEST':
            return {
                authorized: false,
                user: null,
                error: null
            }
        case 'AUTHORIZED_SUCCESS':
            return {
                authorized: true,
                user: action.payload,
                error: null
            }
        case 'AUTHORIZED_FAILURE':
            return {
                authorized: false,
                user: null,
                error: action.payload
            }
        case 'LOGOUT':
            return {
                authorized: false,
                user: null,
                error: null
            }    
        default:
            return state.userAuthentication

    }
}

const reducer = (state = initialState, action) => {
    return {
        newsList: updateNews(state, action),
        userAuthentication: updateUserAuthentication(state, action)

    }
};

export default reducer;