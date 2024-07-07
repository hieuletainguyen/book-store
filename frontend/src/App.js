import React, {useState, useEffect} from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Home from "./components";
import Signup from './components/Signup';
import Signin from "./components/Signin";
import {
  BrowserRouter as Router, 
  Routes, 
  Route,
} from "react-router-dom";
import AddBook from "./components/AddBook";
import Cookies from "js-cookie";

function App() {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState({
    status: false,
    username: ''
  })

  

  
  const addToCart = (idToAdd) => {
    let newItems = [...items, idToAdd];
    setItems(newItems);
  };

  const removeFromCart = (idToRemove) => {
      let newItems = items.filter((id) => id !== idToRemove);
      setItems(newItems);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    }
    return array;
  };

  useEffect(() => {
    const bookFetch = async() => {
      
      try {
        const response = await fetch( `${process.env.REACT_APP_BACKEND_URL}/get-books`);
        const data = await response.json();
        const bookstore = data.bookstore;
        setProducts(shuffleArray(bookstore));
        
      }
      catch (error) {
        console.error(error);
      }
    };
    
    const auth = async () => {
      const token = Cookies.get("BOOKSTORES_TOKEN");
      if (token) {
        const response1 = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth_token`, {
          method: "POST", 
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({token: token}),
        });
        const data1 = await response1.json();
        setIsLoggedIn({
            status: true,
            username: data1.username
          });
      }
      console.log(isLoggedIn)
      console.log(token);
    }

    bookFetch();
    auth();
  }, []);

  

  const getProduct = (products, item) => {
      return products.find((product) => item === product.id);
  };


  let itemDetails = items.map((id) => getProduct(products, id));

  return(
    <Router>
      
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} removeFromCart={removeFromCart} products={products} items={items}/>} />;

        <Route path="/cart" element={<Cart removeFromCart={removeFromCart} inCart={itemDetails}/>} />;

        <Route path="/signup" element={<Signup /> }/>;

        <Route path="/signin" element={<Signin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />

        {isLoggedIn.username === "admin" && <Route path="/add-book" element={<AddBook />} /> }
      </Routes>
    </Router>
  );
}

export default App;