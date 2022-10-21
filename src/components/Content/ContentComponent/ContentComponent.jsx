import "./ContentComponent.css";
const ContentComponent = (props) => {
  const h2Classes = "text-center py-2 " + props.h2ClassName;
  const wrapClasses = "container-fluid " + props.wrapClassName
  return (
    <div className={wrapClasses}>
      <div className="container p-0 mt-0">
        <h2 className={h2Classes} id={props.id}>
          {props.title}
        </h2>
        <p>{props.noidung}</p>
        {props.children}
      </div>
    </div>
  );
};
export default ContentComponent;
