const defaultQuery = `
query($queryParam: QueryParam){
    getArtists(queryParam: $queryParam){
        ArtistId,
        Name,
        Albums{
            AlbumId,
            Title
        }
    }
}

mutation($body: UpdateArtistDTO!) { 
    updateArtistName(body: $body) {
       Name,
    }
}

`;

export default defaultQuery;
