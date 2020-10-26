import React, { forwardRef } from "react";
import "./Services.scss";

const Services = forwardRef((props: any, ref: any) => {
    return <section className="Services" ref={ref}></section>;
});

export default Services;
