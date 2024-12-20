import { z } from 'zod';

export const enum SupportedLanguages {
  AR_AR = 'ar',
  EN_EN = 'en',
}

export const languageSchema = z.enum([
  SupportedLanguages.EN_EN,
  SupportedLanguages.AR_AR,
]);

export type Language = z.infer<typeof languageSchema>;
