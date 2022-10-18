import "./Content.css";
const Content = () => {
  return (
    <div >
      <div
          id="simple-list-example"
          class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center"
        >
          
          <a class="p-1 rounded-circle" href="#simple-list-item-1">
            text
          </a>
          <a class="p-1 rounded-circle" href="#simple-list-item-2">
           check
          </a>
          <a class="p-1 rounded-circle" href="#simple-list-item-3">
            check
          </a>
          <a class="p-1 rounded-circle" href="#simple-list-item-4">
            check 
          </a>
          <a class="p-1 rounded-circle" href="#simple-list-item-5">
            check 
          </a>
        </div>

        <div class="container">
          <div
            data-bs-spy="scroll"
            data-bs-target="#simple-list-example"
            data-bs-offset="0"
            data-bs-smooth-scroll="true"
            class="scrollspy-example"
            tabindex="0"
          >
            <h4 id="item simple-list-item-1">Item 1</h4>
            <p> check</p>
            <h4 id="item simple-list-item-2">Item 2</h4>
            <p> check</p>
            <h4 id="item simple-list-item-3">Item 3</h4>
            <p> check</p>
            <h4 id="item simple-list-item-4">Item 4</h4>
            <p> check</p>
            <h4 id="item simple-list-item-5">Item 5</h4>
            <p> check</p>
          </div>
        </div>
    </div>
  );
};
export default Content;


