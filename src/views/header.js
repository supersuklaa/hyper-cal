import { h } from 'hyperapp';

export default ({ year, month }) => (
  <div class='header'>
    <PrevButton />
    <TitleItem year={year} month={month} />
    <NextButton />
  </div>
);

const TitleItem = ({ year, month }) => (state, { showToday }) => (
  <div class='title' onclick={() => showToday()}>
    <h1>
      {month} / {year}
    </h1>
  </div>
);

const PrevButton = () => (state, { nav }) => (
  <div class='button prev-button' onclick={() => nav('prev')}>
    «
  </div>
);

const NextButton = () => (state, { nav }) => (
  <div class='button next-button' onclick={() => nav('next')}>
    »
  </div>
);
