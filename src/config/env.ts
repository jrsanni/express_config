import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.string().default('3000'),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32, "Le secret JWT doit faire au moins 32 caractères"),
  // Ajoute tes futurs services ici
  // MAIL_HOST: z.string(),
});

export const env = envSchema.parse(process.env);