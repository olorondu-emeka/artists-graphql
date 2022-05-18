export interface Artist {
  ArtistId: number;
  Name: string;
}

export interface Album {
  AlbumId: number;
  Title: string;
  ArtistId: number;
}

export interface ArtistWithAlbums extends Artist {
  albums: Album[];
}
