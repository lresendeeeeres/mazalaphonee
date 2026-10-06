import { authConfig } from '../config/auth';

export interface WhatsAppLeadPayload {
  desiredProduct: string;
  storage: string;
  color?: string;
  price: number;
  usedModel?: string;
  batteryHealth?: string;
  evaluationValue?: number;
  differenceToPay?: number;
  coupon?: string;
}

export class WhatsAppService {
  public static generateLeadUrl(payload: WhatsAppLeadPayload): string {
    const phone = authConfig.whatsappPhone;
    let message = `Olá Mazala Phone! 👋\n\n`;
    message += `📱 *Tenho interesse no:* ${payload.desiredProduct}\n`;
    message += `💾 *Capacidade:* ${payload.storage}\n`;
    if (payload.color) {
      message += `🎨 *Cor:* ${payload.color}\n`;
    }
    message += `💰 *Valor à vista:* R$ ${payload.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;

    if (payload.usedModel && payload.evaluationValue && payload.differenceToPay !== undefined) {
      message += `\n🔄 *SIMULAÇÃO DE TROCA (TRADE-IN):*\n`;
      message += `▫️ *Meu aparelho atual:* ${payload.usedModel}\n`;
      if (payload.batteryHealth) {
        message += `▫️ *Saúde da Bateria:* ${payload.batteryHealth}\n`;
      }
      message += `▫️ *Avaliação estimada do usado:* R$ ${payload.evaluationValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      message += `▫️ *Diferença estimada a pagar:* R$ ${payload.differenceToPay.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
    }

    if (payload.coupon) {
      message += `\n🏷️ *Cupom aplicado:* ${payload.coupon}\n`;
    }

    message += `\n🛡️ *Confirmação:* Gostaria de confirmar a disponibilidade com 1 ano de garantia real e entrega VIP em Cataguases e Região!`;

    const encoded = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encoded}`;
  }
}
