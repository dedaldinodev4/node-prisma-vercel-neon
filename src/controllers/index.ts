import { PrismaBookRepository } from "../repositories/implementations/prisma/PrismaBookRepository";

import { CreateBookController } from "./CreateBookController";
import { CreateBookService } from "../services/CreateBookService";

import { UpdateBookController } from "./UpdateBookController";
import { UpdateBookService } from "../services/UpdateBookService";

import { FindAllBooksController } from "./FindAllBooksController";
import { FindAllBooksService } from "../services/FindAllBooksService";

import { FindBookByIdController } from "./FindBookByIdController";
import { FindBookByIdService } from "../services/FindBookByIdService";

import { DeleteBookController } from "./DeleteBookController";
import { DeleteBookService } from "../services/DeleteBookService";


export const createBookFactory = () => {
  const prismaBookRepository = new PrismaBookRepository();
  const createBookService = new CreateBookService(prismaBookRepository);
  const createBookController = new CreateBookController(createBookService);

  return createBookController
}

export const updateBookFactory = () => {
  const prismaBookRepository = new PrismaBookRepository();
  const updateBookService = new UpdateBookService(prismaBookRepository);
  const updateBookController = new UpdateBookController(updateBookService);

  return updateBookController
}

export const findBookByIdFactory = () => {
  const prismaBookRepository = new PrismaBookRepository();
  const findBookByIdService = new FindBookByIdService(prismaBookRepository);
  const findBookByIdController = new FindBookByIdController(findBookByIdService);

  return findBookByIdController
}

export const findAllBooksFactory = () => {
  const prismaBookRepository = new PrismaBookRepository();
  const findAllBooksService = new FindAllBooksService(prismaBookRepository);
  const findAllBooksController = new FindAllBooksController(findAllBooksService);

  return findAllBooksController
}


export const deleteBookFactory = () => {
  const prismaBookRepository = new PrismaBookRepository();
  const deleteBookService = new DeleteBookService(prismaBookRepository);
  const deleteBookController = new DeleteBookController(deleteBookService);

  return deleteBookController
}
