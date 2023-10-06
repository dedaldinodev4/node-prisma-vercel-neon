import { IBook } from "../dtos/Book";
import { IBookRepository } from "../repositories/IBookRepository";


export class DeleteBookService {
  constructor(private bookRepository: IBookRepository) {}

  async execute(id: string): Promise<void| Error> {
    const bookExists = await this.bookRepository.findById(id)

    if (!bookExists) {
      throw new Error("Book does not exists.");
    }
    const book = await this.bookRepository.delete(id);
    return book
  }
}