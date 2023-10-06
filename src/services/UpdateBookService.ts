import { IBook } from "../dtos/Book";
import { IBookRepository } from "../repositories/IBookRepository";


export class UpdateBookService {
  constructor(private bookRepository: IBookRepository) {}

  async execute(id: string, data: IBook): Promise<IBook| Error> {
    const bookExists = await this.bookRepository.findById(id)

    if (!bookExists) {
      throw new Error("Book does not exists.");
    }
    const book = await this.bookRepository.update(id, data);
    return book
  }
}