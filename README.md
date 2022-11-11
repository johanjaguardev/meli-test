MELI Test

1. Make an basic API App with node and Express.js
   (1-feature-basic-api)

2. Make a real api with meli data in node and express (using tdd in point 4)
   (2-meli-api)

   2.0 docs for meli api
   2.1 using env variables to set up name and lastname for author
   2.2 create fake data for json database by files
   2.3 read data from fake db - READ Action and tested with postman
   2.4 transform the request to read the info from DB, item with id
   2.4.1 adding "/items/:id/description" endpoint to the same item get action
   2.5 transform the get request to read the info from DB and expose results endpoint

3. create frontend app with vite + react + typescript
   3.1 create frontend start project with vite ts react
   3.2 create first react component
   3.2.1 create first tdd test with vitest working
   3.3 implement React router basic
   3.4 making some css
   3.5 passing props between searchbox and results and detail components
   3.6 connecting with backend
   3.7 write first component home with all the results
   3.8 write component results with query in searchbox
   3.9 write detail component with if from results

4. breadcumb
   4.1 fill the categories array in backend
5. limit to 4 results
6. json author signature
7. add redirect action to enter key in search
8. beauty not found component
9. CSS - pixel perfect
   8.1 Searchbar component css
   8.2 css Item
   8.3 CSS Detail
   8.4 CSS Breadcumb
   8.5 css Results
10. fix Bugfix
11. include features \*
12. Unit test
13. test in vercel

bugfix

## Solved:

bug0: picture loading from api route - solved
bug1: change redirect with window href location with react router 6 alternative - solved
bug2: Each child in a list should have a unique "key" prop. - Check the render method of `Results`. - solved
bug7: first make an research that matches only with 1 result, after that try to come back to home
bug3: css-outline black in searchbox input
bug4: price sup about decimals
bug 5: searchbar always in top and fix windows to start position
bug6: format amount according currency
bug8: set a message in case that the query not return any result
bug10: in a parameter search set the input searchbox value with the query parameter
bug9: last line in results is not hidden
feature1: toggle search button if no exist nothing in input

## Pending:

feature2: fix spacers according design pixel perfect in detail
f2.1 fix spaces in results
f2.2 fix spaces in detail
feature3: responsive adjustments
feature 4: favicon + title MELI Johan Vargas \*
