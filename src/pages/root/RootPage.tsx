import React from "react";
import "./RootPage.scss";

const RootPage = ({ children }: any) => {
    document.title = children.type.name.split("Page")[0];

    return <div className="RootPage">{children}</div>;
};

export default RootPage;
