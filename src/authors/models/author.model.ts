import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Book } from '../../books/models/book.model';

@ObjectType()
export class Author {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  birthYear: number;

  @Field(() => String)
  country: string;

  @Field(() => [Book])
  books: Book[];
}
