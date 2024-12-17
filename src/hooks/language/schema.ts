import { z } from 'zod';

export const enum SupportedLanguages {
  AR_AR = 'ar-AR',
  EN_EN = 'en-EN',
}

export const languageSchema = z.enum([
  SupportedLanguages.EN_EN,
  SupportedLanguages.AR_AR,
]);

export type Language = z.infer<typeof languageSchema>;
