import { IBook } from "../dtos/Book";
import { IBookRepository } from "../repositories/IBookRepository";


export class FindBookByIdService {
  constructor(private bookRepository: IBookRepository) {}

  async execute(id: string): Promise<IBook| Error> {
    const book = await this.bookRepository.findById(id)

    if (!book) {
      throw new Error("Book does not exists.");
    }
    return book;
  }
}