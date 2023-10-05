import { IBook } from "../dtos/Book";

export interface IBookRepository {
  create(data: IBook): Promise<IBook|Error>
  findAll(): Promise<IBook[]>
  findById(id: string): Promise<IBook|Error>
  update(id: string, data: IBook): Promise<IBook|Error>
  delete(id: string): Promise<void>
} 