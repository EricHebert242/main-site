TODO: 
- Update this readme
- Bug when scrollingX on mobile -> White space appear on right
- Bug on mobile when menu open and scrolling -> nav button state not updated
- Capture clicks on Email and Github footer links and launch the appropriate action
- Move css colors to _variables.css


# main-site

- create package.json file by typing: npm init -y

- type: npm i webpack webpack-cli --save-dev
- create webpack.config.js at root
- add entry property that point to the main entry js file
- open package.json
   - add dev property with "webpack" as value inside scripts object
- type: npm run dev