import * as React from "react";

function CloseIcon() {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 17.625L2 2.625M17 2.625L2 17.625"
        stroke="#000000"
        strokeWidth="2.44898"
        strokeLinecap="square"
      />
    </svg>
  );
}

const MemoCloseIcon = React.memo(CloseIcon);
export default MemoCloseIcon;
