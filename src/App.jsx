import { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import Header from "./assets/components/Header";
import Section from "./assets/components/Section";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://site--deliveroo-backend--qff9cbxq7z2g.code.run"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="app">
      <Header
        title={data.restaurant.name}
        baseline={data.restaurant.description}
        image={data.restaurant.picture}
      />
      <main>
        <div className="container">
          <div className="menu">
            {data.categories.map((categorie, index) => {
              if (categorie.meals.length !== 0) {
                return <Section key={index} data={categorie} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
