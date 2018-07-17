import { h } from 'hyperapp';

export default ({ year, month }) => (
  <div class='header'>
    <PrevButton />
    <TitleItem year={year} month={month} />
    <NextButton />
  </div>
);

const TitleItem = ({ year, month }) => (state, actions) => (
  <div class='title' onclick={() => actions.showToday()}>
    <h1>
      {month} / {year}
    </h1>
  </div>
);

const PrevButton = () => (
  <Button type='prev'>«</Button>
);

const NextButton = () => (
  <Button type='next'>»</Button>
);

const Button = ({ type }, children) => (state, actions) => (
  <div class={`button ${type}-button`} onclick={() => actions.nav(type)}>
    {children}
  </div>
);
