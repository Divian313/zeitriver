import underline from "./image/underline.png"
import "./ContentComponent.css";
const ContentComponent = (props) => {
  const h2Classes = "text-center py-2 mt-5 fontTitle " + props.h2ClassName;
  const wrapClasses = "container-fluid " + props.wrapClassName
  return (
    <div className={wrapClasses}>
      <div></div>
      <div style={{maxWidth: 1100}} className="container pt-1 mt-0">
        <h2 className={h2Classes} id={props.id}>
          {props.title}
        </h2>
        <div className="text-center m-4">
        <img style={{width:80}} src={underline}></img>
        </div>
        
        {props.children}
      </div>
    </div>
  );
};
export default ContentComponent;
