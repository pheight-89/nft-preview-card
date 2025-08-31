import { useState } from "react";
import "./index.css";
import cardImage from "/images/image-equilibrium.jpg";
import creatorImage from "/images/image-avatar.png";
import clock from "/images/icon-clock.svg";
import currency from "/images/icon-ethereum.svg";
import eyeIcon from "/images/icon-view.svg";

function App() {
  const cardData = {
    imgSrc: cardImage,
    imgAlt: "Prismatic glas cube with red refractored light",
    cardTitle: "Equilibrium#3429",
    cardDescription: "Our Equilibrium collection promotes balance and calm.",
    ethSymbol: currency,
    ethAlt: "Ethereum symbol",
    price: 0.041,
    timeSymbol: clock,
    timeSymAlt: "Time remaining symbol",
    timeRemaining: 3,
    author: "Jules Wyvern",
    authorImg: creatorImage,
    authorImgAlt: "Avatar for Jules Wyvern",
  };

  return (
    <div
      id="container"
      className="bg-card-bg rounded-2xl font-main shadow-card"
    >
      <div id="card" className="w-[21rem]">
        <div className="group relative">
          <img
            src={cardData.imgSrc}
            alt={cardData.imgAlt}
            className="p-6 rounded-4xl"
          />
          <a
            href="#"
            className="absolute inset-0 flex justify-center bg-primary-cyan40 m-6 rounded-lg opacity-0 hover:opacity-100 "
          >
            <img src={eyeIcon} alt="" className="scale-20 opacity-100" />
          </a>
        </div>
        <div
          id="card-description"
          className="text-primary-blue p-6 flex flex-col gap-4"
        >
          <h1 className="text-white font-bold text-2xl">
            <a href="#" className="hover:text-primary-cyan">
              {cardData.cardTitle}
            </a>
          </h1>
          <p>{cardData.cardDescription}</p>
          <div id="card-details" className="flex justify-between">
            <p className="text-primary-cyan flex items-center font-semibold">
              <span className="mr-2">
                <img src={cardData.ethSymbol} alt={cardData.ethAlt} />
              </span>
              {cardData.price}ETH
            </p>
            <p className="flex items-center">
              <span className="mr-2">
                <img src={cardData.timeSymbol} alt={cardData.timeSymAlt} />
              </span>
              {cardData.timeRemaining} days left
            </p>
          </div>
          <hr className="text-line" />
          <div id="author-details" className="flex gap-4 items-center">
            <img
              src={cardData.authorImg}
              alt={cardData.authorImgAlt}
              className="w-[15%] border-solid border-2 border-white rounded-full"
            />
            <p>
              Creation of{" "}
              <span className="text-white">
                <a href="#" className="hover:text-primary-cyan">
                  {cardData.author}
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
