
import {useState } from "react";

// to test the app locally, http://localhost:9898
function AddBook (props) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [pages, setPages] = useState("");
    const [country, setCountry] = useState("");
    const [price, setPrice] = useState("");
    const [url, seUrl] = useState("");


    const checkBookExist = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/check-book`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({author, title})
        }); 

        const data = await response.json();

        if (data.isExisted === true){
            window.alert("Book already exist");
            setTitle("");
            setAuthor("");
            setImage("");
            setPages("");
            setCountry("");
            setPrice("");
            seUrl("");
            return true;
        }
        return false;
    }

    const handleSubmit = async () => {
        const ifBookExist = checkBookExist();
        if (ifBookExist === true) return;
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/add-book`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            }, 
            body: JSON.stringify({title, author, image, pages, country, price, url})
        });

        const data = await response.json();
        if (data.message === "success"){
            setTitle("");
            setAuthor("");
            setImage("");
            setPages("");
            setCountry("");
            setPrice("");
            seUrl("");
        }
    }


    return (
        <div className="mainContainer">
            <h2 className="titleContainer">Add Book</h2>
            <label>Book Title:</label>
            <br />
            <input className="inputBox" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        
            <br />
            <label>Author:</label>
            <br />
            <input className="inputBox" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />

            <br />
            <label>Image:</label>
            <br />
            <input className="inputBox" type="text" value={image} onChange={(e) => setImage(e.target.value)} />

            <br />
            <label>Pages:</label>
            <br />
            <input className="inputBox" type="text" value={pages} onChange={(e) => setPages(e.target.value)} />

            <br />
            <label>Country:</label>
            <br />
            <input className="inputBox" type="text" value={country} onChange={(e) => setCountry(e.target.value)} />

            <br />
            <label>Price:</label>
            <br />
            <input className="inputBox" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />

            <br />
            <label>Url:</label>
            <br />
            <input className="inputBox" type="text" value={url} onChange={(e) => seUrl(e.target.value)} />

            <br />
            <button className="submitButton" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddBook;