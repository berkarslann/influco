import { FirstContainer, MainContainer } from "./styles";
import Navbar from "../../layouts/navbar/navbar";
import showroom from "../../assets/showroom.png";

const ActivitiesPage = () => {
  return (
    <MainContainer>
      <FirstContainer>
        <Navbar />
        <h1 style={{ color: "black" }}>
          Etkinliklerde buluşan markalar ve içerik üreticileri! Bir araya
          gelmenin gücünü keşfedin.
        </h1>
        <h3 style={{ color: "white" }}>
          Influco ile yaratıcı işbirliklerine ortak olun, bağlantılar kurun,
          etkinliklere katılın.
        </h3>

        <img src={showroom} style={{ width: "50%" }} />
      </FirstContainer>
      Ş
    </MainContainer>
  );
};

export default ActivitiesPage;
