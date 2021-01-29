import './App.css';
import News from './components/News/News';
import { useEffect, useState } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=39797bf826274bfeb561df80dd97059a';
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
  }, [])

  const [likeBtn, setLikeBtn] = useState('');

  const handleLike = () => {
    const color = likeBtn ? '' : 'primary';
    setLikeBtn(color);
  }

  return (
    <div>
      <h2>Facebook Like Button</h2>
      <ThumbUpAltIcon onClick={handleLike} color={likeBtn}></ThumbUpAltIcon>

      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
