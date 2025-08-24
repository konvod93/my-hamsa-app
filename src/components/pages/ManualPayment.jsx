import { useState } from "react";
import QRCode from "react-qr-code";

export const ManualPayment = () => {
  const tonAddress = "UQDSd1PtSR1FgnFFBumBzZyPqymHoWsVNmYCTWlpwk_f8g2f";
  const amount = "5 TON";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tonAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 space-y-6 mt-24 bg-indigo-900 text-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold">💸 Ручная оплата</h2>
      <p>
        Переведи <span className="font-semibold">{amount}</span> на TON-кошелёк:
      </p>

      <button
        onClick={copyToClipboard}
        className="bg-gray-800 p-4 rounded-md font-mono break-all hover:bg-gray-700 active:bg-gray-600 transition cursor-pointer w-full text-left"
      >
        {tonAddress}
        {copied && <span className="ml-2 text-green-400">Скопировано!</span>}
      </button>

      <div className="flex justify-center bg-gradient-to-r from-indigo-700 to-purple-700 p-4 rounded-md">
        <QRCode value={tonAddress} size={192} />
      </div>

      <p>После оплаты нажми кнопку ниже:</p>
      <button
        onClick={() => alert("Спасибо! Мы проверим вручную.")}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-24"
      >
        Я оплатил
      </button>
    </div>
  );
};