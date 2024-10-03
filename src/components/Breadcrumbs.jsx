import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const pathNames = pathname.split("/").filter((x) => x);
  console.log(pathNames);
  let breadcrumbpath = "";
  return (
    <div className="breadcrumbs">
      {pathNames.length > 0 && <Link to="/">Home</Link>}
      {pathNames.map((path, index) => {
        breadcrumbpath += `/${path}`;
        const isLast = index === pathNames.length - 1;
        return isLast ? (
          <span key={breadcrumbpath}>/ {path}</span>
        ) : (
          <span>
            <Link to={breadcrumbpath} key={breadcrumbpath}>
              / {path}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
