import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [content, setContent] = useState("");
  const url = window.location.hostname;

  useEffect(() => {
    axios
      .get(`http://${url}:8080/api/test`)
      .then((response) => setContent(response.data));
  });

  return <div>{content}</div>;
};

export default App;
