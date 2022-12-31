import * as React from "react";

function Linkedin(props) {
  return (
    <svg
      width={props.width ? props.width : "1em"}
      height={props.height ? props.height : "1em"}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.174 1.974c0-.426.167-.834.465-1.135.299-.3.703-.47 1.125-.47H17.61a1.575 1.575 0 011.125.47 1.605 1.605 0 01.466 1.135v16a1.62 1.62 0 01-.465 1.136 1.59 1.59 0 01-1.125.47H1.763a1.577 1.577 0 01-1.125-.47 1.605 1.605 0 01-.465-1.136v-16zm7.532 5.72h2.576V9c.372-.75 1.323-1.427 2.753-1.427 2.741 0 3.39 1.496 3.39 4.24v5.085h-2.773v-4.459c0-1.563-.372-2.445-1.316-2.445-1.31 0-1.856.95-1.856 2.445v4.459H7.706V7.694zm-4.758 9.084h2.775V7.573H2.948v9.205zM6.12 4.571a1.817 1.817 0 01-.508 1.3 1.784 1.784 0 01-1.276.541 1.77 1.77 0 01-1.275-.541 1.803 1.803 0 01-.509-1.3c.01-.47.203-.919.537-1.248a1.776 1.776 0 012.495 0c.333.33.526.777.536 1.248z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoLinkedin = React.memo(Linkedin);
export default MemoLinkedin;
