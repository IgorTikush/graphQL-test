import { Entity, CouchDbEntity } from '@blendedbot/nest-couchdb';

@Entity('graphql-test')
export class Library extends CouchDbEntity {
  name: string;
  _id: string;
  type: string;
  author?: string;
  year?: number;
  birthYear?: number;
  country?: string;
}
