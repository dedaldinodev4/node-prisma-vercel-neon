import { Response, Request } from "express";
import { CreateBookService } from "../services/CreateBookService";


export class CreateBookController {
  constructor(private createBookService: CreateBookService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, bar_code } = request.body;

    try {
      const data = await this.createBookService.execute({
        title, description, bar_code
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}