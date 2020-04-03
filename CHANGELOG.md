# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.2.1](https://github.com/partnerHero/Compass/compare/v2.2.0...v2.2.1) (2020-03-25)


### Bug Fixes

* fixed manager id problem ([#480](https://github.com/partnerHero/Compass/issues/480)) ([2b7e307](https://github.com/partnerHero/Compass/commit/2b7e307aa502035e0a6dc459aa48590d35dfecc9))
* sendPeerInsightRequestToLoggedUserTeam: now gets user's team by departmentName instead of departmentId ([#461](https://github.com/partnerHero/Compass/issues/461)) ([3d4ebf9](https://github.com/partnerHero/Compass/commit/3d4ebf933e504f847a1be07f63eeb509d8e0bb44))
* sync user position ([#463](https://github.com/partnerHero/Compass/issues/463)) ([134804b](https://github.com/partnerHero/Compass/commit/134804ba9c6b6e01931309d20a352fefb82263ad))

## 2.2.0 (2020-02-26)


### Features

* Allow manager to download ongoing calibrations ([6506b91](https://github.com/partnerHero/Compass/commit/6506b91048750ae822dd79ed7b8717409e655e29))
* level and calibrations requests dashboard cards ([2e33beb](https://github.com/partnerHero/Compass/commit/2e33bebd7af26d68a42ab7bc4818ea43b0808cde))
* warning feature ([#450](https://github.com/partnerHero/Compass/issues/450)) ([ce3348e](https://github.com/partnerHero/Compass/commit/ce3348ed2af0c7818d14a5ddca49633a3b28f43e))
* When answering calibrations, allow users to use a rich text editor ([24bdd9f](https://github.com/partnerHero/Compass/commit/24bdd9f427dc9e493af4532b5316c9450442dac6))


### Bug Fixes

* Enable download csv option bug ([88ceb0d](https://github.com/partnerHero/Compass/commit/88ceb0d5ac3c9c36cd034ed80667df36c16d285e))
* feedbackview now updates with the correct props when updated ([57cccf5](https://github.com/partnerHero/Compass/commit/57cccf5cf71f96b3f8a844f51a7341c6a50f5087))
* fix date prefix on sent peer insights cards ([#443](https://github.com/partnerHero/Compass/issues/443)) ([b338ac8](https://github.com/partnerHero/Compass/commit/b338ac8587d671f899377bd4dcf2d7ec37ba7f87))
* Manager photo was not been displayed on calibrations views ([021755d](https://github.com/partnerHero/Compass/commit/021755d2c113d8c1b42682452e94edaa3f5040b9))
* Notifications redirect to was not working ([4de19c1](https://github.com/partnerHero/Compass/commit/4de19c15198be79305b81284b6b81672dd29517a))
* pagination no longer display extra pages ([cea5304](https://github.com/partnerHero/Compass/commit/cea530453beba301fd5c2beb7eeea2e12698fbee))
* Parse HTML to plain text when downloading assessments CSV ([7cf0523](https://github.com/partnerHero/Compass/commit/7cf0523a872de6964292f138867f1680d35ba11e))
* postion adjustment to compensate resize and scroll now wrk together ([f2ab7d9](https://github.com/partnerHero/Compass/commit/f2ab7d9cffa5206714f2b738b0ad2876de1cb3ba))
* Proptypes error on csv data solved by setting the initial value to an empty string ([8129b74](https://github.com/partnerHero/Compass/commit/8129b74551eba8e8a3557f4b3b2180a159ffe46f))
* remove-questions-from-calibrations-csv-when-status-is-reviewing ([02df195](https://github.com/partnerHero/Compass/commit/02df195f3c392e52529f3978557e728e74927690))
* Sentry user email was not being set correctly ([4584631](https://github.com/partnerHero/Compass/commit/458463199120b964c0fb24fac92c3d71e93870e2))
* typo ([c1fc787](https://github.com/partnerHero/Compass/commit/c1fc7878ed9fdb8ae710b5bc0257793c069c2531))
* updating approval request's requestedBy with new user's managerId ([#454](https://github.com/partnerHero/Compass/issues/454)) ([3dc7612](https://github.com/partnerHero/Compass/commit/3dc7612a2c14481c02977fad6f18a8a1726c3453))
* user is able to navigate other positions ([6df2ec9](https://github.com/partnerHero/Compass/commit/6df2ec986b75c8a403b4040d3d2e460d41849fb9))

## 2.1.0 (2020-02-26)


### Features

* Allow manager to download ongoing calibrations ([6506b91](https://github.com/partnerHero/Compass/commit/6506b91048750ae822dd79ed7b8717409e655e29))
* level and calibrations requests dashboard cards ([2e33beb](https://github.com/partnerHero/Compass/commit/2e33bebd7af26d68a42ab7bc4818ea43b0808cde))
* warning feature ([#450](https://github.com/partnerHero/Compass/issues/450)) ([ce3348e](https://github.com/partnerHero/Compass/commit/ce3348ed2af0c7818d14a5ddca49633a3b28f43e))
* When answering calibrations, allow users to use a rich text editor ([24bdd9f](https://github.com/partnerHero/Compass/commit/24bdd9f427dc9e493af4532b5316c9450442dac6))


### Bug Fixes

* Enable download csv option bug ([88ceb0d](https://github.com/partnerHero/Compass/commit/88ceb0d5ac3c9c36cd034ed80667df36c16d285e))
* feedbackview now updates with the correct props when updated ([57cccf5](https://github.com/partnerHero/Compass/commit/57cccf5cf71f96b3f8a844f51a7341c6a50f5087))
* fix date prefix on sent peer insights cards ([#443](https://github.com/partnerHero/Compass/issues/443)) ([b338ac8](https://github.com/partnerHero/Compass/commit/b338ac8587d671f899377bd4dcf2d7ec37ba7f87))
* Manager photo was not been displayed on calibrations views ([021755d](https://github.com/partnerHero/Compass/commit/021755d2c113d8c1b42682452e94edaa3f5040b9))
* Notifications redirect to was not working ([4de19c1](https://github.com/partnerHero/Compass/commit/4de19c15198be79305b81284b6b81672dd29517a))
* pagination no longer display extra pages ([cea5304](https://github.com/partnerHero/Compass/commit/cea530453beba301fd5c2beb7eeea2e12698fbee))
* Parse HTML to plain text when downloading assessments CSV ([7cf0523](https://github.com/partnerHero/Compass/commit/7cf0523a872de6964292f138867f1680d35ba11e))
* postion adjustment to compensate resize and scroll now wrk together ([f2ab7d9](https://github.com/partnerHero/Compass/commit/f2ab7d9cffa5206714f2b738b0ad2876de1cb3ba))
* remove-questions-from-calibrations-csv-when-status-is-reviewing ([02df195](https://github.com/partnerHero/Compass/commit/02df195f3c392e52529f3978557e728e74927690))
* Sentry user email was not being set correctly ([4584631](https://github.com/partnerHero/Compass/commit/458463199120b964c0fb24fac92c3d71e93870e2))
* typo ([c1fc787](https://github.com/partnerHero/Compass/commit/c1fc7878ed9fdb8ae710b5bc0257793c069c2531))
* updating approval request's requestedBy with new user's managerId ([#454](https://github.com/partnerHero/Compass/issues/454)) ([3dc7612](https://github.com/partnerHero/Compass/commit/3dc7612a2c14481c02977fad6f18a8a1726c3453))
* user is able to navigate other positions ([6df2ec9](https://github.com/partnerHero/Compass/commit/6df2ec986b75c8a403b4040d3d2e460d41849fb9))

## 2.0.0 (2020-02-19)


### Features

* level and calibrations requests dashboard cards ([2e33beb](https://github.com/partnerHero/Compass/commit/2e33bebd7af26d68a42ab7bc4818ea43b0808cde))
* When answering calibrations, allow users to use a rich text editor ([24bdd9f](https://github.com/partnerHero/Compass/commit/24bdd9f427dc9e493af4532b5316c9450442dac6))


### Bug Fixes

* feedbackview now updates with the correct props when updated ([57cccf5](https://github.com/partnerHero/Compass/commit/57cccf5cf71f96b3f8a844f51a7341c6a50f5087))
* fix date prefix on sent peer insights cards ([#443](https://github.com/partnerHero/Compass/issues/443)) ([b338ac8](https://github.com/partnerHero/Compass/commit/b338ac8587d671f899377bd4dcf2d7ec37ba7f87))
* pagination no longer display extra pages ([cea5304](https://github.com/partnerHero/Compass/commit/cea530453beba301fd5c2beb7eeea2e12698fbee))
* Parse HTML to plain text when downloading assessments CSV ([7cf0523](https://github.com/partnerHero/Compass/commit/7cf0523a872de6964292f138867f1680d35ba11e))
* postion adjustment to compensate resize and scroll now wrk together ([f2ab7d9](https://github.com/partnerHero/Compass/commit/f2ab7d9cffa5206714f2b738b0ad2876de1cb3ba))
* remove-questions-from-calibrations-csv-when-status-is-reviewing ([02df195](https://github.com/partnerHero/Compass/commit/02df195f3c392e52529f3978557e728e74927690))
* user is able to navigate other positions ([6df2ec9](https://github.com/partnerHero/Compass/commit/6df2ec986b75c8a403b4040d3d2e460d41849fb9))
