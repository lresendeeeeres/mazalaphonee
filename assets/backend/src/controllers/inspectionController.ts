import { Request, Response } from 'express';
import { prisma } from '../config/database';

export class InspectionController {
  // Criar ou atualizar laudo técnico vinculado ao IMEI
  public static async saveReport(req: Request, res: Response) {
    try {
      const {
        inventoryItemId,
        technicianName,
        screenOriginal,
        trueToneActive,
        faceIdActive,
        camerasTested,
        audioMicrophoneOk,
        chargingWirelessOk,
        housingGrade,
        batteryPercentage,
        batteryOriginal,
        warrantyPeriodMonths,
        notes,
      } = req.body;

      if (!inventoryItemId || batteryPercentage === undefined) {
        return res.status(400).json({ success: false, message: 'ID do item do estoque e saúde da bateria são obrigatórios.' });
      }

      const report = await prisma.inspectionReport.upsert({
        where: { inventoryItemId },
        update: {
          technicianName: technicianName || 'Técnico Especialista Mazala',
          screenOriginal: screenOriginal !== undefined ? Boolean(screenOriginal) : true,
          trueToneActive: trueToneActive !== undefined ? Boolean(trueToneActive) : true,
          faceIdActive: faceIdActive !== undefined ? Boolean(faceIdActive) : true,
          camerasTested: camerasTested !== undefined ? Boolean(camerasTested) : true,
          audioMicrophoneOk: audioMicrophoneOk !== undefined ? Boolean(audioMicrophoneOk) : true,
          chargingWirelessOk: chargingWirelessOk !== undefined ? Boolean(chargingWirelessOk) : true,
          housingGrade: housingGrade || 'Grade A+',
          batteryPercentage: Number(batteryPercentage),
          batteryOriginal: batteryOriginal !== undefined ? Boolean(batteryOriginal) : true,
          warrantyPeriodMonths: warrantyPeriodMonths ? Number(warrantyPeriodMonths) : 12,
          notes: notes || null,
        },
        create: {
          inventoryItemId,
          technicianName: technicianName || 'Técnico Especialista Mazala',
          screenOriginal: screenOriginal !== undefined ? Boolean(screenOriginal) : true,
          trueToneActive: trueToneActive !== undefined ? Boolean(trueToneActive) : true,
          faceIdActive: faceIdActive !== undefined ? Boolean(faceIdActive) : true,
          camerasTested: camerasTested !== undefined ? Boolean(camerasTested) : true,
          audioMicrophoneOk: audioMicrophoneOk !== undefined ? Boolean(audioMicrophoneOk) : true,
          chargingWirelessOk: chargingWirelessOk !== undefined ? Boolean(chargingWirelessOk) : true,
          housingGrade: housingGrade || 'Grade A+',
          batteryPercentage: Number(batteryPercentage),
          batteryOriginal: batteryOriginal !== undefined ? Boolean(batteryOriginal) : true,
          warrantyPeriodMonths: warrantyPeriodMonths ? Number(warrantyPeriodMonths) : 12,
          notes: notes || null,
        },
      });

      return res.status(200).json({
        success: true,
        message: 'Laudo técnico pericial salvo com sucesso!',
        data: report,
      });
    } catch (error) {
      console.error('Erro ao emitir laudo:', error);
      return res.status(500).json({ success: false, message: 'Erro ao emitir laudo pericial.' });
    }
  }

  // Obter laudo para exibição pública no modal do frontend
  public static async getReportByInventoryId(req: Request, res: Response) {
    try {
      const { inventoryItemId } = req.params;
      const report = await prisma.inspectionReport.findUnique({
        where: { inventoryItemId },
        include: {
          inventoryItem: {
            include: { product: true },
          },
        },
      });

      if (!report) {
        return res.status(404).json({ success: false, message: 'Laudo técnico não encontrado para este aparelho.' });
      }

      return res.status(200).json({ success: true, data: report });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao buscar laudo pericial.' });
    }
  }
}
