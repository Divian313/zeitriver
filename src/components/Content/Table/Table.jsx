import styles from "./Table.module.css";
const Table = () => {
  const dataTable = {
    vitri: "– Lô 3.11 KĐT Mới Thủ Thiêm, TP Thủ Đức, TP Hồ Chí Minh",
    tongdientich: '9.125,8 ha',
    matdoxaydung: '18.5%',
    chudautu: <img style={{width:100}} src={require("./GS-EC.jpg")} alt="" />,
    thietke: {
      kientruc: 'MAP HANTERIN VINA E&C',
      canhquan: 'LAND SCULPTOR',
      noithat: 'KUBO VINA',
    },
    soluongcanho: '– 300 Căn',
    phankhuchucnang: ['2 Tháp Căn Hộ Cao Cấp - Tháp T1: Cao 25 Tầng & Tháp T2: Cao 32 Tầng','Khu vực khối đế - Gồm Shophouse, TTTM, Nhà phố kết hợp cảnh quan sân vườn, và một số tiện ích tại tầng trệt'],
    khuvucdauxe: ['Gồm 2 tầng hầm: Với 470 chỗ đậu xe hơi và 283 chỗ đậu xe máy.', 'Tỷ lệ diện chỗ đậu xe hơi/căn hộ: 1.5'],
    thoigianbangiao: '– Quý 4/2024',
    sdt: '0909116262'

  };

  return (
    <div className={styles.wrap}>
      <table class={`${styles["table-tongquan"]} + table + container-fluid`}>
        <thead>
          <tr>
            <th scope="col">TÊN DỰ ÁN</th>
            <th scope="col">THỦ THIÊM ZEIT RIVER</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Vị trí dự án</th>
            <td>{dataTable.vitri}</td>
          </tr>
          <tr>
            <th scope="row">Tổng diện tích</th>
            <td>{dataTable.tongdientich}</td>
          </tr>
          <tr>
            <th scope="row">Mật độ xây dựng</th>
            <td>{dataTable.matdoxaydung}</td>
          </tr>
          <tr>
            <th scope="row">Chủ đầu tư</th>
            <td>{dataTable.chudautu}</td>
          </tr>
          <tr>
            <th scope="row">Thiết kế</th>
            <td>
              <ul>
                <li><h5>Thiết kế kiến trúc: </h5>{dataTable.thietke.kientruc}</li>
                <li><h5>Thiết kế cảnh quan: </h5>{dataTable.thietke.canhquan}</li>
                <li><h5>Thiết kế nội thất: </h5>{dataTable.thietke.noithat}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Số lượng căn hộ</th>
            <td>{dataTable.soluongcanho}</td>
          </tr>
          <tr>
            <th scope="row">Phân khu chức năng</th>
            <td>
              <ul>
                <li>{dataTable.phankhuchucnang[0]}</li>
                <li>{dataTable.phankhuchucnang[1]}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Khu vực đậu xe</th>
            <td>
              <ul>
                <li>{dataTable.khuvucdauxe[0]}</li>
                <li>{dataTable.khuvucdauxe[1]}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Thời gian bàn giao</th>
            <td><h5>{dataTable.thoigianbangiao}</h5></td>
          </tr>
          <tr>
            <th scope="row">Liên hệ tư vấn</th>
            <td>{dataTable.sdt}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
