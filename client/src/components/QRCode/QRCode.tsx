import { QRCodeCanvas } from "qrcode.react";
import classes from "./QRCode.module.css";

const QRCode: React.FC<{ url: string }> = ({ url }) => {
  const printHandler = () => {
    window.print();
  };

  const codeTag = (
    <QRCodeCanvas
      id="qrCode"
      size={175}
      bgColor={"#f7f7f7"}
      level={"H"}
      value={`https://food-qr.onrender.com/restaurants/${url}`}
    />
  );

  return (
    <div className={classes.div}>
      <p className={classes.p}>Your QR Code is ready.</p>
      <p className={classes.txt}>
        Scan it with your phone camera to see your online menu
      </p>
      <p className={classes.txt}>Don't forget to print it</p>

      {codeTag}

      <button onClick={printHandler} className={classes.btn}>
        Print
      </button>
    </div>
  );
};

export default QRCode;
