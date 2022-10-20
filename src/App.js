import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/Banner";
import Content3 from "./components/Content/Content3";
import ContentComponent from "./components/Content/ContentComponent/ContentComponent";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Content3>
        <ContentComponent>
          <div className="row">
            <div className="col col-lg-7 col-12">
              <table class="table border border-5 border-dark rounded-circle">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col col-lg-5 col-12">
              <img className="img-fluid" src={require('./image/tong-quan.jpg')}></img>
            </div>
          </div>
        </ContentComponent>
        <ContentComponent
          id="gioithieu"
          noidung="check"
          h2ClassName="background-zeit"
        />
        <ContentComponent id="vitri" noidung="check" h2ClassName="text-zeit" />
        <ContentComponent id="tienich" />
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
