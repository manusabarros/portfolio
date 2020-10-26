import React, { forwardRef } from "react";
import "./Contact.scss";

const Contact = forwardRef((props: any, ref: any) => {
    return <section className="Contact" ref={ref}></section>;
});

export default Contact;
