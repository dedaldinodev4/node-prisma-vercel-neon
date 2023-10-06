import { IBook } from "../dtos/Book";

export interface IBookRepository {
  create(data: IBook): Promise<IBook|Error>
  findAll(): Promise<IBook[]>
  findById(id: string): Promise<IBook|null>
  findByBarCode(bar_code: string): Promise<IBook|null>
  update(id: string, data: IBook): Promise<IBook|Error>
  delete(id: string): Promise<void>
} 