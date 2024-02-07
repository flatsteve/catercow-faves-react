import { useState, useEffect } from "react";

import api from "./services/api";

import "./App.css";

function App() {
  const [packages, setPackages] = useState([]);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    Promise.all([api.get("packages"), api.get("favorites")]).then(
      ([{ data: pkgs }, { data: userFavorites }]) => {
        setPackages(pkgs);

        setFavorites(
          userFavorites.reduce((favorites, record) => {
            favorites[record.package_id] = true;
            return favorites;
          }, {})
        );
      }
    );
  }, []);

  function setFavorite(id) {
    if (favorites[id]) {
      api.delete(`favorites?package_id=eq.${id}`).then(() => {
        const updatedFavorites = { ...favorites };
        delete updatedFavorites[id];

        setFavorites(updatedFavorites);
      });
    } else {
      api
        .post("favorites", {
          user_id: 1,
          package_id: id,
        })
        .then(() => {
          setFavorites({
            ...favorites,
            [id]: true,
          });
        });
    }
  }

  return (
    <div>
      <div className="header">
        <img src="/catercow-logo.svg" className="logo" />
        <h4>Package Results</h4>
      </div>

      <div
        className="packages"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      >
        {packages.map((pkg) => {
          return (
            <div key={pkg.id} className="package">
              <div className="package-image">
                <img src={pkg.image} alt={pkg.name} />

                <button
                  type="button"
                  className="package-fav"
                  onClick={() => setFavorite(pkg.id)}
                >
                  {favorites[pkg.id] ? <>&#128525;</> : <>&#129293;</>}
                </button>
              </div>

              <div className="package-details">
                <p>{pkg.name}</p>
                <small>{pkg.caterer}</small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
