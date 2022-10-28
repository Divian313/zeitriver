import styled from "styled-components";
const Wrap = styled.div`
  margin-top: 15px;
  border: 2px solid #2f6878;
  border-radius: 30px;
  padding: 6px;
  color: #2f6878;
  font-weight: 600;
  font-family: "Oswald", sans-serif;
`;
const Vitri = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-8 col-12">
          <img className="img-fluid" src={props.picture} alt="" srcset="" />
        </div>
        <div className="col-lg-4 col-12 h-50">
          <img
            className="img-fluid w-100"
            src={props.picture2}
            alt=""
            srcset=""
          />
          <Wrap>
            <ul>
              <li className="my-3">
                Dự án Thủ Thiêm Zeit tọa lạc tại 3 lô đất 3.3,3.7 và 3.11 thuộc
                khu chức năng số 3 trong khu đô thị mới thủ thiêm.
              </li>
              <li>
                Phân khu đầu tiên của dự án được phát triển trên lô đất 3.11 với
                tên gọi: “Thủ Thiêm ZEIT River”.
              </li>
            </ul>
          </Wrap>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-12"><img className="img-fluid" src={props.location1} alt="" srcset="" /></div>
        <div className="col-lg-4 col-12"><img className="img-fluid" src={props.location2} alt="" srcset="" /></div>
        <div className="col-lg-4 col-12"><img className="img-fluid" src={props.location3} alt="" srcset="" /></div>
      </div>
    </div>
  );
};
export default Vitri;
