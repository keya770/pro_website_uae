export type ContactPayload = {
  fullName: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
};

export type EnquiryPayload = {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
  agree: boolean;
};

export type ValidationErrors<T> = Partial<Record<keyof T | "agree", string>>;

const emailRegex = /^[\w.-]+@[\w-]+\.[\w.-]+$/;
const phoneRegex = /^\+?[\d\s-]{6,20}$/;

const isEmpty = (value?: string) => !value || value.trim().length === 0;

const validateEmail = (email: string) => emailRegex.test(email.trim());
const validatePhone = (phone?: string) => !phone || phoneRegex.test(phone.trim());

export function validateContactPayload(
  payload: ContactPayload
): { valid: boolean; errors: ValidationErrors<ContactPayload> } {
  const errors: ValidationErrors<ContactPayload> = {};

  if (isEmpty(payload.fullName)) {
    errors.fullName = "Full name is required.";
  }

  if (!validateEmail(payload.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!validatePhone(payload.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (isEmpty(payload.message)) {
    errors.message = "Message is required.";
  }

  if (isEmpty(payload.service)) {
    errors.service = "Select a service.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

export function validateEnquiryPayload(
  payload: EnquiryPayload
): { valid: boolean; errors: ValidationErrors<EnquiryPayload> } {
  const errors: ValidationErrors<EnquiryPayload> = {};

  if (isEmpty(payload.fullName)) {
    errors.fullName = "Full name is required.";
  }

  if (!validateEmail(payload.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!validatePhone(payload.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (isEmpty(payload.message)) {
    errors.message = "Message is required.";
  }

  if (isEmpty(payload.service)) {
    errors.service = "Service selection is required.";
  }

  if (!payload.agree) {
    errors.agree = "You must agree to the terms.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
