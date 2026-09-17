export interface ContactFormData {
  name: string;
  organization: string;
  email: string;
  phone?: string;
  areaOfInterest: 
    | "AI Solutions"
    | "Healthcare Solutions"
    | "Research Collaboration"
    | "Digital Transformation"
    | "Partnership"
    | "General Inquiry";
  message: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  submissionId?: string;
  error?: string;
}

/**
 * Service handler for submitting contact form requests.
 * Standardized API abstraction allowing seamless backend integration.
 */
export async function submitContactForm(data: ContactFormData): Promise<ContactSubmissionResult> {
  // Validate basic required fields
  if (!data.name || !data.email || !data.message || !data.organization) {
    return {
      success: false,
      message: "Please fill out all required fields.",
      error: "MISSING_REQUIRED_FIELDS",
    };
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      message: "Please provide a valid email address.",
      error: "INVALID_EMAIL",
    };
  }

  try {
    // In production, this call connects to your backend API endpoint e.g., `/api/contact`
    // Simulated realistic network latency for UI state verification:
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Simulated successful response object:
    return {
      success: true,
      message: "Thank you for contacting ORNIX. Our healthcare technology team will respond shortly.",
      submissionId: `ORNIX-REQ-${Date.now().toString().slice(-6)}`,
    };
  } catch (err: unknown) {
    return {
      success: false,
      message: "An unexpected error occurred while processing your request. Please try again.",
      error: err instanceof Error ? err.message : "UNKNOWN_ERROR",
    };
  }
}
