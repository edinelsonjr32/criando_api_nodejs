import { z } from 'zod'
import dotenv from 'dotenv'

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config()

// Define o schema de validação para as variáveis de ambiente
const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().default(3333),
  HOST: z.string().default('0.0.0.0'),
  DATABASE_URL: z.string(),
  // Adicione outras variáveis de ambiente conforme necessário
})

// Valida as variáveis de ambiente
const env = envSchema.safeParse(process.env)

if (!env.success) {
  console.error('❌ Variáveis de ambiente inválidas:', env.error.format())
  throw new Error('Variáveis de ambiente inválidas')
}

// Exporta as variáveis de ambiente validadas
export const envVariables = env.data
