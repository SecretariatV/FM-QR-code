import S from "./index.module.scss";
import qr from "@assets/qr.png";

export const Card = () => {
  return (
    <div className={S.body}>
      <div className={S.qr}>
        <img src={qr} alt="Qr Code" />
      </div>
      <div className={S.info}>
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};
