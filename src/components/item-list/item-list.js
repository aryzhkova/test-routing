import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { connect } from 'react-redux';
import { withNewsService } from '../hoc-helpers';
import { newsLoaded, newsRequested, newsError} from '../../actions';
import './item-list.scss';

const ItemList = ({items}) => {
    return(
        <ul className="list-group news-list">
            {
                items.map((item, index)=>{
                    const { id , date, title, content, author, urlToImage, url} = item;
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
        const newsService = this.props.newsService;
        console.log(this.props);
        //request data
        this.props.newsRequested();
        // newsService.getNews()
        //     .then((data)=>{
        //         this.props.newsLoaded(data);
        //     })
        //     .catch((error)=>{
        //         this.props.newsError(error)
        //     })
        newsService.getTestNews()
            .then((data)=>{
                this.props.newsLoaded(data);
            })
            .catch((error)=>{
                this.props.newsError(error)
            })

        
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
    return {
        news,
        loading,
        error
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        newsLoaded: (newNews) => dispatch(newsLoaded(newNews)),
        newsRequested: ()=> dispatch(newsRequested()),
        newsError: (error)=> dispatch(newsError(error))
    }
}

export default withNewsService(connect(mapStateToProps, mapDispatchToProps)(ItemListContainer));