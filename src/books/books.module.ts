import { forwardRef, Module } from '@nestjs/common';
import { CouchDbModule } from '@blendedbot/nest-couchdb';

import { Library } from '../couchDB/library';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { AuthorsModule } from '../authors/authors.module';

@Module({
  imports: [CouchDbModule.forFeature([Library]), forwardRef(() => AuthorsModule)],
  providers: [BooksService, BooksResolver],
  exports: [BooksService]
})
export class BooksModule {}
