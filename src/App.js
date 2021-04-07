import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=39797bf826274bfeb561df80dd97059a';
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  }, [])

  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
