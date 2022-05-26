export const Welcome = () => {
  const handleConnectWallet = () => {};

  return (
    <div className="main-bg">
      <div className="welcome-container">
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
      </div>
    </div>
  );
};
