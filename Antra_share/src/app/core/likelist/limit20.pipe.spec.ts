import { Limit20Pipe } from './limit20.pipe';

describe('Limit20Pipe', () => {
  it('create an instance', () => {
    const pipe = new Limit20Pipe();
    expect(pipe).toBeTruthy();
  });
});
