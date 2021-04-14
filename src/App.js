import { Fragment, useState } from "react";

const list = [1, 2, 3, 4, 5];
function App() {
  const [selected, setSelected] = useState(0);

  const onChange = (e) => {
    setSelected(Number(e.target.value));
  };

  return (
    <div>
      <h1>Selected Stars {selected}</h1>
      <form>
        <div id="star_rating">
          {list.map((value) => {
            return (
              <Fragment>
                <input
                  defaultValue={value}
                  id={`star${value}`}
                  type="radio"
                  name="rating"
                  className="visuallyhidden"
                  onChange={onChange}
                />
                <label htmlFor={`star${value}`}>
                  <span className="visuallyhidden">${value} Star</span>
                  <img
                    src={
                      selected < value
                        ? "https://knockri-public-assets.azureedge.net/public-assets-white/star%20unfilled.svg"
                        : "https://knockri-public-assets.azureedge.net/public-assets-white/star%20filled.svg"
                    }
                    alt=""
                  />
                </label>
              </Fragment>
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default App;
