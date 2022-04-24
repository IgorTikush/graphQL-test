import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CouchDbModule } from '@blendedbot/nest-couchdb';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from "./books/books.module";


@Module({
  imports: [
    CouchDbModule.forRoot({
      url: 'http://localhost:5984',
      username: 'admin',
      userpass: 'olupor28',
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
