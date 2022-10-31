import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/Banner";
import Content3 from "./components/Content/Content3";
import ContentComponent from "./components/Content/ContentComponent/ContentComponent";
import Header from "./components/Header/Header";
import TongQuan from "./components/Content/ContentComponent/InsideComponent/TongQuan";
import GioiThieu from "./components/Content/ContentComponent/InsideComponent/GioiThieu";
import Location from "./components/Content/ContentComponent/InsideComponent/Location";
import TienIch from "./components/Content/ContentComponent/InsideComponent/TienIch";
import MatBang from "./components/Content/ContentComponent/InsideComponent/MatBang";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Content3>
        {/* Tổng Quan */}
        <TongQuan />
        {/* Giới thiệu */}
        <GioiThieu />
        {/* Vị trí */}
        <Location />
        {/* Tiện ích */}
        <TienIch/>
        {/* Mặt bằng */}
        <MatBang/>


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
