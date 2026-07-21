import React from "react";
import ContactHero from "./contact/ContactHero";
import ContactForm from "./contact/ContactForm";

/**
 * Contact — the Contact page (Figma frame "Contact", node 62:161).
 *
 * The previous version of this file paired a boxed form with a column of
 * address / phone / email rows. In the redesign those details live in the
 * global footer, so the page is just the hero and the message card; the
 * dark-variant Navbar and Footer render globally in App.tsx.
 *
 * The Google Apps Script submission is unchanged — see ContactForm for the
 * field mapping and why it still posts through a hidden iframe.
 */
export default function Contact() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <ContactHero />
      <ContactForm />
    </div>
  );
}
