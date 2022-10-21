import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/Banner";
import Content3 from "./components/Content/Content3";
import ContentComponent from "./components/Content/ContentComponent/ContentComponent";
import Header from "./components/Header/Header";
import Table from "./components/Content/Table/Table";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Content3>
        <ContentComponent id="tongquan">
          <div className="row">
            <div className="col col-lg-7 col-12">
              <Table/>
            </div>
            <div className="col col-lg-5 col-12">
              <img
                className="img-fluid"
                src={require("./image/tong-quan.jpg")}
              ></img>
            </div>
          </div>
        </ContentComponent>
        <ContentComponent
          id="gioithieu"
          noidung="check"
          h2ClassName="background-zeit"
        />
        <ContentComponent id="vitri" noidung="check" h2ClassName="" />
        <ContentComponent id="tienich" wrapClassName="wrap-gray" />
        <ContentComponent id="matbang" />
        <ContentComponent id="giaban" />
        <ContentComponent id="tiendo" />
        <ContentComponent id="tintuc" />
        <ContentComponent id="lienhe" />
      </Content3>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
