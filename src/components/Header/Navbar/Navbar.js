import "./Navbar.css"
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            
            <li class="nav-item">
              <a class="nav-link" href="#">
                Giới thiệu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Vị trí
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Tiện ích
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Mặt bằng
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Giá bán
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Tiến độ
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Tin tức
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Liên hệ
              </a>
            </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
