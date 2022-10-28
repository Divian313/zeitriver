import styled from "styled-components"
const Wrap = styled.div`
 
`
const ImageComponent = (props) => {
    return (
        <div>
             <img className="container-fluid m-0 py-4" src={props.url}></img>
             <p className="text-center text-dark fw-light fs-5"><em>{props.quote}</em></p>
          <p></p>             
        </div>
    )
}
export default ImageComponent;
