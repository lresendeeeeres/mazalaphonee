import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const frontendPath = path.resolve(__dirname, '../../');
app.use(express.static(frontendPath));

const adminStaticPath = path.resolve(__dirname, '../public/admin');
app.use('/admin', express.static(adminStaticPath));

app.use('/api', apiRoutes);

app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(adminStaticPath, 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`
  ======================================================
  🚀 Servidor MAZALA PHONE Ativo com Sucesso!
  ======================================================
  🌐 Vitrine Oficial:    http://localhost:${PORT}
  🔒 Painel do Lojista:  http://localhost:${PORT}/admin
  📡 API RESTful:        http://localhost:${PORT}/api
  🛡️ Admin Padrão:       mazalaphone@gmail.com
  ======================================================
  `);
});
