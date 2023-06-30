import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Card from "react-bootstrap/Card";
import Fooddata from "./data";

const Home = () => {
  // const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  const radios = [
    { name: "Drinks", value: "1" },
    { name: "Salads", value: "2" },
    { name: "Plates", value: "3" },
    { name: "Deserts", value: "4" },
  ];

  //   for food data
  const [menu, setMenu] = useState(Fooddata);

  const filterItems = (curitems) => {
    const updateitems = Fooddata.filter((cur, ind) => {
      return cur.category === curitems;
    });
    setMenu(updateitems);

    console.log(curitems);
  };

  return (
    <>
      <section className="container mt-2">
        <h2 className="text-center mb-2" style={{ fontWeight: 400 }}>
          Categories
        </h2>

        <div className="btn-container d-flex justify-content-center p-1">
          <Button 
          onClick={() => setMenu(Fooddata)}
          variant="primary" size="l" active>
            All
          </Button>
        </div>
        <div className="btn-container d-flex justify-content-center">
          <ButtonGroup className="mb-2">
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant="secondary"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                onClick={() => filterItems(radio.name)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>

        <div className="container mt-3">
          <div className="row d-flex justify-content-center align-items-center">
            {menu.map((el, ind) => {
              return (
                <>
                  <Card>
                    {/* <Card.Header as="h5">Featured</Card.Header> */}
                    <Card.Body>
                      <Card.Title>{el.title}</Card.Title>
                      <Card.Text>{el.desc}</Card.Text>
                      {/* <Button variant="primary">{el.price} $</Button> */}
                      <footer className="blockquote-footer">
                        {/* Someone famous in{" "} */}
                        <cite title="Source Title" style={{ fontWeight: 500 }}>
                          {el.price}
                        </cite>
                      </footer>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
