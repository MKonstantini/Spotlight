import { FunctionComponent } from "react";

interface QuoteProps {
    quoteNum: number
}

const Quote: FunctionComponent<QuoteProps> = ({ quoteNum }) => {
    let quote, author;
    if (quoteNum === 1) {
        quote = "Cinema is universal, beyond flags and borders and passports."
        author = "Filmmaker Alejandro Inarritu"
    } else if (quoteNum === 2) {
        quote = "The worst thing about prison was the Dementors."
        author = "Michael Scott, The Office"
    }

    return (
        <section className="quote-section my-3">
            <br />
            <div className="sectionDivider"></div>
            <h1 className="text-center display-6">"{quote}"</h1>
            <h3 className="text-myColor text-center">- {author}</h3>
            <div className="sectionDivider"></div>
            <br />
        </section>
    );
}

export default Quote;