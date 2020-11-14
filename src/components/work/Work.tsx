import React, { forwardRef } from "react";
import "./Work.scss";

const Work = forwardRef((props: any, ref: any) => {
    return <section className="Work" ref={ref}></section>;
});

export default Work;
