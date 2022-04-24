// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CouchDbModule } from '@blendedbot/nest-couchdb';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';

import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from "./books/books.module";


@Module({
  imports: [
    CouchDbModule.forRoot({
      url: process.env.DB_URL,
      username: process.env.DB_USERNAME,
      userpass: process.env.DB_PASSWORD,
      requestDefaults: { jar: true },
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    AuthorsModule,
    BooksModule,
  ],
})
export class AppModule {}
