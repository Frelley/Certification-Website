import { useState } from "react";
import data from "./data";


const Quotes = () => {
  const [quoteInput, setQuoteInput] = useState("");
  const [author, setAuthor] = useState("");
  const [list, setList] = useState(data);
  const [quote, setQuote] = useState({
    quotes: "Press The button",
    author: "me",
  });
  // @ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuote = { quotes: quoteInput, author: author };
    setList([...list, newQuote]);
    console.log(list);
  };
  // @ts-ignore
  const handleQuote = (e) => {
    e.preventDefault();
    let random = list[Math.floor(Math.random() * list.length)];
    console.log(random);
    setQuote(random);
  };

  return (
    <div>
      <section
        className="text-center "
        id="quote-box"
        style={{ margin: "auto", width: "50%" }}
      >
        <form id="quote-form" onSubmit={handleSubmit}>
          <input
            placeholder="Quote to add"
            value={quoteInput}
            onChange={(e) => setQuoteInput(e.target.value)}
          ></input>
          <input
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
          <button>Submit</button>
        </form>
        <div>
          <h1 className="title"></h1>
          <h2 id="text" className="quotes">
            {quote.quotes}
          </h2>
          <h4 id="author" className="author">
            {quote.author}
          </h4>
          <button id="new-quote" onClick={handleQuote}>
            Give me a quote
          </button>
          <div className="btn-container">
            <a id="tweet-quote" href="https://twitter.com/intent/tweet">
              Twitter
            </a>
            <button>Facebook</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quotes;
