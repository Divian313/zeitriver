import "./Content3.css"
const Content3 = (props) => {
  return (
    <div>
      <div id="list-example" class="list-group">
        <a class="rounded-circle p-1 me-1 mb-3 list-group-item list-group-item-action" href="#list-item-1">
          
        </a>
        <a class="rounded-circle p-1 me-1 mb-3 list-group-item list-group-item-action" href="#list-item-2">
         
        </a>
        <a class="rounded-circle p-1 me-1 mb-3 list-group-item list-group-item-action" href="#list-item-3">
          
        </a>
        <a class="rounded-circle p-1 me-1 mb-3 list-group-item list-group-item-action" href="#list-item-4">
          
        </a>
      </div>

      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-smooth-scroll="true"
        class="scrollspy-example"
        tabindex="0"
      >
        
      </div>
      {props.children}
        {/* <h4 id="list-item-1">Item 1</h4>
        <p>check </p>
        <h4 id="list-item-2">Item 2</h4>
        <p>check </p>
        <h4 id="list-item-3">Item 3</h4>
        <p>check </p>
        <h4 id="list-item-4">Item 4</h4>
        <p>check </p> */}
    </div>
  );
};
export default Content3;
