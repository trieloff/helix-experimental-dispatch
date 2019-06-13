/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
// openwhisk is pre-installed on the container, so we don't want to
// declare or package it.
// eslint-disable-next-line import/no-extraneous-dependencies
const openwhisk = require('openwhisk');

/**
 * This is the main function
 * @param {string} name name of the person to greet
 * @returns {object} a greeting
 */
function main(params) {
  const ow = openwhisk();
  return ow.actions.invoke({
    name: 'helix-services/static@latest',
    blocking: true,
    result: true,
    params,
  }).then(result => result);
}

module.exports = { main };
