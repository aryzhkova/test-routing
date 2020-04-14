class NewsService {
    _testNews = [
        {
            source: {
                id: "politico",
                name: "Politico"
            },
            author: "https://www.facebook.com/Jakeshermanpolitico",
            title: "Trump administration rolls out new coronavirus push, names HHS testing czar - POLITICO",
            description: "“The changes have been made and testing will soon happen on a very large scale basis,” Trump said in a pair of tweets Friday morning.",
            url: "https://www.politico.com/news/2020/03/13/trump-coronavirus-testing-128048",
            urlToImage: "https://static.politico.com/ac/bd/54203ce24294b994e06164beb9c6/200313-brett-giroir-gty-773.jpg",
            publishedAt: "2020-03-13T14:48:04Z",
            content: "Public health experts say that the slow pace of U.S. testing makes it hard to know how quickly the virus is spreading and has stymied efforts to contain it. \r\nAdministration officials told lawmakers yesterday that the U.S. tested about 11,000 people during th… [+3034 chars]"
        },
        {
            source: {
                id: "usa-today",
                name: "USA Today"
            },
            author: "Ledyard King",
            title: "Mnuchin says a deal on a coronavirus response is 'very close' - live updates - USA TODAY",
            description: "The bill, which would still need Senate approval, comes a day after President Trump suspended all air travel from Europe to the U.S. for 30 days.",
            url: "https://www.usatoday.com/story/news/politics/2020/03/13/coronavirus-bill-house-nears-approval-free-tests-paid-sick-leave/5039259002/",
            urlToImage: "https://www.gannett-cdn.com/presto/2020/03/13/USAT/27d1a6f9-b057-43e4-bb04-14dc26305a27-MNUCHIN.JPG?crop=4284,2410,x0,y310&width=3200&height=1680&fit=bounds",
            publishedAt: "2020-03-13T14:22:25Z",
            content: "The coronavirus is now characterized as a pandemic as the WHO director general announces more than 100,000 cases in over 100 countries.\r\nUSA TODAY\r\nWASHINGTON Treasury Secretary Steve Mnuchin sounded a positive note Friday morning, saying a deal on a coronavi… [+10563 chars]"
        },
        {
            source: {
                id: "cnbc",
                name: "CNBC"
            },
            author: "Christina Wilkie",
            title: "Trump pressures Congress to 'approve a payroll tax cut' for the rest of the year - CNBC",
            description: "A payroll tax cut has not been included in the coronavirus aid package that is reportedly being finalized in negotiations between the White House and House Democrats.",
            url: "https://www.cnbc.com/2020/03/13/trump-pressures-congress-to-approve-a-payroll-tax-cut-for-the-rest-of-the-year.html",
            urlToImage: "https://image.cnbcfm.com/api/v1/image/106438317-1584002095100gettyimages-1206683208.jpeg?v=1584002234",
            publishedAt: "2020-03-13T14:18:08Z",
            content: "WASHINGTON President Donald Trump pressed Congress on Friday to include a nine-month payroll tax holiday in the coronavirus relief package that is being finalized in the Democratic-led House.\r\nBut after several days of intense negotiations between House Speak… [+1303 chars]"
        }
    ]
    _apiKey = `apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    _apiBase = 'http://newsapi.org/v2/top-headlines?country=us&';


    getResource = async () => {
        var req = new Request(`${this._apiBase}${this._apiKey}`);
        const res = await fetch(req);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase} , received ${res.status}`)
        }
        return await res.json();
    }

    getNews = async () =>{
        const res = await this.getResource();
        return res.articles.map(news => this._transformNews(news));
    }

    _extractDate(str){
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ];
          const days = [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
          ];
        const dateObj =  new Date(str);
        const year = dateObj.getFullYear(); // 2019
        const date = dateObj.getDate(); // 23
        const monthName = months[dateObj.getMonth()];
        const dayName = days[dateObj.getDay()];
        const hours = dateObj.getHours();
        const minutes = dateObj.getMinutes();
        const formatted = `${dayName}, ${date} ${monthName} ${year} ${hours}:${minutes} ` 
        return formatted
    }

    _transformNews(news){
        return {
            id: news.source.id,
            date: this._extractDate( news.publishedAt),
            title: news.title,
            author: news.author,
            url: news.url,
            urlToImage: news.urlToImage,
            content: news.content,
            description: news.description
        }
    }

    getTestNews(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(Math.random() > 0.75){
                    reject(new Error('Error!!'))
                }else{
                    const result = this._testNews.map(news => this._transformNews(news));
                    resolve(result);
                }
               
            }, 700);
        });
        
    }
    
}

export default NewsService;