import { SiEthereum } from "react-icons/si";
import { BsInfoCircleFill } from "react-icons/bs";
import Input from "../UI/Input/Input";
import { useState } from "react";
import { Spinner } from "../UI/Spinner/Spinner";

export const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleConnectWallet = () => {};

  const handleSubmit = () => {};

  return (
    <div className="welcome-container">
      <div className="welcome-grid">
        <div className="welcome-text-container">
          <h1 className="text-bg">Send Crypto across the world</h1>
          <p>
            Explore the crypto world, Buy and sell cryptocurrencies easily on
            Zypter.
          </p>
          <button
            onClick={handleConnectWallet}
            className="connect-wallet-button"
          >
            Connect Wallet
          </button>
          <div className="features-grid">
            <div className="single-feature">Reliability</div>
            <div className="single-feature">Security</div>
            <div className="single-feature">Ethereum</div>
            <div className="single-feature">Web 3.0</div>
            <div className="single-feature">Low fees</div>
            <div className="single-feature">Blockchain</div>
          </div>
        </div>
        <div className="card-container">
          <div className="eth-card">
            <div className="card-logo">
              <div className="eth-logo">
                <SiEthereum size={24} />
              </div>
              <BsInfoCircleFill size={18} />
            </div>
            <div className="card-text">
              <p>0x29D7d1dd5B6f9C8...</p>
              <p>Ethereum</p>
            </div>
          </div>
          <div className="eth-form-container">
            <Input
              placeholder="ADDRESS TO"
              type="text"
              name="address-to"
              value=""
              handleChange={() => {}}
            />
            <Input
              placeholder="AMOUNT"
              type="number"
              name="amount"
              value=""
              handleChange={() => {}}
            />
            <Input
              placeholder="KEYWORD (GIF)"
              type="text"
              name="keyword"
              value=""
              handleChange={() => {}}
            />
            <Input
              placeholder="MESSAGE"
              type="text"
              name="message"
              value=""
              handleChange={() => {}}
            />
            <div className="underline"></div>
            {isLoading ? (
              <div className="form-spinner">
                <Spinner />
              </div>
            ) : (
              <div className="form-button">
                <button onClick={handleSubmit}>SEND NOW</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
