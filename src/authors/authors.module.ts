import { Module } from '@nestjs/common';
import { CouchDbModule } from '@blendedbot/nest-couchdb';

import { AuthorsResolver } from './authors.resolver';
import { Library } from '../couchDB/library';
import { AuthorsService } from './authors.service';
import { BooksModule } from '../books/books.module';
import { BrowserController } from "./authos.controller";

@Module({
  imports: [CouchDbModule.forFeature([Library]), BooksModule],
  providers: [AuthorsService, AuthorsResolver],
  controllers: [BrowserController],
  exports: [AuthorsService],
})
export class AuthorsModule {}
