### This assignment contains basic login and registration feature. The project is build using NodeJs, ReactJs and MongoDB.

## TechStack: 
<b> NodeJs, ReactJs, MongoDb, PostMan.</b>

## API:

* <b>register</b>- This api is used so that new user can register them on the application. This api takes email and password, password is stored in hashform in the db.
          
          curl --location --request POST 'http://127.0.0.1:3000/api/v1/user/register' \
            --header 'Content-Type: application/json' \
            --data-raw '{
                "email":"user4",
                "password":"user4"
            }'
* <b>login</b>- This api is used to login the user. This api take email and password and match it with the email and password stored in the database.

          curl --location --request POST 'http://127.0.0.1:3000/api/v1/user/login' \
          --header 'Content-Type: application/json' \
          --data-raw '{
              "email":"user4",
              "password":"user4"
          }'
* <b>reset</b>- This api is used to reset the password. This api takes email , old password and new password and. It first check the email and old password if its valid then 
          it update the password
          
          curl --location --request POST 'http://127.0.0.1:3000/api/v1/user/reset' \
          --header 'Content-Type: application/json' \
          --data-raw '{
              "email":"user4",
              "password":"user4",
              "updatePassword":"user400"
          }'
 
## Database:

<b>  MongoDb is used to store the user details. Use the mongodb atlas i.e the online db </b>

## FrontEnd:

<b>   Frontend is made using ReactJs and frontend. </b>

