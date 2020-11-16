import React, { forwardRef } from "react";
import "./Work.scss";

const Work = forwardRef((props: any, ref: any) => {
    return (
        <section className="Work" ref={ref}>
            <h1>Work</h1>
        </section>
    );
});

export default Work;
