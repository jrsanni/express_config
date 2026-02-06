import app from './app';
import { env } from './config/env';
import { prisma } from './config/db';

const start = async () => {
  try {
    await prisma.$connect();
    console.log('🚀 Connexion à la base de données réussie');
    
    app.listen(env.PORT, () => {
      console.log(`📡 Serveur EasyCar démarré sur le port ${env.PORT}`);
    });
  } catch (error) {
    console.error('❌ Erreur au démarrage :', error);
    process.exit(1);
  }
};

start();