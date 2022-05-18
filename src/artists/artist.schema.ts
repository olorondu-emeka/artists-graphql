const artistSchema = `
  type Artist {
    ArtistId: Int!
    Name: String!
  }

  type Album {
    AlbumId: Int!
    Title: String!
    ArtistId: String!
  }

  type QueryParam {
    limit: Int
    offset: Int
  }

  input UpdateArtistDTO {
    artistId: Int!
    name: String!
  }
`;

export default artistSchema;
