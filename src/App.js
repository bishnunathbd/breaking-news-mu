import './App.css';
import News from './components/News/News';
import { useEffect, useState } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

function App() {
  const [articles, setArticles] = useState([]);
  const [likeBtn, setLikeBtn] = useState('');
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({});

  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=39797bf826274bfeb561df80dd97059a';
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))

    // users
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

    //single user
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => setSingleUser(data))

    // random user
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setRandomUser(data.results[0]))
  }, [])


  const handleLike = () => {
    const color = likeBtn ? '' : 'primary';
    setLikeBtn(color);
  }

  return (
    <div>
      <h2>Facebook Like Button</h2>
      <ThumbUpAltIcon onClick={handleLike} color={likeBtn}></ThumbUpAltIcon>

      <h3>Single User - Name: {singleUser.name} </h3>
      <br/>
      <h3>Random User - Gender: {randomUser.gender}</h3>
      {/* <p>Random User - Name: {randomUser.name.first}</p>  */}
      <p>Random User - Name: {randomUser.name && randomUser.name.first}</p>
      <br/>
      <h3>Total Users: {users.length}</h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
      <br/>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
