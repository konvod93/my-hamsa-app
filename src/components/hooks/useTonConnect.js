// @ts-nocheck
import { tonConnect } from '../../lib/ton-connect';

export const useTonConnect = () => {
  const [wallet, setWallet] = useState(tonConnect.wallet);
  const [isConnected, setIsConnected] = useState(tonConnect.connected);

  useEffect(() => {
    const unsubscribe = tonConnect.onStatusChange((wallet) => {
      setWallet(wallet);
      setIsConnected(tonConnect.connected);
    });

    return () => unsubscribe();
  }, []);

  const connect = async () => {
    await tonConnect.connect();
  };

  const disconnect = () => {
    tonConnect.disconnect();
  };

  const sendTransaction = async (tx: any) => {
    await tonConnect.sendTransaction(tx);
  };

  return {
    wallet,
    isConnected,
    connect,
    disconnect,
    sendTransaction,
  };
};