import { Response, Request } from "express";
import { DeleteBookService } from "../services/DeleteBookService";


export class DeleteBookController {
  constructor(private deleteBookService: DeleteBookService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const data = await this.deleteBookService.execute(id);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}