import React from "react";
function Li(props) {
  function handleClick() {
    props.onchecked(props.id);
  }
  console.log();
  return (
    <div onClick={handleClick}>
      <li>{props.item}</li>
    </div>
  );
}
export default Li;
