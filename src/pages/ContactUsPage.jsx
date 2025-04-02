import React, { Suspense } from "react";

import MasterLayout from "../components/MasterLayout/MasterLayout";
import Contact from "../components/basicComponent/contact"; // Capitalized

const ContactUsPage = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense fallback={<p>Loading...</p>}>
          <Contact /> {/* Capitalized usage */}
        </Suspense>

        {/* Footer */}
        <footer></footer>
      </MasterLayout>
    </div>
  );
};

export default ContactUsPage;
