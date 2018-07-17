import { h } from 'hyperapp';
import utils from '../utils';

const dayClass = (date, editor) => {
  let result = 'day';

  if (date.id === editor.id) result += ' editing';

  if (utils.hasData(date.id)) result += ' has';

  return result;
};

const DayItem = ({ date }) => (state, actions) => (
  <div class={dayClass(date, state.editor)} onclick={() => actions.renderEditor(date)}>
    {date.day}
  </div>
);

const repeat = (length, iteratee) => {
  const out = new Array(length);

  for (let i = 0; i < length; i++) {
    out[i] = iteratee(i + 1);
  }

  return out;
};

export default ({
  year,
  month,
  firstDay,
  days,
}) => (
  <div class='calendar' data-id={`${year}-${month}`}>
    <div class='table'>
      {repeat(firstDay - 1, () =>
        <div class='empty'></div>)
      }
      {repeat(days, i =>
        <DayItem
          date={{
            year,
            month,
            day: i,
            id: `${year}-${month}-${i}`,
          }}
        />)
      }
    </div>
  </div>
);
