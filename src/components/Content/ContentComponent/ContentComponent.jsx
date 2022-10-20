import "./ContentComponent.css"
const ContentComponent = (props) => {
  const h2Classes = 'text-center py-2 ' + props.h2ClassName
  return (
    <div className="container p-0" >      
      <h2 className={h2Classes} id={props.id}>{props.title}</h2>
      <p>{props.noidung}</p>
      {props.children}
    </div>
  );
};
export default ContentComponent;
