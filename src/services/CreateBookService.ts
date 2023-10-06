import { IBook } from "../dtos/Book";
import { IBookRepository } from "../repositories/IBookRepository";


export class CreateBookService {
  constructor(private bookRepository: IBookRepository) {}

  async execute(data: IBook): Promise<IBook| Error> {
    const bookExists = await this.bookRepository.findByBarCode(data.bar_code)

    if (bookExists) {
      throw new Error("Book already exists.");
    }
    const book = await this.bookRepository.create(data);
    return book
  }
}