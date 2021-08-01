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
            "detail": "<sport.detail>",
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
            "detail": "<sport.detail>",
        }
    ]
    ```

  - Request Params :

   ```json
    [
        {
            "name": "<sport.name>",
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
    ````

### GET /users/:id

### POST /users/update/:id

### POST /users/delete/:id


  - (403) : Invalid input

  ```json
  {
    "message": "<Invalid input>"
  }
  ```

  - (404) : User not found

  ```json
  {
    "message": "<User not found>"
  }
  ```

  - (500) : Internal Server Error

  ```json
  {
    "message": "<Internal Server Error>"
  }
  ```

### GET /users/:id

### POST /users/update/:id

### POST /users/delete/:id
