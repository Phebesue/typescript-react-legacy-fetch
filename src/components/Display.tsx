import React, { FunctionComponent } from "react";

type AcceptedProps = {

  temp: number;
};

const Display: FunctionComponent<(AcceptedProps)> = (props) => {
  return (
  <div>

<h3>Temp in F: {props.temp}</h3>
<h3></h3>
<h3></h3>
<h3></h3>
  </div>
  )
};
export default Display;
