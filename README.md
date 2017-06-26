**Note:** User stories, wireframes, development background, design details are all integrated into the [back-end wiki](https://github.com/EricLScace/All-the-Matrices-back-end/wiki). All issues are presently tracked in the back-end repo.

# Welcome to the All-the-Matrices front-end browser client!

## Browser client deployment
[Browser client deployed here](https://ericlscace.github.io/All-the-Matrices-front-end/)


## Extensions beyond minimum requirements
* Browser:
  * Handlebars
  * Bootstrap
  * SCSS/SASS
  * Font Awecome icons integrated; click on gear icon for settings
  * Authentication employs a delegated click-handler on the `authn` `<div>`
    * `auth-dispatch-ui.js` is a unified click dispatcher for all authentication actions.
  * Similarly, matrix form submissions are handled by a single delegated click-handler.
    * `matrix-dispatch-ui.js` is the unifed click dispatcher
  * In preparation for multi-ligual support:
    * `announce-ui.js` posts and clears all text on the browser (except for the title and button names).
    * `messages.js` contains all text messages, providing a convenient location to switch between different language versions of each message.
    * It's a small step to add button names and the title to `message.js`
* Server:
  * Extensive SQL table family to accommodate the nuances of Linotype matrix description and ownership records.
    * Database seeded with 49 Linotype matrix descriptions for test purposes using my `seed.rb` utility, and verified by dump and check of each table `seed.rb` ready to process the full Linotype database import from a CSV file.
    * Tables built solely through migrations. (One table change will be made before a full import occurs.)
  * User database (from the GA-provided authentication SDK) and API extended to incorporate user name and organization.
    * Additional API calls built and tested for this extended capability. Not all API requests are used by present browser client, but are ready for next sub-version of client.
  * API requests/responses include explicit version numbering to provide for backward-compatibility in future on both client & server side.
    * curl script tests added for all API calls.
* Documentation:
  * Thorough documentation in back-end wiki of repo, including:
    * project requirement summary
    * user stories
    * rough wire-frames & UX flow
    * full API documentation
    * full SQL table documentation
    * full set of development and deployment checklists for front and back ends.
    * Clean `.md` format of license terms.
  * All dev issues tracked in back-end repo issues. (In future, I would split front & back end issues to simplify relationship between dev branches and issues).
  * Extensive use of git branches & commits. Later branches named according to issue # and commit comments tied to issue numbers.

## Index
Alphabetical order by topic:
* [APIs](api-intro)
  * [Authentication API](api-intro):
    * [change password](authn-chpwd)
    * [log in](authn-login)
    * [log off](authn-logoff)
    * [register as new user](authn-signup)
  * Matrix API:
    * [find a matrix](matrix-get-one)
    * [register ownership of matrix set](matrix-own)
  * Owner API:
    * [change settings](owner-chsettings)
    * [register name, email, organization](owner-new)
    * [fetch registered owner data](owner-show)
  * Users API (not used in V1):
    * [get all registered users](users-get-all)
    * [get one registered user](users-get-one)
* [Development process & checklists](dev-cklist):
  * [Rails API template set-up checklist](rails-api-template-set-up)
* Licenses:
  * [Creative Commons](creative-commons)
  * [General Assembly](GA)
  * [GNU](gnu)
  * [MIT](MIT)
* [Project requirements](requirements)
* [Tables, ORM, ERD](tables)
* User Interface:
  * User:
    * [log-in](log-in)
    * [log-out](log-out)
    * [register a new user](register)
    * [settings: change password, etc](change-settings)
  * [Matrix: view a matrix; set & change quantity owned](view-matrix)
* [User stories](user-stories)

## Contributors:
Eric Scace wrote all the documentation and code.

## References:
* [full stack project requirements](https://git.generalassemb.ly/ga-wdi-boston/full-stack-project)
* [full stack project presentation requirements](https://github.com/ga-wdi-boston/full-stack-project-practice)
* [Linotype: The Film — trailer](https://www.youtube.com/watch?v=avDuKuBNuCk)
* [Linotype matrix identification publications](http://www.circuitousroot.com/artifice/letters/press/compline/typography/matrix/mergenthaler/)

## Licenses:
1. All content is licensed under a [CC­BY­NC­SA 4.0 license](creative-commons).
1. All software code is licensed under [GNU GPLv3](gnu).
2. See also [General Assembly](GA) and [MIT](MIT) license terms.
2. For commercial use or alternative licensing, please contact legal@ga.co.
