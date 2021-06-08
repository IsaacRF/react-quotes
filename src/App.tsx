import { useEffect, useState } from "react";
import { MainContainer } from "./components/Main/styles";
import QuoteButton from "./components/QuoteButton";
import QuoteDisplay from "./components/QuoteDisplay";
import { Quote } from "./components/QuoteDisplay/types";

function App() {
  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    getQuote();
  }, [])

  function getQuote() {
    fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
      .then((response) => response.json())
      .then((quote) => setQuote(quote[0]))
      .catch((error) => console.error(error));
  }

  return (
    <MainContainer>
      <QuoteDisplay quote={quote} />
      <QuoteButton onClick={getQuote} />
    </MainContainer>
  );
}

export default App;
