import styles from "./Banner.module.css"
import banner from "./bannerFinal.jpg"
const Banner = () => {
    return (
        <div className={`${styles.banner} + "container-fluid text-center p-0"` }>
            <img className="img-fluid p-0" src={banner} alt="" srcset="" />
        </div>
    )
}
export default Banner;