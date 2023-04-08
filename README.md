# Request A Song API

This is a simple API built to expose song information. It is built using Nest JS. 

## Available Endpoints 

### GET /songs/all

Returns a list of all available songs 

Example query:

```
/songs/all
```

### GET /songs/search

Returns songs where the song name or artist match the query param used in the request. 

Example query: 

```
/songs/search?query=clapton
```
