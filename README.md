# artists-graphql
A GraphQL API for the artists project .

## Brief Description
artists-graphql is a simple project that demonstrates the capabilities of graphql (query, mutation & subscription). It has the following features:

- The ability to query all artists and the albums for each artist
- The ability to update an artist's name
- The ability to subscribe to changes to an individual artist


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for testing purposes.

### Prerequisites
System requirements for this project to work includes:
- Node.js( >= v14)
- Node Package Manager (NPM) or yarn
- Git
- Typescript globally installed

### Installation
To install the dependencies in the package.json file, run the following command: 

```bash
yarn install
```

### Running the project
To run the project on your local machine, run the command below on your computer's terminal:  


```bash
yarn start
```

The project can be tested with the GraphiQL User Interface, which can be accessed in the browser via the URL: http://localhost:4000/graphql

## Manual Testing
The project can be manually tested on the **Graphiql interface** (see section above) or on **Postman** by making a `POST` request to: http://localhost:4000/graphql. The following will be helpful options for the request body:
- query

```js
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
```

- mutation
```js
 mutation($body: UpdateArtistDTO!) { 
        updateArtistName(body: $body) {
           Name,
        }
    }
```

- subscription
```js
subscription{
    artistUpdated{
        action,
        payload{
            ArtistId,
            Name
        }
    }
}
```

- graphql variables
```json
{
    "queryParam": {
       "limit": 15,
       "offset": 0
    },
    "body": {
        "name": "Adam Smith",
        "artistId": 5
    }
}
```

## Built With
- [Express](https://expressjs.com/) - The Node.js web framework used
- [Typescript](https://www.typescriptlang.org/) - The language used
- [GraphQL](https://graphql.org/) - The API query language
- [Yarn](https://yarnpkg.com/) - Package Manager for Node.js



