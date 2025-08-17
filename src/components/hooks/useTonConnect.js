// @ts-nocheck
import { useEffect, useState } from 'react';
import { tonConnect } from '../../lib/ton-connect';
import toast from 'react-hot-toast';

export const useTonConnect = () => {
  const [wallet, setWallet] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setWallet(tonConnect.wallet);
    setIsConnected(tonConnect.connected);

    const unsubscribe = tonConnect.onStatusChange((wallet) => {
      setWallet(wallet);
      setIsConnected(tonConnect.connected);
      toast.success('🔗 Статус кошелька обновлён');
    });

    return () => unsubscribe();
  }, []);

  const connect = async () => {
    try {
      await tonConnect.connect();
      setWallet(tonConnect.wallet);
      setIsConnected(tonConnect.connected);
      toast.success('✅ Кошелёк подключён');
      console.log('Wallet connected:', tonConnect.wallet);
    } catch (err) {
      toast.error('❌ Ошибка подключения кошелька');
      console.error('Ошибка подключения TON:', err);
    }по
  };

  const disconnect = () => {
    try {
      tonConnect.disconnect();
      setWallet(null);
      setIsConnected(false);
      toast('👋 Кошелёк отключён');
      console.log('Wallet disconnected');
    } catch (err) {
      toast.error('❌ Ошибка отключения');
      console.error('Ошибка отключения TON:', err);
    }
  };

  const sendTransaction = async (tx) => {
    try {
      await tonConnect.sendTransaction(tx);
      toast.success('📤 Транзакция отправлена');
      console.log('Transaction sent:', tx);
    } catch (err) {
      toast.error('❌ Ошибка транзакции');
      console.error('Ошибка отправки транзакции:', err);
    }
  };

  return {
    wallet,
    isConnected,
    connect,
    disconnect,
    sendTransaction,
  };
};