export const ManualPayment = () => {
  const tonAddress = "UQDSd1PtSR1FgnFFBumBzZyPqymHoWsVNmYCTWlpwk_f8g2f"; // твой TON-адрес
  const amount = "5 TON";

  return (
    <div className="p-8 space-y-6 mt-24 bg-indigo-900 text-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold">💸 Ручная оплата</h2>
      <p>
        Переведи <span className="font-semibold">{amount}</span> на TON-кошелёк:
      </p>
      <div className="bg-gray-800 p-4 rounded-md font-mono break-all">
        {tonAddress}
      </div>
      <img
        src={`https://tonhub.com/qr/${tonAddress}`}
        alt="QR-код TON"
        className="w-48 h-48 mx-auto"
      />
      <p>После оплаты нажми кнопку ниже:</p>
      <button
        onClick={() => alert("Спасибо! Мы проверим вручную.")}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Я оплатил
      </button>
    </div>
  );
};