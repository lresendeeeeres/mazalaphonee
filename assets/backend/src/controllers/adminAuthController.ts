import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../config/database';
import { authConfig } from '../config/auth';

export class AdminAuthController {
  public static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email e senha são obrigatórios.' });
      }

      const user = await prisma.adminUser.findUnique({
        where: { email: email.toLowerCase().trim() },
      });

      if (!user) {
        return res.status(401).json({ success: false, message: 'Email ou senha incorretos.' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ success: false, message: 'Email ou senha incorretos.' });
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
        authConfig.jwtSecret,
        { expiresIn: '7d' }
      );

      return res.status(200).json({
        success: true,
        message: 'Login realizado com sucesso!',
        data: {
          token,
          user: { id: user.id, email: user.email, name: user.name, role: user.role },
        },
      });
    } catch (error) {
      console.error('Erro no login administrativo:', error);
      return res.status(500).json({ success: false, message: 'Erro interno no servidor ao realizar login.' });
    }
  }

  public static async verifyToken(req: Request, res: Response) {
    return res.status(200).json({
      success: true,
      message: 'Sessão ativa e válida.',
      user: (req as any).user,
    });
  }
}
