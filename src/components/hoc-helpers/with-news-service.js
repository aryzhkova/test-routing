import React from 'react';
import NewsServiceContext from '../news-service-context';

const withNewsService =(Wrapped)=>{
    return (props)=>{
        return(
            <NewsServiceContext.Consumer>
                {
                    (newsService) => {
                        return(
                            <Wrapped {...props} newsService={newsService}/>
                        );
                    }
                }
            </NewsServiceContext.Consumer>
        );
    }
}

export default withNewsService;

