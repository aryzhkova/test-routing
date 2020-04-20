import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { connect } from 'react-redux';
import { withNewsService } from '../hoc-helpers';
import { fetchTestNews, fetchNews} from '../../actions';

import './item-list.scss';

const ItemList = ({items}) => {
    return(
        <ul className="list-group news-list">
            {
                items.map((item, index)=>{
                    const { id, date, title, content, author, urlToImage } = item;
                    return(
                        <li key={`${id}_${index}`} className=" list-group-item news-item d-flex">
                            <div className="news-item-left">
                                <img src={urlToImage} className="news-item-img"alt="img"/>
                            </div>
                            <div className="news-item-right">
                                <h4 className="news-item-title">{title}</h4>
                                <div className="news-item-info d-flex">
                                    <div className="news-item-date">{date}</div>
                                    <div className="news-item-author">{author}</div>
                                </div>
                                <div className="news-item-content">{content}</div>
                            </div>
                        </li>
                    );
                })
            }
        </ul>    
    );
}

class ItemListContainer extends Component {
    
    componentDidMount(){
        this.props.fetchTestNews();
    } 

    render(){
       
        const { news, loading, error } = this.props;
        if(loading){
            return <Spinner />
        }
        if(error){
            return <ErrorIndicator />
        }

        return(<ItemList items={news} />);
        
    }   
} 

const mapStateToProps = ({newsList: {news, loading, error}}) => {
    return { news, loading, error }
}

const mapDispatchToProps =(dispatch, {newsService})=>{
    return {
        fetchTestNews: fetchTestNews(newsService, dispatch),
        fetchNews: fetchNews(newsService, dispatch),
        // newsLoaded: (newNews) => dispatch(newsLoaded(newNews)),
        // newsRequested: ()=> dispatch(newsRequested()),
        // newsError: (error)=> dispatch(newsError(error))
    }
}

export default withNewsService(connect(mapStateToProps, mapDispatchToProps)(ItemListContainer));