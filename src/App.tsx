import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [content, setContent] = useState("Hello world!");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/test")
      .then((response) => setContent(response.data))
      .catch((error) => setContent(error.message));
  }, []);

  return <div>{content}</div>;
};

export default App;
