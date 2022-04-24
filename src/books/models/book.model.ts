import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Author } from '../../authors/models/author.model';

@ObjectType()
export class Book {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  year: number;

  @Field(() => Author)
  author: Author;
}
