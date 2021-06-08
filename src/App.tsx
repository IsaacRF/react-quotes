import { MainContainer } from "./components/Main/styles";
import QuoteButton from "./components/QuoteButton";

function App() {
  function getQuote() {
      console.log("Calling API...");
  }

  return (
    <MainContainer>
      <QuoteButton onClick={getQuote}/>
    </MainContainer>
  );
}

export default App;
