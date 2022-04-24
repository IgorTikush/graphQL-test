import { Injectable } from '@nestjs/common';
import { InjectRepository, Repository } from '@blendedbot/nest-couchdb';

import { Library } from '../couchDB/library';

const FIELDS_TO_RETURN: string[] = ['name', 'birthYear', 'country', '_id'];

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Library)
    private readonly libraryRepository: Repository<Library>,
  ) {}

  async findAll(limit: number, skip: number): Promise<Library[]> {
    const { docs } = await this.libraryRepository.find({
      selector: {
        type: { $eq: 'author'}
      },
      limit,
      skip,
      fields: FIELDS_TO_RETURN
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
}
