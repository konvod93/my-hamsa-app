import { useTonConnect } from '../hooks/useTonConnect';

const ConnectWalletButton = () => {
  const { isConnected, wallet, connect, disconnect } = useTonConnect();

  return (
    <div className="flex flex-col items-center space-y-4">
      {isConnected ? (
        <div className="text-amber-200 text-center">
          <p>🔗 Connected to TON</p>
          <p className="text-xs opacity-80">{wallet?.account?.address}</p>
          <button
            onClick={disconnect}
            className="mt-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md transition-all"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={connect}
          className="px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-black font-semibold transition-all duration-300 shadow-md"
        >
          Connect TON Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWalletButton;