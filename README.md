Project Members (Please add your name)!
  - Greg Maxin
  - Cathy Wang
  - Brandon Leung
  - Karissa Manning
  - Hannah Wang
  - Christina Liu
  - Monica Iyer
  - Yifei Ren
  - Joshua Allum
  - Kevin Chan
  - Ru Li
  - Wasiq Mohammad
  - Matthew Follegot
  - Karolina Xin
  
  
  ## Available Scripts

  In the project directory, you can run:

  ### `npm run dev`

  Runs the app in the development mode.<br>
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  The page will reload if you make edits.<br>
  You will also see any lint errors in the console.
  
  
  
  ---------------------------------------------------------------------------------------------------
  chmod u+x "scriptname" (This will give you execute permissions for the script)
  ### `./scripts/deploy.sh`

  Builds the app and stores it in the /build folder
  The build is then uploaded/deployed to firebase https://kidsability-871ac.firebaseapp.com/ 
  
  ### `./scripts/firstTimeSetup.sh`

  Installs nodejs and npm
  Installs/Updates all npm modules outlined in package.json for the project in the current directory
  
## Seeding the Database
  Ask Greg or Karissa for the Schedules csv file and Mongo db credentials
  ### `scripts/updateSchedules <username> <password>`