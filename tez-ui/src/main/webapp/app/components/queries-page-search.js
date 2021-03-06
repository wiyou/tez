/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['queries-page-search'],

  queryID: Ember.computed.oneWay("tableDefinition.queryID"),
  dagID: Ember.computed.oneWay("tableDefinition.dagID"),
  appID: Ember.computed.oneWay("tableDefinition.appID"),
  executionMode: Ember.computed.oneWay("tableDefinition.executionMode"),
  user: Ember.computed.oneWay("tableDefinition.user"),
  requestUser: Ember.computed.oneWay("tableDefinition.requestUser"),
  tablesRead: Ember.computed.oneWay("tableDefinition.tablesRead"),
  tablesWritten: Ember.computed.oneWay("tableDefinition.tablesWritten"),
  operationID: Ember.computed.oneWay("tableDefinition.operationID"),
  queue: Ember.computed.oneWay("tableDefinition.queue"),

  sendSearch: function () {
    this.get('parentView').sendAction('search', {
      queryID: this.get("queryID"),
      dagID: this.get("dagID"),
      appID: this.get("appID"),
      executionMode: this.get("executionMode"),
      user: this.get("user"),
      requestUser: this.get("requestUser"),
      tablesRead: this.get("tablesRead"),
      tablesWritten: this.get("tablesWritten"),
      operationID: this.get("operationID"),
      queue: this.get("queue"),
    });
  },

  actions: {
    statusChanged: function (value) {
      this.set("status", value);
    },
    statusKeyPress: function () {
      this.sendSearch();
    },
    search: function () {
      this.sendSearch();
    }
  }
});
