/* @flow */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


import {merge} from "../common/prelude";
import * as Unknown from "../common/unknown";
import {Effects} from "reflex";

/*:: import * as type from "../../type/common/editable" */

// Actions

export const Clear/*:type.Clear*/ = {type: "Clear"};

export const Select/*:type.Select*/ = range =>
  ({type: "Select", range});

export const Change/*:type.Change*/ = (value, selection) =>
  ({type: "Change", value, selection});



const select = (model, action) =>
  merge(model, {selection: action.range});

const change = (model, action) =>
  merge(model, {selection: action.selection, value: action.value});

const clear = model =>
  merge(model, {value: "", selection: null});

export const init/*:type.init*/ = (value, selection=null) =>
  [ { value
    , selection
    }
  , Effects.none
  ]

export const update/*:type.update*/ = (model, action) =>
    action.type === "Clear"
  ? [clear(model), Effects.none]
  : action.type === "Select"
  ? [select(model, action), Effects.none]
  : action.type === "Change"
  ? [change(model, action), Effects.none]
  : Unknown.update(model, action);
