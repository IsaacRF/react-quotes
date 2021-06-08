import { MouseEventHandler } from "react";
import { QuoteButtonContainer } from "./styles";

export interface QuoteButtonProps {
    onClick: MouseEventHandler<HTMLElement>;
}

const QuoteButton: React.FC<QuoteButtonProps> = ({onClick}) => (
  <QuoteButtonContainer onClick={onClick}>Get Quote</QuoteButtonContainer>
);

export default QuoteButton;
