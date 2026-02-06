import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env';

const app = express();

// Middlewares de Sécurité
app.use(helmet()); // Protège les headers HTTP
app.use(cors({ origin: '*' })); // À restreindre à ton domaine frontend plus tard
app.use(express.json()); // Pour lire le JSON dans les requêtes

// Route de test santé
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', uptime: process.uptime() });
});

export default app;