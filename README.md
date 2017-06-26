**Note:** 
* User stories, wireframes, development background, design details, license data, etc are all integrated into the [back-end wiki](https://github.com/EricLScace/All-the-Matrices-back-end/wiki). 
* All issues are presently tracked in the back-end repo.

# Welcome to the All-the-Matrices front-end browser client!

## Purpose
This web app helps letterpress compositors:
* identify Linotype matrices and their typefaces;
* register the sets of Linotype matrices that they own.

## Browser client deployment
[Browser client deployed here](https://ericlscace.github.io/All-the-Matrices-front-end/)

## Back-end repo
[Back end repo is here.](https://github.com/EricLScace/All-the-Matrices-back-end/)

## Extensions beyond GA project minimum requirements
* Browser:
  * Handlebars
  * Bootstrap
    * Almost fits on an iPhone 5
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
