import { Controller, Get } from "@nestjs/common";
import { BooksService } from "../books/books.service";

@Controller('browser')
export class BrowserController {
  constructor(
    private readonly booksService: BooksService
  ) {}

  @Get('browser')
  getAll() {
    return this.booksService.findAll(150, 0);
  }
}
