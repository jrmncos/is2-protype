import React from "react";
import ContentLoader from "react-content-loader";

export default function Loader(){
  return(
    <ContentLoader 
      speed={2}
      width={750}
      height={550}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="18" rx="2" ry="2" width="800" height="10" /> 
      <rect x="0" y="34" rx="2" ry="2" width="800" height="10" /> 
      <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
    </ContentLoader>
  )
}