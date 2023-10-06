import { IBook } from "../dtos/Book";
import { IBookRepository } from "../repositories/IBookRepository";


export class FindAllBooksService {
  constructor(private bookRepository: IBookRepository) {}

  async execute(): Promise<IBook[]> {
    const books = await this.bookRepository.findAll();
    return books
  }
}