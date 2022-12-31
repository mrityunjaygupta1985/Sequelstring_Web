import * as React from "react";

function Insta(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 19" fill="none" {...props}>
      <path
        d="M9.634 6.332A3.175 3.175 0 006.466 9.5a3.175 3.175 0 003.168 3.168A3.175 3.175 0 0012.802 9.5a3.175 3.175 0 00-3.168-3.168zM19.136 9.5c0-1.312.012-2.612-.062-3.921-.074-1.521-.42-2.871-1.533-3.984C16.427.481 15.08.136 13.558.062 12.246-.01 10.946.001 9.637.001 8.325 0 7.025-.011 5.715.062c-1.52.074-2.87.421-3.983 1.533C.618 2.71.273 4.058.2 5.58.126 6.89.138 8.19.138 9.5c0 1.31-.012 2.612.061 3.921.074 1.521.421 2.871 1.533 3.984 1.115 1.114 2.462 1.459 3.983 1.532 1.312.074 2.612.062 3.922.062 1.312 0 2.612.012 3.921-.061 1.521-.074 2.871-.421 3.983-1.533 1.115-1.115 1.46-2.463 1.533-3.984.076-1.31.062-2.61.062-3.921zm-9.502 4.874A4.868 4.868 0 014.76 9.5a4.868 4.868 0 014.874-4.874A4.867 4.867 0 0114.51 9.5a4.867 4.867 0 01-4.875 4.874zm5.074-8.81c-.63 0-1.138-.508-1.138-1.138 0-.63.509-1.138 1.138-1.138a1.137 1.137 0 01.806 1.943 1.136 1.136 0 01-.806.333z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoInsta = React.memo(Insta);
export default MemoInsta;