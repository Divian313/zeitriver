import ImageComponent from "../../ImageComponent/ImageComponent";
import Vitri from "../../Vitri-Component/Vitri-Component";
import ContentComponent from "../ContentComponent";
import IMGvitrizeitriver from "../image/vi-tri-zeit-river.jpg";


import IMGbando from "../image/zeit-river-location.jpg";
import IMGbando2 from "../image/zeit-river-location-2.jpg";
import IMGlocation1 from "../image/location-1-vi.jpg";
import IMGlocation2 from "../image/location-2-vi.jpg";
import IMGlocation3 from "../image/location-3-vi.jpg";
const Location = ()=> {
    return (
        <ContentComponent
          id="vitri"
          title="VỊ TRÍ"
          h2ClassName="background-white"
          wrapClassName="wrap-white"
        >
          <p>
            Vị trí dự án Thủ Thiêm Zeit River nằm trên đường Nguyễn Cơ Thạch,
            phường An Khánh, Quận 2, TP. Thủ Đức, TP. Hồ Chí Minh, là con đường
            xuyên tâm, kết nối quan trọng của khu đô thị Thủ Thiêm, kết nối Quận
            7 với Bình Thạnh qua cầu Thủ Thiêm 1 và 4.
          </p>
          <ImageComponent url={IMGvitrizeitriver} />
          <p>
            Theo quy hoạch thì vị trí dự án Thủ Thiêm Zeit River được quy hoạch
            trên 3 lô đất 3.3, 3.7 và 3.11 thuộc khu chức năng số 3, Khu đô thị
            mới Thủ Thiêm với tổng diện tích 33.282 m2; trong đó lô 3.1 có diện
            tích 16.283.5 m2, lô 3.7 diện tích 7.872,7 m2 và lô 3.11 diện tích
            9.125,8 m2.
          </p>
          <Vitri
            picture={IMGbando}
            picture2={IMGbando2}
            location1={IMGlocation1}
            location2={IMGlocation2}
            location3={IMGlocation3}
          />
        </ContentComponent>
    )
}
export default Location;