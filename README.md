# GameDar

* To run backend code:
* Git clone code to local machine
* cd to new folder
* run:  npm install
* modify the /config/config.json to have your username (most likely root), password, database.
* run:  node server
* you should see:  App listening on PORT 8080
* 
* To test APIs in Postman
* Get Courts
* Operation should be GET
* URL:  localhost:8080/api/courts
* Press "Send"
* Response should be:  []    *Because there are no courts yet.  All data will be wiped out everytime you restart the server
* 
* Create Court
* Operation should be POST
* URL:  localhost:8080/api/courts
* Body:
* Select "Raw"
* On the last droplist select JSON(application/json)
* In big text area Paste:
* {
*     "courtName": "Oso Grande Elementary",
*     "description": "2 full courts with 8 foot rims"
* }
* Press "Send"
* This should create a new court.  Response should be:
* {
*     "id": 1,
*     "courtName": "Oso Grande Elementary",
*     "description": "2 full courts with 8 foot rims",
*     "updatedAt": "2019-09-02T00:35:43.050Z",
*     "createdAt": "2019-09-02T00:35:43.050Z"
* }
* Now if you go back and run
* Get Courts
* Operation should be GET
* URL:  localhost:8080/api/courts
* Press Send
* Response should be:
* [
*     {
*         "id": 1,
*         "courtName": "Oso Grande Elementary",
*         "description": "2 full courts with 8 foot rims",
*         "createdAt": "2019-09-02T00:35:43.000Z",
*         "updatedAt": "2019-09-02T00:35:43.000Z"
*     }
* ]
