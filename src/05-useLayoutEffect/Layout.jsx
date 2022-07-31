import { useCounter, useFetch } from "../hook";
import { QuoteOtravez, LoadingQuote } from "../03-examples";

export const Layout = () => {
  const { increment, counter } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bads Quotes</h1>
      <hr />
      {isLoading  ? (
        <LoadingQuote />
      ) : (
        <QuoteOtravez quotex={quote} authorx={author} />
      )}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next quote
      </button>
    </>
  );
};
