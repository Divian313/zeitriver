import ImageComponent from "../../ImageComponent/ImageComponent"
import ContentComponent from "../ContentComponent"
import IMGphoicanh from "../image/phoi-canh.jpg";
const GioiThieu = () => {
    return (
        <ContentComponent
          id="gioithieu"
          title="THỦ THIÊM ZEIT RIVER"
          h2ClassName="background-white"
        >
          <p>
            Thủ Thiêm Zeit River là dự án khu căn hộ cao cấp tại Quận 2, được
            xây dựng trên quỹ đất rộng 3,3ha với nhiều loại hình như căn hộ,
            officetel, căn trệt thương mại, trung tâm thương mại, bao gồm 2
            block căn hộ cao 25 tầng và 32 tầng (300 căn hộ hạng sang) và 2 dãy
            thấp tầng (4 tầng).
          </p>
          {/* <img className="container-fluid m-0 py-3" src={require("./components/Content/ContentComponent/image/phoi-canh.jpg")}/>
          <p className="text-center text-dark mt-2 fw-light fs-5"><em>Phối cảnh dự án Thủ Thiêm Zeit River</em></p>
           */}
          <ImageComponent
            url={IMGphoicanh}
            quote="Phối cảnh dự án Thủ Thiêm Zeit River"
          />
          <p>
            Là dự án căn hộ thứ 2 của Tập đoàn GS E&C tại TP. HCM sau khi triển
            khai rất thành công dự án Xi Riverview Thảo Điền. Thủ Thiêm Zeit
            River là dự án được đánh giá là siêu phẩm căn hộ hạng sang 6 sao
            danh giá bậc nhất khu vực Quận 2. Theo đó, cư dân khi sống trong khu
            vực sẽ được hưởng trọn những tiện ích nội ngoại khu tuyệt vời cùng
            không gian sống đẳng cấp, an ninh tốt.
          </p>
        </ContentComponent>
    )
}
export default GioiThieu;