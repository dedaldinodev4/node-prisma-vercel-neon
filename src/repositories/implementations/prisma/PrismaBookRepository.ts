import { prismaClient } from "../../../database/PrismaClient";
import { IBook } from "../../../dtos/Book";
import { IBookRepository } from "../../IBookRepository";


export class PrismaBookRepository implements IBookRepository {
  private _repository = prismaClient.book;

  //* Create an book *//
  async create(data: IBook): Promise<IBook | Error> {
    const bookExists = await this._repository.findFirst({
      where: { bar_code: data.bar_code }
    });

    if (bookExists) {
      throw new Error("Book already exists.");
    }

    const book = await this._repository.create({
      data
    });

    return book;
  }

  //* Query all books *//
  async findAll(): Promise<IBook[]> {
    const books = await this._repository.findMany({});
    return books ?? [];
  }

  //* Query a book where Id *//
  async findById(id: string): Promise<IBook | null> {
    const book = await this._repository.findFirst({
      where: { id }
    });

    return book ?? null;
  }

  //* Query a book where Id *//
  async findByBarCode(bar_code: string): Promise<IBook | null> {
    const book = await this._repository.findFirst({
      where: { bar_code }
    });

    return book ?? null;
  }
  
  //* Update an book *//
  async update(id: string, data: IBook): Promise<IBook | Error> {
    const bookExists = await this._repository.findFirst({
      where: { id }
    });

    if (!bookExists) {
      throw new Error("Book does not exists.");
    }
    const book = await this._repository.update({
      data,
      where: { id }
    })
    return book;
  }
  
  //* Query a book where Id *//
  async delete(id: string): Promise<void> {
    const bookExists = await this._repository.findFirst({
      where: { id }
    });

    if (!bookExists) {
      throw new Error("Book does not exists.");
    }
  }


}