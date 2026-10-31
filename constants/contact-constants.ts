import {
  type ContactField,
  type ContactFormData,
} from "@/types/contact-types";

export const INITIAL_FORM_STATE: ContactFormData = {
  name: "",
  email: "",
  budget: "",
  message: "",
};

export const REQUIRED_FIELDS: ContactField[] = ["name", "email", "message"];

// This is a conversation context selector, not a quote or pricing promise.
export const BUDGET_OPTIONS = [
  { value: "idea", label: "Exploring an idea" },
  { value: "prototype", label: "Early prototype" },
  { value: "product", label: "Building a product" },
  { value: "feedback", label: "Feedback / collaboration" },
  { value: "other", label: "Something else" },
] as const;

export const ALERT_DURATION = 5000;

export const CONTACT_SUCCESS_MESSAGE =
  "Message submitted. Thanks for reaching out to Ryzent.";
export const CONTACT_ERROR_MESSAGE =
  "Something went wrong. Please try again.";