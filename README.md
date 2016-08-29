MyGovBC-core-headerFooterService
=================

Implementing MyGovBC header footer as a service, based on [Unippear](https://github.com/abbr/unippear)

# Development

1. Installing:
    ```
    git clone https://github.com/bcgov/MyGovBC-core-headerFooterService.git
    npm install
    ```
2. Updating */public/assets* as needed.
3. Updating /client-whitelist.json with a list of authorized client URL patterns. Updates made at runtime in the future take effect immediately without restarting Node.
4. Launching the app by running command `node bin/www` from application root. By default, the process listens on port 3000. To change port, either modify */bin/www* or set env PORT before launching node.

## License

    Copyright 2016 Province of British Columbia

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at 

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
