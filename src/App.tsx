import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/test")
      .then((response) => setContent(response.data));
  });

  return <div>{content}</div>;
};

export default App;
