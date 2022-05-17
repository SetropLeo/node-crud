import { Request, Response } from 'express';
import { CreateVideoService } from '../services/CreateVideoService';

export class CreateVideoController {
  async handle(request: Request, response: Response) {
    const { name, description, duration, category_id } = request.body;

    const service = new CreateVideoService();

    const result = await service.execute({
      name,
      description,
      category_id,
      duration,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}
