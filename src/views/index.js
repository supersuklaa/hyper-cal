import { h } from 'hyperapp';
import Header from './header';
import Calendar from './calendar';
import Editor from './editor';

export default ({ calendar }) => (
  <div id='holder'>
    <Header
      year={calendar.year}
      month={calendar.month}
    />
    <Calendar
      year={calendar.year}
      month={calendar.month}
      firstDay={calendar.firstDay}
      days={calendar.days}
    />
    <Editor />
  </div>
);
