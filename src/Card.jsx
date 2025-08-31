import "./index.css";
import creatorImage from "/images/image-avatar.png";
import clock from "/images/icon-clock.svg";
import currency from "/images/icon-ethereum.svg";

export const Card = (props) => {
  const { cardImage, title, description, price, timeLeft, artist } = props;

  return (
    <div id="container" className="bg-card-bg rounded-2xl">
      <div id="card" className="w-[21rem]">
        <img src={cardImage} alt="" className="p-6 rounded-4xl" />
        <div
          id="card-description"
          className="text-primary-blue p-4 flex flex-col gap-4"
        >
          <h1 className="text-white">Equilibrium#3429</h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
          <div id="card-details" className="flex justify-between">
            <p className="text-primary-cyan flex items-center">
              <span className="mr-2">
                <img src={currency} alt="" />
              </span>
              0.041ETH
            </p>
            <p className="flex items-center">
              <span className="mr-2">
                <img src={clock} alt="" />
              </span>
              3 days left
            </p>
          </div>
          <hr className="text-line" />
          <div id="author-details" className="flex gap-4 items-center">
            <img
              src={creatorImage}
              alt=""
              className="w-[15%] border-solid border-2 border-white rounded-full"
            />
            <p>
              Creation of <span className="text-white">Jules Wyvern</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
