import phoicanh from "../image/phoicanh.jpg";
import matbang from "../image/matbang.jpg";
import matbang1 from "./image/matbang/matbang1.jpg";
import matbang2 from "./image/matbang/matbang2.jpg";
import matbang3 from "./image/matbang/matbang3.jpg";
import matbang4 from "./image/matbang/matbang4.jpg";
import matbang5 from "./image/matbang/matbang5.jpg";
import matbang6 from "./image/matbang/matbang6.jpg";
import matbang7 from "./image/matbang/matbang7.jpg";
import matbang8 from "./image/matbang/matbang8.jpg";
import matbang9 from "./image/matbang/matbang9.jpg";
import matbang10 from "./image/matbang/matbang10.jpg";
import matbang11 from "./image/matbang/matbang11.jpg";
import matbang12 from "./image/matbang/matbang12.jpg";
import matbang13 from "./image/matbang/matbang13.jpg";
import noithat1 from "./image/matbang/noithat1.jpg";
import noithat2 from "./image/matbang/noithat2.jpg";
import noithat3 from "./image/matbang/noithat3.jpg";

import ContentComponent from "../ContentComponent";
import styled from "styled-components";
import ImageComponent from "../../ImageComponent/ImageComponent";
const MatBang = () => {
  const CssMatBang = styled.div``;
  const Title = styled.h4`
    font-family: "Oswald", sans-serif;
    text-align: center;
    padding: 0.5em;
    text-transform: uppercase;
    color: #2f6878;
  `;
  return (
    <ContentComponent
      id="matbang"
      title="MẶT BẰNG"
      h2ClassName="background-white"
    >
      <p>
        Mặt bằng Thủ Thiêm Zeit River Quận 2 được chủ đầu tư xây dựng trên quỹ
        đất rộng 3.3ha với mật độ chỉ 40%. Trong đó gồm có 6 block cao từ 12-32
        tầng, 1-2 tầng hầm. Khối đế sẽ gồm 4 tầng thương mại và tiện ích. Dự án
        cung cấp ra thị trường 817 sản phẩm căn hộ, nhà phố thiết kế 4 lầu và
        shophouse. Diện tích các sản phẩm linh hoạt, phù hợp để khách hàng lựa
        chọn để ở hoặc kinh doanh.
      </p>
      <CssMatBang className="row row-cols-1 row-cols-sm-3">
        <div className="col">
          <p>
            <ul>
              <li>Căn 1PN: Từ 55-60m2</li>
              <li>Căn 4PN: 181.1m2</li>
              <li>Căn Shophouse mặt ngoài: 300m2</li>
            </ul>
          </p>
        </div>
        <div className="col">
          <p>
            <ul>
              <li>Căn 2PN: 90.55-97.17m2</li>
              <li>Căn 4PN Duplex: 215.71m2</li>
              <li>Căn Shophouse mặt trong: 200m2 </li>
            </ul>
          </p>
        </div>
        <div className="col">
          <p>
            <ul>
              <li>Căn 3PN: 125.8m2</li>
              <li>Căn Penthouse: 392.45m2</li>
              <li>Căn nhà phố: 126m2</li>
            </ul>
          </p>
        </div>
      </CssMatBang>
      <ImageComponent
        url={matbang}
        quote="Mặt bằng dự án Thủ Thiêm Zeit River"
      />
      <p>
        Theo bản đồ quy hoạch tổng thể, dự án này có xây theo độ cao giảm dần,
        hướng về hướng Hồ trung tâm rộng 14ha. Giúp cư dân có tầm nhìn rộng
        thoáng cho từ các căn hộ hạng sang. 6 tòa tháp trong dự án lần lượt có
        độ cao là 2 tháp cao 12 tầng, 1 tháp 21 tầng, 1 tháp 25 tầng, 1 tháp 29
        tầng, 1 tháp 32 tầng. Khối đế cao 4 tầng của các tòa thuộc dự án có sẽ
        có các căn nhà phố thương mại phục vụ nhu cầu kinh doanh.
      </p>
      <ImageComponent
        url={phoicanh}
        quote="Phối cảnh dự án Thủ Thiêm Zeit River nhìn từ trên cao"
      />
      <p>
        Kiến trúc của chung cư Thủ Thiêm Zeit River được PTW Architects thiết kế
        gần giống với One Central Park – một dự án 5 sao về không gian sống xanh
        được công nhận vào năm 2013. Không gian chung của dự án được bao phủ mật
        độ xanh, thoáng đãng và trong lành. Hành lang dự án có đài phun nước,
        khu hồ bơi và nhà hàng sang trọng. Tất cả đã kiến tạo nên một không gian
        kiến trúc ven sông đáng mơ ước.
      </p>
      <Title>Mặt bằng thiết kế thủ thiêm Zeit River</Title>
      <p>
        Mặt bằng thiết kế Thủ Thiêm Zeit River với mật độ xây dựng thấp, sử dụng
        vật liệu tự nhiên, các căn 1, 2, 3, 4 phòng ngủ, biệt thự hồ bơi và
        penthouse được thiết kế tinh tế nhằm mang đến cho chủ nhân không gian
        sống đậm chất đương đại, ban công rộng lớn, thoáng đãng, cùng tầm nhìn
        bao quát toàn cảnh con sông Sài Gòn đầy sắc màu.
      </p>
      <p>
        <ul>
          <li>
            <strong>Căn hộ 1PN:</strong> Diện tích: 55-60 m2, tổng số căn
            hộ:190, chiếm: 25%
          </li>
          <li>
            <strong>Căn hộ 2PN:</strong> Diện tích:80-90 m2, tổng số căn hộ:390,
            chiếm: 40%
          </li>
          <li>
            <strong>Căn hộ 3PN:</strong> Diện tích:140 m2, tổng số căn hộ:220,
            chiếm: 30%
          </li>
          <li>
            <strong>Căn hộ 4PN:</strong> Diện tích: 250 m2, tổng số căn hộ:80,
            chiếm: 5%
          </li>
          <li>
            <strong>Đối với nhà phố:</strong> Diện tích đất là 7×18, xây dựng 1
            hầm và 3 lầu với tổng diện tích sàn xây dựng là 560 m2.
          </li>
        </ul>
      </p>
      <img className="img-fluid" src={matbang1} alt="" srcset="" />
      <img className="img-fluid" src={matbang2} alt="" srcset="" />
      <img className="img-fluid" src={matbang3} alt="" srcset="" />
      <img className="img-fluid" src={matbang4} alt="" srcset="" />
      <img className="img-fluid" src={matbang5} alt="" srcset="" />
      <img className="img-fluid" src={matbang6} alt="" srcset="" />
      <img className="img-fluid" src={matbang7} alt="" srcset="" />
      <img className="img-fluid" src={matbang8} alt="" srcset="" />
      <img className="img-fluid" src={matbang9} alt="" srcset="" />
      <div className="row row-cols-2 g-1">
        <div className="col">
          <img className="img-fluid" src={matbang10} alt="" srcset="" />
        </div>
        <div className="col">
          <img className="img-fluid" src={matbang11} alt="" srcset="" />
        </div>
        <div className="col">
          <img className="img-fluid" src={matbang12} alt="" srcset="" />
        </div>
        <div className="col">
          <img className="img-fluid" src={matbang13} alt="" srcset="" />
        </div>
      </div>
      <Title className="mt-5">PHỐI CẢNH THIẾT KẾ CĂN HỘ MẪU</Title>

      <img className="img-fluid" src={noithat1} alt="" srcset="" />
      <div className="row row-cols-2 g-0">
        <img className="col img-fluid" src={noithat2} alt="" srcset="" />
        <img className="col img-fluid" src={noithat3} alt="" srcset="" />
      </div>
    </ContentComponent>
  );
};
export default MatBang;
