import { Response, Request } from "express";
import { UpdateBookService } from "../services/UpdateBookService";


export class UpdateBookController {
  constructor(private updateBookService: UpdateBookService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, bar_code } = request.body;
    const { id } = request.params;

    try {
      const data = await this.updateBookService.execute(id, {
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