export type ConsultationFormState =
  | {
      message: string;
      errors?: {
        name?: string[];
        company?: string[];
        email?: string[];
        message?: string[];
      };
      success: boolean;
    }
  | undefined;
