MyGovBC-core-headerFooterService
=================

* [![Build Status](https://travis-ci.org/bcgov/MyGovBC-core-headerFooterService.svg?branch=master)](https://travis-ci.org/bcgov/MyGovBC-core-headerFooterService) using latest Nodejs
* [![Build Status](https://jenkins-gcpe-mygovbc-demo.pathfinder.gov.bc.ca/buildStatus/icon?job=gcpe-mygovbc-demo/gcpe-mygovbc-demo-mygovbc-core-headerfooterservice-pipeline)](https://jenkins-gcpe-mygovbc-demo.pathfinder.gov.bc.ca/job/gcpe-mygovbc-demo/job/gcpe-mygovbc-demo-mygovbc-core-headerfooterservice-pipeline/) depolying to OpenShift
* [![Known Vulnerabilities](https://snyk.io/test/github/bcgov/MyGovBC-core-headerFooterService/badge.svg?targetFile=package.json)](https://snyk.io/test/github/bcgov/MyGovBC-core-headerFooterService?targetFile=package.json)

Various BCGov header footer themes as a service, implemented using [Unippear](https://github.com/abbr/unippear). Themes include:

* default [bootstrap v4.1](https://github.com/bcgov/bootstrap-theme) theme
* gov theme providing [bcgov home site](https://gov.bc.ca) header/footer

# Development

1. Install

    ```
    git clone https://github.com/bcgov/MyGovBC-core-headerFooterService.git
    npm i -g yarn
    yarn install
    ```
2. Update /client-whitelist.json with a list of authorized client URL patterns. Updates made at runtime in the future take effect immediately without restarting Node.
3. Launch the app by running command `npm start` from application root. By default, the process listens on port 3000. To change, set env UNIPPEAR_PORT before launching node.
4. Check READMEs in sub-folders of *public/assets* for additional version/theme specific options

## License

    Copyright 2016-Present Province of British Columbia

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at 

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
