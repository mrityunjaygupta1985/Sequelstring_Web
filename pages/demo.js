import React, { useState } from "react";
import { RequestDemo } from "molecules";
import { SuccessModal } from "molecules/Modals/SuccessModal";
import { WarningModal } from "molecules/Modals/WarningModal";

export const Demo = () => {
  const [isVisibleSuccess, setVisibleSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  return (
    <>
      <RequestDemo
        setWarning={setWarning}
        setVisibleSuccess={setVisibleSuccess}
      />

      {isVisibleSuccess && (
        <SuccessModal
          isOpen={isVisibleSuccess}
          onRequestClose={() => setVisibleSuccess(false)}
        />
      )}
      {warning && (
        <WarningModal
          isOpen={warning}
          onRequestClose={() => setVisibleSuccess(false)}
        />
      )}
    </>
  );
};

export default Demo;
