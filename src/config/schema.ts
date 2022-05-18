import artistSchema from '../artists/artist.schema';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  ${artistSchema}

  type RootQuery {
    getArtists(queryParam: QueryParam): [ArtistWithAlbums]!
  }

  type RootMutation {
    updateArtistName(body: UpdateArtistDTO!): Artist
  }

  schema {
    query: RootQuery,
    mutation: RootMutation
  }
`);

export default schema;
