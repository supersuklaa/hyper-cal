import { h } from "hyperapp"
import { actions } from "../actions"

export const HeaderItem = ({ year, month }) => (
  <div class="header">
    <PrevButton />
    <TitleItem year={year} month={month} />
    <NextButton />
  </div>
)

const TitleItem = ({ year, month }) => (
  <div class="title">
    <h1>
      {month} / {year}
    </h1>
  </div>
)

const PrevButton = ({}) => (
  <Button type="prev">«</Button>
)

const NextButton = ({}) => (
  <Button type="next">»</Button>
)

const Button = ({ type }, children) => (state, actions) => (
  <div class={`button ${type}-button`} onclick={() => actions.nav(type)}>
    {children}
  </div>
)