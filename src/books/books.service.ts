import { Injectable } from '@nestjs/common';
import { InjectRepository, Repository } from '@blendedbot/nest-couchdb';

import { Library } from '../couchDB/library';

const FIELDS_TO_RETURN: string[] = ['name', 'year', 'author'];

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Library)
    private readonly libraryRepository: Repository<Library>,
  ) {}

  async findAll(limit: number, skip: number): Promise<Library[]> {
    const { docs } = await this.libraryRepository.find({
      selector: {
        // type: { $eq: 'book'}
      },
      limit,
      skip,
      // fields: FIELDS_TO_RETURN
    });

    return docs;
  }

  async findOneById(_id): Promise<Library> {
    const { docs } = await this.libraryRepository.find({
      selector: {
        _id: { $eq: _id }
      },
      fields: FIELDS_TO_RETURN
    });

    const [result] = docs;
    return result;
  }

  async findBookByName(name: string): Promise<Library> {
    const { docs } = await this.libraryRepository.find({
      selector: {
        name: { $eq: name }
      },
      fields: FIELDS_TO_RETURN
    });

    const [result] = docs;
    return result;
  }

  async findAllByAuthor(authorId: string): Promise<Library[]> {
    const { docs } = await this.libraryRepository.find({
      selector: {
        type: { $eq: 'book' },
        author: { $eq: authorId }
      },
      fields: FIELDS_TO_RETURN
    });

    return docs;
  }
}
