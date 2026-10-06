import dotenv from 'dotenv';
dotenv.config();

export const authConfig = {
  jwtSecret: process.env.JWT_SECRET || 'mazala_phone_default_jwt_secret_2026',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  adminEmail: process.env.ADMIN_DEFAULT_EMAIL || 'mazalaphone@gmail.com',
  adminPassword: process.env.ADMIN_DEFAULT_PASSWORD || 'leopopa046',
  whatsappPhone: process.env.WHATSAPP_PHONE || '5532988547377',
};
