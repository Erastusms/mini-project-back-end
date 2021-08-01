# API DOCUMENTATION

Mini Project Back-End is a Website of Registration Tokyo Olympics 2020

## Tokyo Olympics 2020

RESTFul Endpoints

### GET /country

Get all Country

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    [
      {
        "id": "<country.id>",
        "name": "<country.name>",
        "code": "<country.password>",
        "flagImage": "<country.flagImage>",
        "updatedAt": "<country.updatedAt>",
        "createdAt": "<country.createdAt>"
      }
    ]
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### GET /country/add

GET page add Country

- Request

  - Request Header : none
  - Request Body : none

  ```json
  {
    "email": "<country.email>",
    "password": "<country.password>"
  }
  ```

- Response

  - (200) :

    ```json
    {
      "message": "<ok>"
    }
    ```

### POST /country/add

POST add Country

- Request

  - Request Header : none
  - Request Body :

  ```json
  {
    "name": "<country.name>"
  }
  ```

- Response

  - (201) :

    ```json
    {
      "message": "<created>"
    }
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### GET /country/delete/:id

GET delete Country by id

- Request

  - Request Header : none
  - Request Body : none
  - Request Params :

  ```json
  {
    "id": "<country.id>"
  }
  ```

- Response

  - (200) :

    ```json
    {
      "message": "<ok>"
    }
    ```

  - (400) :

    ```json
    {
      "message": "<Id failed to remove>"
    }
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### GET /sport

Get all Sport

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    [
      {
        "id": "<sport.id>",
        "name": "<sport.name>",
        "logo": "<sport.logo>",
        "status": "<sport.status>",
        "venue": "<sport.venue>",
        "updatedQuota": "<sport.updatedQuota>",
        "quota": "<sport.quota>",
        "day": "<sport.day>",
        "date": "<sport.date>",
        "detail": "<sport.detail>",
        "updatedAt": "<sport.updatedAt>",
        "createdAt": "<sport.createdAt>"
      }
    ]
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### GET /sport/detail/:sportName

Get detail Sport by sportName

- Request

  - Request Header : none
  - Request Body : none
  - Request Params :

  ```json
  {
    "name": "<sport.name>"
  }
  ```

- Response

  - (200) :

    ```json
    {
      "message": "<ok>"
    }
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### GET /sport/delete/:id

Get delete Sport by id

- Request

  - Request Header : none
  - Request Body : none
  - Request Params :

  ```json
  {
    "id": "<sport.id>"
  }
  ```

- Response

  - (200) :

    ```json
    {
      "message": "<ok>"
    }
    ```

  - (400) :

    ```json
    {
      "message": "<Id failed to remove>"
    }
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### GET /sport/admin

Get all Sport with button edit

- Request

  - Request Header : none
  - Request Body : none

- Response

  - (200) :

    ```json
    {
      "message": "<ok>"
    }
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### GET /sport/admin/add

GET page add Sport

- Request

  - Request Header : none
  - Request Body : none

- Response

  - (200) :

    ```json
    {
      "message": "<ok>"
    }
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### POST /sport/admin/add

POST add Sport

- Request

  - Request Header : none
  - Request Body :

  ```json
  [
    {
      "name": "<sport.name>",
      "logo": "<sport.logo>",
      "venue": "<sport.venue>",
      "quota": "<sport.quota>",
      "day": "<sport.day>",
      "date": "<sport.date>",
      "detail": "<sport.detail>"
    }
  ]
  ```

- Response

  - (201) :

    ```json
    {
      "message": "<created>"
    }
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### GET /sport/admin/edit/:sportName

Get page edit Sport

- Request

  - Request Header : none
  - Request Body : none
  - Request Params :

    ```json
    {
      "name": "<sport.name>"
    }
    ```

- Response

  - (200) :

    ```json
    {
      "message": "<ok>"
    }
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### POST /sport/admin/edit/:sportName

POST edit Sport

- Request

  - Request Header : none
  - Request Body :

  ```json
  [
    {
      "name": "<sport.name>",
      "logo": "<sport.logo>",
      "venue": "<sport.venue>",
      "quota": "<sport.quota>",
      "day": "<sport.day>",
      "date": "<sport.date>",
      "detail": "<sport.detail>"
    }
  ]
  ```

  - Request Params :

  ```json
  [
    {
      "name": "<sport.name>"
    }
  ]
  ```

