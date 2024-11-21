import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import data from "../assets/datos/data.json";

const Home = (props) => {
  return (
    <>
      <Header />
      <div id="cards" className="flex justify-evenly mt-10 gap-4 flex-wrap">
        {data.map((dato, id) => {
          return (
            <div className="border-2 border-solid border-black" key={id}>
              <CardPizza
                dato={dato}
                setTotal={props.setTotal}
                setCarrito={props.setCarrito}
                total={props.total}
                carrito={props.carrito}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
