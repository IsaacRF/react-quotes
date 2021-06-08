import { MainContainer } from "./components/Main/styles";
import QuoteButton from "./components/QuoteButton";

function App() {
  function getQuote() {
      fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        .then(response => response.json())
        .then(quote => console.log(quote[0]))
        .catch(error => console.error(error));
  }

  return (
    <MainContainer>
      <QuoteButton onClick={getQuote}/>
    </MainContainer>
  );
}

export default App;
