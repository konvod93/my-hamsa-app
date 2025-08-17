// @ts-nocheck
import { tonConnect } from '../lib/ton-connect';

const ConnectWalletButton = () => {
  const handleConnect = async () => {
  try {
    await tonConnect.connect();
    console.log('🔗 Wallet connected:', tonConnect.wallet);
  } catch (err) {
    console.error('❌ Failed to connect wallet:', err);
  }
};

  return (
    <button
      onClick={handleConnect}
      className="px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-black font-semibold transition-all duration-300 shadow-md"
    >
      Connect TON Wallet
    </button>
  );
};

export default ConnectWalletButton;