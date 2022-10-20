import "./Content3.css";
const Content3 = (props) => {
  return (
    <div>
      <div id="list-example" class="list-group">
        <a
          class="rounded-circle p-1 me-1 mb-3 list-group-item list-group-item-action"
          href="#gioithieu"
        ></a>
        <a
          class="rounded-circle p-1 me-1 mb-3 list-group-item list-group-item-action"
          href="#vitri"
        ></a>
        <a
          class="rounded-circle p-1 me-1 mb-3 list-group-item list-group-item-action"
          href="#tienich"
        ></a>
        <a
          class="rounded-circle p-1 me-1 mb-3 list-group-item list-group-item-action"
          href="#matbang"
        ></a>
        <a
          class="rounded-circle p-1 me-1 mb-3 list-group-item list-group-item-action"
          href="#giaban"
        ></a>
        <a
          class="rounded-circle p-1 me-1 mb-3 list-group-item list-group-item-action"
          href="#tiendo"
        ></a>
        <a
          class="rounded-circle p-1 me-1 mb-3 list-group-item list-group-item-action"
          href="#tintuc"
        ></a>
        <a
          class="rounded-circle p-1 me-1 mb-3 list-group-item list-group-item-action"
          href="#lienhe"
        ></a>
      </div>

      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-smooth-scroll="true"
        class="scrollspy-example"
        tabindex="0"
      ></div>
      {props.children}
      
    </div>
  );
};
export default Content3;
