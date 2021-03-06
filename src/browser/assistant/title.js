/* @flow */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


import {Effects, html, forward, thunk} from "reflex";
import {merge, always, batch} from "../../common/prelude";
import {Style, StyleSheet} from '../../common/style';

/*::
import * as Title from "../../../type/browser/assistant/title"
*/


const styleSheet = StyleSheet.create
  ( { base:
      { color: 'rgba(0,0,0,0.7)'
      , fontSize: '14px'
      }
    , selected:
      { color: '#fff'
      }
    , unselected:
      {

      }
    }
  );

export const render/*:Title.view*/ =
  (title, isSelected) =>
  html.span
  ( { className: 'assistant title'
    , style: Style
      ( styleSheet.base
      , ( isSelected
        ? styleSheet.selected
        : styleSheet.unselected
        )
      )
    }
  , [ ( title == null
      ? 'Untitled'
      : `${title}`
      )
    ]
  );

export const view/*:Title.view*/ =
  (title, isSelected) =>
  thunk
  ( `${title}`
  , render
  , title
  , isSelected
  );
