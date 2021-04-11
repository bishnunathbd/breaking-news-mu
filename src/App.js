import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({});

  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=39797bf826274bfeb561df80dd97059a';
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))

    // users api
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

    // single user api
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => setSingleUser(data))

    // random user api
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setRandomUser(data.results[0]))
  }, [])

  return (
    <div>
      <h2>Random User Data:</h2>
      <p>Email: {randomUser.email}</p>
      {/* short circuit */}
      <p>First Name: {randomUser.name && randomUser.name.first}</p>
      {/* nullable */}
      <p>Last Name: {randomUser.name?.last}</p>

      <h2>Single User Data:</h2>
      <p>Email: {singleUser.email}</p>
      <p>Address: {singleUser.address && singleUser.address.city}</p>
      <p>Company: {singleUser.company?.name}</p>

      <h2>Users Data:</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>

      <h1>Total News Headlines: {articles.length}</h1>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
