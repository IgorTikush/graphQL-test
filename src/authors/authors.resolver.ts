import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { Author } from './models/author.model';
import { AuthorsService } from './authors.service';
import { BooksService } from '../books/books.service';
import { Book } from '../books/models/book.model';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private booksService: BooksService,
  ) {}

  @Query(() => Author)
  async getAuthor(@Args('_id', { type: () => String }) _id: string) {
    return this.authorsService.findOneById(_id);
  }

  @Query(() => [Author])
  async getAllAuthors(
    @Args('limit', { type: () => Int }) limit: number,
    @Args('skip', { type: () => Int }) skip: number
  ) {
    return this.authorsService.findAll(limit, skip);
  }

  @ResolveField(() => [Book])
  async books(@Parent() author: Author) {
    const { _id } = author;
    return this.booksService.findAllByAuthor(_id);
  }
}
