# LPGTest

For the Frontend test scenarios I have used Cypress tool with Cucumber installations used javascript.

Wrote test scenarios as Feature files using gherkin cucumber.

Cover the flows of checking out holiday passes in different ways/flows


  -User should be able to continue to checkout using the buy button and go to the payment screen 
  
  -User should be able to checkout from home page  after selecting an attraction
  
  -User should be able to checkout from inclusive page 
  
  -User should be able to delete the pass from the cart
  
  
  Also there are many scenarios can be automated like filtering, sorting which can be coverd in API testing.
  
  Also should automate,
  
  selecting item from the filtered list and checkout the items etc.
  
  field validations on different screens/error messages, email submissions etc.

# How to Execute 


1 Download the git repo and extract the zip file.

2. You need have node.js intalled in your machine.

3. Then install cypress using npm install cypress --save-dev command.

4. Then install cucumber preprocessor using these commands


npm install --save-dev cucumber

npm install --save-dev cypress-cucumber-preprocessor


5. Open the cypress GUI using this command ./node_modules/.bin/cypress open   

You can execute the Test.Feature file if you are running through the Frontend. 


![title](https://github.com/nipuniuthpala/images/blob/master/Screenshot%202021-04-17%20at%2018.56.20.png)

You can see the results throug the frontend.

![title](https://github.com/nipuniuthpala/images/blob/master/Screenshot%202021-04-17%20at%2018.55.58.png)


OR you can execute the npx cypress run command if you are runnig through headlessmode. Results can be seen the output. Videos also get craeted.


![title](https://github.com/nipuniuthpala/images/blob/master/Screenshot%202021-04-17%20at%2019.27.12.png)


Video can be found in the videos folder on the execution. Refer LPGTest/cypress/videos/Cucumber/Test.feature.mp4

OR I have included the Docker files if you have docker installed and have a container should be able to run there too.

# Issues Found during automation

If you select "Less crowd" filter which does not gave any data in the Attractions page it continuesly shows loading.But in All inclusive page it shows a blank screen as there is no data.

![title](https://github.com/nipuniuthpala/images/blob/master/Screenshot%202021-04-18%20at%2008.30.16.png)



![title](https://github.com/nipuniuthpala/images/blob/master/Screenshot%202021-04-17%20at%2019.27.12.png)

