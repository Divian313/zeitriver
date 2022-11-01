import ContentComponent from "../ContentComponent";
import thanhtoan1 from "./image/thanhtoan/thanhtoan1.jpg";
import thanhtoan2 from "./image/thanhtoan/thanhtoan2.jpg"
import styled from "styled-components";
const TienDoThanhToan = () => {
  const Devide = styled.div`
    margin: 1.7em 0;
    width: 100%;

    height: 2px;
    background-color: rgb(15, 85, 105);
  `;
  const Title = styled.h4`
    font-family: "Oswald", sans-serif;
    text-align: center;
    padding: 0.5em;
    text-transform: uppercase;
    color: #2f6878;
  `;
  return (
    <ContentComponent
      id="giaban"
      title="PHƯƠNG THỨC THANH TOÁN"
      h2ClassName="background-zeit"
      wrapClassName="wrap-gray"
    >
      <div className="bg-white p-3">
      <img className="img-fluid" src={thanhtoan1} alt="" srcset="" />
      {/* <div style="margin-top:1.7em;margin-bottom:1.7em;max-width:100%;height:2px;background-color:rgb(15, 85, 105);"></div> */}
      <Devide></Devide>
      <Title>6 LÝ DO NÊN SỞ HỮU THỦ THIÊM ZEIT RIVER!</Title>
      <img className="img-fluid" src={thanhtoan2} alt="" />
      <p>
      <ul>
          <li>Tọa lạc tại khu trung tâm Thủ Thiêm, vị trí độc tôn của sài gòn, trung tâm tài chính mới trong tương lai, đang được nhà nước tập trung phát triển.</li>
          <li>GS E&C là tập đoàn đa ngành quốc tế và là tập đoàn đứng đầu Hàn Quốc về cung cấp căn hộ, trung bình mỗi năm GS đưa ra thị trường 20,000 căn hộ.</li>
          <li>Bạn muốn sồng trong không gian như chiếc hộp hay bạn muốn thoát khỏi nó, tại Thuthiem Zeit River, thiết kế của chúng tôi đưa ánh sáng vào từng không gian sống.</li>
          <li>GS với nhiều năm kinh nghiệm về ứng dụng công nghệ thông minh một cách tiện nghi vào trong căn nhà bạn.</li>
          <li>Hiện dự án đả xây lên tới tầng 5, pháp lý rõ ràng và hoàn chỉnh.</li>
          <li>Tổng số sản phẩm là 300 căn, tổng số chỗ đâu xe ô tô là 470 chỗ.</li>
      </ul>
      </p>
      </div>
    </ContentComponent>
  );
};
export default TienDoThanhToan;
