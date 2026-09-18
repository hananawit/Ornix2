export interface ContactFormData {
  name: string;
  organization: string;
  email: string;
  phone?: string;
  areaOfInterest:
    | "AI Solutions"
    | "Sector Solutions"
    | "Digital Transformation"
    | "Partnership"
    | "Strategic Collaboration"
    | "General Inquiry";
  message: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  submissionId?: string;
  error?: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactSubmissionResult> {
  if (!data.name || !data.organization || !data.email || !data.message) {
    return {
      success: false,
      message: "Please fill out all required fields.",
      error: "MISSING_REQUIRED_FIELDS",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      message: "Please provide a valid email address.",
      error: "INVALID_EMAIL",
    };
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return {
        success: false,
        message:
          result.message ||
          "We could not send your inquiry right now. Please try again.",
        error: result.error,
      };
    }

    return {
      success: true,
      message: result.message,
      submissionId: result.submissionId,
    };
  } catch (error) {
    console.error("Contact submission error:", error);

    return {
      success: false,
      message:
        "Unable to connect to the contact service. Please try again.",
      error: "NETWORK_ERROR",
    };
  }
}