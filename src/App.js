
import IMGvitrizeitriver from "./components/Content/ContentComponent/image/vi-tri-zeit-river.jpg"
import IMGphoicanh from "./components/Content/ContentComponent/image/phoi-canh.jpg"
import IMGbando from "./components/Content/ContentComponent/image/zeit-river-location.jpg"
import IMGbando2 from "./components/Content/ContentComponent/image/zeit-river-location-2.jpg"
import IMGlocation1 from "./components/Content/ContentComponent/image/location-1-vi.jpg"
import IMGlocation2 from "./components/Content/ContentComponent/image/location-2-vi.jpg"
import IMGlocation3 from "./components/Content/ContentComponent/image/location-3-vi.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/Banner";
import Content3 from "./components/Content/Content3";
import ContentComponent from "./components/Content/ContentComponent/ContentComponent";
import Header from "./components/Header/Header";
import Table from "./components/Content/Table/Table";
import ImageComponent from "./components/Content/ImageComponent/ImageComponent";
import Vitri from "./components/Content/Vitri-Component/Vitri-Component";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Content3>
        {/* Tổng quan */}
        <ContentComponent id="tongquan" title="TỔNG QUAN" h2ClassName="background-white">
          <div className="row d-flex align-items-center">
            <div className="col col-lg-7 col-12">
              <Table />
            </div>
            <div className="col col-lg-5 col-12">
              <img
                className="img-fluid mt-5 mt-lg-0 "
                src={require("./image/tong-quan.jpg")}
              ></img>
            </div>
          </div>
        </ContentComponent>
        {/* Giới thiệu */}
        <ContentComponent
          id="gioithieu"
          title="THỦ THIÊM ZEIT RIVER"
          h2ClassName="background-white"
        >
          <p>
          Thủ Thiêm Zeit River là dự án khu căn hộ cao cấp tại Quận 2, được xây dựng trên quỹ đất rộng 3,3ha với nhiều loại hình như căn hộ, officetel, căn trệt thương mại, trung tâm thương mại, bao gồm 2 block căn hộ cao 25 tầng và 32 tầng (300 căn hộ hạng sang) và 2 dãy thấp tầng (4 tầng).
          </p>
          {/* <img className="container-fluid m-0 py-3" src={require("./components/Content/ContentComponent/image/phoi-canh.jpg")}/>
          <p className="text-center text-dark mt-2 fw-light fs-5"><em>Phối cảnh dự án Thủ Thiêm Zeit River</em></p>
           */}
          <ImageComponent
          url={IMGphoicanh}
          quote="Phối cảnh dự án Thủ Thiêm Zeit River"
          />
          <p>Là dự án căn hộ thứ 2 của Tập đoàn GS E&C tại TP. HCM sau khi triển khai rất thành công dự án Xi Riverview Thảo Điền. Thủ Thiêm Zeit River là dự án được đánh giá là siêu phẩm căn hộ hạng sang 6 sao danh giá bậc nhất khu vực Quận 2. Theo đó, cư dân khi sống trong khu vực sẽ được hưởng trọn những tiện ích nội ngoại khu tuyệt vời cùng không gian sống đẳng cấp, an ninh tốt.</p>
        </ContentComponent>
        {/* Vị trí */}
        
        <ContentComponent id="vitri" title="VỊ TRÍ" h2ClassName="background-white"
        wrapClassName="wrap-white"
        >
          <p>Vị trí dự án Thủ Thiêm Zeit River nằm trên đường Nguyễn Cơ Thạch, phường An Khánh, Quận 2, TP. Thủ Đức, TP. Hồ Chí Minh, là con đường xuyên tâm, kết nối quan trọng của khu đô thị Thủ Thiêm, kết nối Quận 7 với Bình Thạnh qua cầu Thủ Thiêm 1 và 4.</p>
          <ImageComponent
            url={IMGvitrizeitriver}
          />
          <p>Theo quy hoạch thì vị trí dự án Thủ Thiêm Zeit River được quy hoạch trên 3 lô đất 3.3, 3.7 và 3.11 thuộc khu chức năng số 3, Khu đô thị mới Thủ Thiêm với tổng diện tích 33.282 m2; trong đó lô 3.1 có diện tích 16.283.5 m2, lô 3.7 diện tích 7.872,7 m2 và lô 3.11 diện tích 9.125,8 m2.</p>
          <Vitri
          picture={IMGbando}
          picture2={IMGbando2}
          location1={IMGlocation1}
          location2={IMGlocation2}
          location3={IMGlocation3}

          />
        </ContentComponent>
        <ContentComponent />
        <ContentComponent id="matbang" />
        <ContentComponent id="giaban" />
        <ContentComponent id="tiendo" />
        <ContentComponent id="tintuc" />
        <ContentComponent id="lienhe" />
      </Content3>
      
    </div>
  );
}

export default App;
