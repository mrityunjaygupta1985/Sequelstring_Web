import React, { useState } from "react";
import { ContactForm } from "molecules";
import { SuccessModal } from "molecules/Modals/SuccessModal";
import { WarningModal } from "molecules/Modals/WarningModal";

// Contact us

export const Contact = () => {
  const [isVisibleSuccess, setVisibleSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  return (
    <>
      <ContactForm
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

export default Contact;
