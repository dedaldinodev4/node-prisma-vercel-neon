import { Response, Request } from "express";
import { FindBookByIdService } from "../services/FindBookByIdService";


export class FindBookByIdController {
  constructor(private findBookByIdService: FindBookByIdService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const data = await this.findBookByIdService.execute(id);

      return response.status(200).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}