import { QuoteDisplayContainer } from "./styles";
import { Quote } from "./types";

export interface QuoteDisplayProps {
  quote: Quote | undefined;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ quote }) => (
  <>
    {quote && (
      <QuoteDisplayContainer>
        <h1>{quote.quote}</h1>
        <h2>- {quote.author}</h2>
      </QuoteDisplayContainer>
    )}
  </>
);

export default QuoteDisplay;
