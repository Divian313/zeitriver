import styled from "styled-components";
import ImageComponent from "../../ImageComponent/ImageComponent";
import ContentComponent from "../ContentComponent";
import picture1 from "../image/picture-1.jpg";
import tienich1 from "../image/tienich1.jpg"
import tienich2 from "../image/tienich2.jpg"
import tienich3 from "../image/tienich3.jpg"
import tienich4 from "../image/tienich4.jpg"
import tienichsala from "../image/tienichsala.jpg"
import tienichngoaikhu from "../image/tienichngoaikhu.jpg"
const TienIch = () => {
    const Title = styled.h4`
        
        font-family: 'Oswald', sans-serif;
        text-align: center;
        padding: 0.5em;
        text-transform: uppercase;
        color: #2F6878;

    `
    return (
        <ContentComponent
          id="tienich"
          title="TIỆN ÍCH"
          h2ClassName="background-white"
        >
          <p>
            Tiện ích khu căn hộ Thủ Thiêm Zeit River được định hình là căn hộ
            tiêu chuẩn cao cấp 5* nên các tiện ích trong căn hộ Thủ Thiêm Zeit
            rất đẳng cấp, được tập đoàn GS E&C rất tâm huyết đầu tư và có thể
            nói là ” đo ni đóng giày” cho cư dân là những vị khách thành đạt và
            biết hưởng thụ cuộc sống nhất.
          </p>
          <ImageComponent url={picture1} />
          <p>
            Hơn 50 tiện ích đa dạng, phù hợp với nhiều lứa tuổi được tích hợp
            ngay trong dự án sẽ mang đến một không gian sống chuẩn 5 sao xứng
            tầm đẳng cấp dành cho những cư dân thượng lưu:
          </p>
          <p>
            <ul>
              <li>
                Công viên cây xanh mang đến cho cư dân những trải nghiệm giữa
                miền thiên nhiên thuần khiết
              </li>
              <li>
                Khu TTTM là tổ hợp kinh doanh hiện đại, cung cấp đầy đủ các dịch
                vụ mua sắm, giải trí, ẩm thực cho cư dân.
              </li>
              <li>
                Khu tiền sảnh lối với phong cách thiết kế sang trọng, tinh tế
                trong nội thất và không gian thoáng đãng
              </li>
              <li>
                Sảnh lounge đón khách 5 sao được thiết kế dành cho những buổi
                gặp mặt trang trọng
              </li>
              <li>
                Khu gym đẳng cấp nhất khu vực với những trang thiết bị hiện đại
              </li>
              <li>
                Spa cao cấp không chỉ giúp thư giãn mà còn nâng tầm sức khỏe và
                sắc đẹp của cư dân
              </li>
              <li>
                Hồ bơi tràn bờ chuẩn resort với khu nước ngọt và nước mặn đem
                lại những trải nghiệm thú vị
              </li>
              <li>
                An ninh 24/7, hệ thống phòng cháy chữa cháy hiện đại, camera
                quan sát các khu vực xung quanh 24/24
              </li>
            </ul>
          </p>
        <div className="row g-3 row-cols-2 d-flex align-items-center">
            <div className="col"><img className="img-fluid" src={tienich1} alt="" /></div>
            <div className="col"><img className="img-fluid" src={tienich2} alt="" /></div>
            <div className="col"><img className="img-fluid" src={tienich3} alt="" /></div>
            <div className="col"><img className="img-fluid" src={tienich4} alt="" /></div>
        </div>
        <Title>Tiện ích ngoại khu thủ thiêm Zeit River</Title>
        <p>
        Nằm tại trung tâm khu đô thị mới Thủ Thiêm, chưa nói đến những tiện ích, dịch vụ quốc tế tại nội khu dự án. Cư dân sống tại căn hộ Thủ Thiêm Zeit River có thể thừa hưởng những dịch vụ của các khu đô thị lớn xung quanh từ trường học quốc tế, bệnh viện quốc tế, nhà văn hóa trong khu đô thị Sala. Và nhiều tiện ích khác phục vụ nhu cầu sống chất lượng cho cư dân.
        </p>
        <ImageComponent
            url={tienichsala}
            quote="Liền kề khu đô thị Sala với đầy đủ tiện ích"
        />
        <p>
        Ngoài ra cũng phải nhắc đến đó là “hàng xóm” của dự án Zeit Xi Thủ Thiêm, nằm trên đại lộ Vòng Cung cũng như là trong Khu đô thị Mới Thủ Thiêm là những dự án đẳng cấp nhất Quận 2 cũng như là TP Hồ Chí Minh, thậm chí trong tương lai còn chính là biểu tượng của Sài Gòn như Empire City với tòa tháp Empire Tower 88 tầng sẽ phá kỷ lục của Landmark 81 về số tầng, hay dự án khu đô thị Sala Quận 2, The River Thủ Thiêm, The Metropole,…
        </p>
        <ImageComponent
        url={tienichngoaikhu}
        quote="Tiện ích ngoại khu dự án Thủ Thiêm Zeit River"
        />
        <p className="fw-bolder">Bên dưới là khoảng cách từ Thủ Thiêm Zeit River đến các tiện ích lân cận: </p>
        <p>
            <ul>
                <li>Landmark 81, 720A Điện Biên Phủ, Phường 22, Bình Thạnh: 2,7 km</li>
                <li>Hệ thống Trường Quốc tế Việt Úc – Cơ sở Sala, 10 Đường Mai Chí Thọ, Khu đô thị mới, Quận 2: 1,4km</li>
                <li>Vinhomes Golden River Sài Gòn, Bến Nghé, Quận 1: 2,9km</li>
                <li>Chợ Bến Thành, Đ. Lê Lợi, Phường Bến Thành, Quận 1: 4,9km</li>
                <li>Đến cao tốc TP Hồ Chí Minh – Long Thành – Dầu Giây: ĐCT01, An Phú, Quận 2: 5,2km</li>
            </ul>
        </p>
        </ContentComponent>
    )
}
export default TienIch;