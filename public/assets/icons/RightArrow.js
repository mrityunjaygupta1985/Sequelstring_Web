import * as React from "react";

function RightArrow(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 45.015 22.628"
      fill="none"
      {...props}
    >
      <path
        id="Icon_ionic-md-arrow-forward"
        data-name="Icon ionic-md-arrow-forward"
        d="M-5.051,18.7h38.79l-9.055,7.92,2.345,1.98L39.964,17.291,27.029,5.977l-2.263,1.98,8.974,7.92H-5.051Z"
        transform="translate(5.051 -5.977)"
        fill="currentColor"
      />

      {/* <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 34.688a16.188 16.188 0 100-32.376 16.188 16.188 0 000 32.376zM18.5 0a18.5 18.5 0 110 37 18.5 18.5 0 010-37zm8.095 17.344a1.157 1.157 0 010 2.312H13.198l4.965 4.963a1.158 1.158 0 01-1.637 1.637L9.59 19.32a1.157 1.157 0 010-1.638l6.937-6.937a1.158 1.158 0 111.637 1.637l-4.965 4.963h13.397z"
        fill="currentColor"
      /> */}
    </svg>
  );
}

const MemoRightArrow = React.memo(RightArrow);
export default MemoRightArrow;
