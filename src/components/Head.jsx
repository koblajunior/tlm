import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Head = ({ ...props }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{props.title ? props.title + " - " : null} The Love Masterclass</title>
      </Helmet>
    </HelmetProvider>
  );
};
export default Head;