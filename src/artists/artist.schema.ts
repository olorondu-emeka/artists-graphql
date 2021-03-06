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

  type ArtistWithAlbums {
    ArtistId: Int!
    Name: String!
    Albums: [Album]!
  }

  type ArtistUpdated {
      action: String!
      payload: Artist!
  }

  input QueryParam {
    limit: Int
    offset: Int
  }

  input UpdateArtistDTO {
    artistId: Int!
    name: String!
  }
`;

export default artistSchema;
