# moneylion-test

## Usage
`npm i`

`npm start` - default port: 8000

`npm test`

# Technical Assessment

## User story:
As Product Manager, I would like to manage users’ accesses to new features via feature switches,
i.e. enabling/disabling certain feature based on a user’s email and feature names).

## Requirements:
* GET /feature?email=XXX&featureName=XXX  
    This endpoint receives  email  (user’s email) and  featureName  as request parameters and
returns the following response in JSON format.
Example Response:
```
{
    canAccess : true|false
}
```

* POST /feature  
This endpoint receives the following request in JSON format and returns an empty
response with HTTP Status OK (200) when the database is updated successfully, otherwise 304
```
{ 
    "featureName": "xxx", (string) 
    "email": "xxx", (string) (user's name) 
    "enable": true|false (boolean) (uses true to enable a user's access)
}
```