- Response

  - (200) :

    ```json
    {
      "message": "<ok>"
    }
    ```

  - (400) :

    ```json
    {
      "message": "<sport_name failed to update>"
    }
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### GET /athlete

GET all Athlete

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    [
      {
        "id": "<athlete.id>",
        "firstName": "<athlete.firstName>",
        "lastName": "<athlete.lastName>",
        "gender": "<athlete.gender>",
        "age": "<athlete.age>",
        "CountryId": "<athlete.CountryId>",
        "SportId": "<athlete.SportId>"
      }
    ]
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### GET /athlete/:countryName

GET all Athlete by countryName

- Request

  - Request Header : none
  - Request Body : none
  - Request Params :

    ```json
    [
      {
        "name": "<country.name>"
      }
    ]
    ```

- Response

  - Success (200)

    ```json
    [
      {
        "id": "<athlete.id>",
        "firstName": "<athlete.firstName>",
        "lastName": "<athlete.lastName>",
        "gender": "<athlete.gender>",
        "age": "<athlete.age>",
        "CountryId": "<athlete.CountryId>",
        "SportId": "<athlete.SportId>"
      }
    ]
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### GET /athlete/:countryName/add

GET page add Athlete by countryName

- Request

  - Request Header : none
  - Request Body : none
  - Request Params :

    ```json
    {
      "name": "<country.name>"
    }
    ```

- Response

  - (200) :

    ```json
    {
      "message": "<ok>"
    }
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### POST /athlete/:countryName/add

POST add Athlete by countryName

- Request

  - Request Header : none
  - Request Body :

  ```json
  [
    {
      "firstName": "<athlete.firstName>",
      "lastName": "<athlete.lastName>",
      "gender": "<athlete.gender>",
      "age": "<athlete.age>",
      "name": "<sport.name>"
    }
  ]
  ```

  - Request Params :

  ```json
  [
    {
      "name": "<country.name>"
    }
  ]
  ```

- Response

  - (201) :

    ```json
    {
      "message": "<created>"
    }
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### GET /athlete/:countryName/sport

GET sport Athlete by countryName

- Request

  - Request Header : none
  - Request Body : none

  - Request Params :

  ```json
  [
    {
      "name": "<country.name>"
    }
  ]
  ```

- Response

  - (200) :

    ```json
    {
      "message": "<ok>"
    }
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### GET /athlete/participant/:sportName

GET participant Athlete by sportName

- Request

  - Request Header : none
  - Request Body : none

  - Request Params :

  ```json
  [
    {
      "name": "<sport.name>"
    }
  ]
  ```

- Response

  - (200) :

    ```json
    {
      "message": "<ok>"
    }
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### GET /athlete/edit/:id

GET page edit Athlete by id

- Request

  - Request Header : none
  - Request Body : none

  - Request Params :

  ```json
  [
    {
      "id": "<athlete.id>"
    }
  ]
  ```

- Response

  - (200) :

    ```json
    {
      "message": "<ok>"
    }
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### POST /athlete/edit/:id

POST edit Athlete by id

- Request

  - Request Header : none
  - Request Body :

  ```json
  [
    {
      "firstName": "<athlete.firstName>",
      "lastName": "<athlete.lastName>",
      "gender": "<athlete.gender>",
      "age": "<athlete.age>",
      "name": "<sport.name>"
    }
  ]
  ```

  - Request Params :

  ```json
  [
    {
      "id": "<athlete.id>"
    }
  ]
  ```

- Response

  - (200) :

    ```json
    {
      "message": "<ok>"
    }
    ```

  - (400) :

    ```json
    {
      "message": "<id failed to update>"
    }
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```

### GET /athlete/delete/:id

GET delete Athlete by id

- Request

  - Request Header : none
  - Request Body : none
  - Request Params :

  ```json
  [
    {
      "id": "<athlete.id>"
    }
  ]
  ```

- Response

  - (200) :

    ```json
    {
      "message": "<ok>"
    }
    ```

  - (400) :

    ```json
    {
      "message": "<id failed to remove>"
    }
    ```

  - Failure (500) :

    ```json
    {
      "message": "<internal_server_error>"
    }
    ```
