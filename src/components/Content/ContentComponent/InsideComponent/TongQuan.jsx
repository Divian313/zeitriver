import Table from "../../Table/Table";
import ContentComponent from "../ContentComponent";

const TongQuan = () => {
    return (
        <ContentComponent
          id="tongquan"
          title="TỔNG QUAN"
          h2ClassName="background-white"
        >
          <div className="row d-flex align-items-center">
            <div className="col col-lg-7 col-12">
              <Table/>
            </div>
            <div className="col col-lg-5 col-12">
              <img
                className="img-fluid mt-5 mt-lg-0 "
                src={require("../image/tong-quan.jpg")}
              ></img>
            </div>
          </div>
        </ContentComponent>
    )
}
export default TongQuan;