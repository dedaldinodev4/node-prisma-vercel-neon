import { Router, request, response } from 'express'
import { createBookFactory, deleteBookFactory, findAllBooksFactory, updateBookFactory } from '../controllers';

const routes = Router();
const bookRoutes = Router();

bookRoutes.route("/")
  .post((request, response) => {
    return createBookFactory().handle(request, response)
  })
  .get((request, response) => {
    return findAllBooksFactory().handle(request, response)
  })

bookRoutes.route("/:id")
  .get((request, response) => {
    return findAllBooksFactory().handle(request, response)
  })
  .put((request, response) => {
    return updateBookFactory().handle(request, response)
  })
  .delete((request, response) => {
    return deleteBookFactory().handle(request, response)
  })




routes.use("/api/v1/books", bookRoutes)
export { routes }



  

