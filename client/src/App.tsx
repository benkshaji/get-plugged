import { useEffect, useState } from "react";
import { axiosClient } from "./lib/axios";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axiosClient
      .get("/message")
      .then((response) => {
        setData(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && <h1 className="text-3xl font-bold">{data}</h1>}
      </div>
    </>
  );
}

export default App;
