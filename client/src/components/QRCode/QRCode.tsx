import { QRCodeCanvas } from "qrcode.react";
import { qr } from "../../styles/qr";

const QRCode: React.FC<{ url: string }> = ({ url }) => {
  const printHandler = () => {
    window.print();
  };

  const codeTag = (
    <div className={qr.codeBox}>
      <QRCodeCanvas
        id="qrCode"
        size={175}
        bgColor={"#f7f7f7"}
        level={"H"}
        value={`https://food-qr.onrender.com/restaurants/${url}`}
      />
    </div>
  );

  return (
    <div className={qr.container}>
      <p className={qr.heading}>Your QR Code is ready.</p>
      <p className={qr.p}>
        Scan it with your phone camera to see your online menu
      </p>
      <p className={qr.p}>Don't forget to print it</p>

      {codeTag}

      <button onClick={printHandler} className={qr.btn}>
        Print
      </button>
    </div>
  );
};

export default QRCode;
