import { serieByDate } from '../formatter';
import { data } from './mock';

test('Formatter serieByDate', () => {
  console.log(data);
  const result = serieByDate(data[0]);
  expect(result).toBeDefined();
})