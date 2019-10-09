import monent from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(monent(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: monent(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(monent(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: monent(0)
    });
});

test('should generate set text filter action object with text value', () => {
    const text = 'bill';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should generate set text filter action object with default text value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate sort by date action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate sort by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});