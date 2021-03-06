/* @flow */

import * as Focusable from "../../common/focusable"
import type {Effects, Never} from "reflex/type/effects"
import type {Task} from "reflex/type"
import type {ID} from "../../common/prelude"
import type {Result} from "../../common/result"

// Model extends Focusable.Model with isVisible and zoom fields
export type Model
  = { isVisible: boolean
    , zoom: number
    , isFocused: boolean
    }


export type ZoomIn = { type: "ZoomIn" }
export type ZoomOut = { type: "ZoomOut" }
export type ResetZoom = { type: "ResetZoom" }

type ZoomChangeResult = Result<string, number>
type ZoomChangedAction =
  { type: "ZoomChanged"
  , result: ZoomChangeResult
  }

export type ZoomChanged = (result:ZoomChangeResult) =>
  ZoomChangedAction

export type MakeVisible = { type: "MakeVisible" }
export type MakeNotVisible = { type: "MakeNotVisible" }

type VisibilityChangeResult = Result<string, boolean>
type VisibilityChangedAction =
  { type: "VisibilityChanged"
  , result: VisibilityChangeResult
  }

export type VisibilityChanged = (result:VisibilityChangeResult) =>
  VisibilityChangedAction

export type FocusableAction =
  { type: "Focusable"
  , action: Focusable.Action
  }

export type Action
  = FocusableAction
  | ZoomIn | ZoomOut | ResetZoom
  | MakeVisible | MakeNotVisible
  | ZoomChangedAction
  | VisibilityChangedAction


export type zoomIn = (id:ID, zoom:number) =>
  Task<Never, ZoomChangeResult>

export type zoomOut = (id:ID, zoom:number) =>
  Task<Never, ZoomChangeResult>

export type resetZoom = (id:ID) =>
  Task<Never, ZoomChangeResult>

export type setVisibility = (id:ID, isVisible:boolean) =>
  Task<Never, VisibilityChangeResult>


export type init = () => [Model, Effects<Action>]
export type update = (model:Model, action:Action) => [Model, Effects<Action>]
