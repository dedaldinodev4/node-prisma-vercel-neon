import { Response, Request } from "express";
import { FindAllBooksService } from "../services/FindAllBooksService";


export class FindAllBooksController {
  constructor(private findAllBooksService: FindAllBooksService) {}

  async handle(request: Request, response: Response): Promise<Response> {
   
    try {
      const data = await this.findAllBooksService.execute();
      return response.status(200).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}