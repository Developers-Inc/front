import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [content, setContent] = useState("Olá mundo");
  const url = window.location.hostname;

  useEffect(() => {
    axios
      .get(`http://${url}:8080/api/test`)
      .then((response) => setContent(response.data))
      .catch((error) => setContent(error.message));
  }, []);

  return <div>{content}</div>;
};

export default App;
