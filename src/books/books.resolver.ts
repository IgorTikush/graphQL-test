import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { Book } from './models/book.model';
import { BooksService } from './books.service';
import { AuthorsService } from '../authors/authors.service';

@Resolver(() => Book)
export class BooksResolver {
  constructor(
    private booksService: BooksService,
    private authorService: AuthorsService,
  ) {}
  @Query(() => Book)
  async getBook(@Args('_id', { type: () => String }) _id: string) {
    return this.booksService.findOneById(_id);
  }

  @Query(() => [Book])
  async getAllBooks(
    @Args('limit', { type: () => Int }) limit: number,
    @Args('skip', { type: () => Int }) skip: number
  ) {
    return this.booksService.findAll(limit, skip);
  }

  @Query(() => Book)
  async getBookByName(@Args('name', { type: () => String }) name: string) {
    return this.booksService.findBookByName(name);
  }

  @ResolveField(() => [Book])
  async author(@Parent() book: Book) {
    const { author } = book;
    return this.authorService.findOneById(author);
  }
}
