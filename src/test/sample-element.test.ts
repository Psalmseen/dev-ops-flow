import type { IWindow } from 'happy-dom';
import '../sample-element/sample-element';
import { SampleElement } from '../sample-element/sample-element';
declare global {
  interface Window extends IWindow {}
}

beforeAll(async () => {
  document.body.innerHTML = '<sample-element></sample-element>';
  await window.happyDOM.whenAsyncComplete();
});

const getSampleElement = () =>
  document.querySelector('sample-element') as SampleElement;
const getSampleElementElements = (selector: string) =>
  getSampleElement()?.shadowRoot?.querySelectorAll(
    selector
  ) as NodeListOf<HTMLElement>;

describe('The behaviour of the sample element', () => {
  it('checks if the element is properly loaded', () => {
    expect(getSampleElementElements('*')?.length).toBeGreaterThan(0);
  });
  it('checks if the generate country function works', () => {
    expect(getSampleElement().generateCountry()).toBeTypeOf('string');
  });
  it('checks if the generate number function works', () => {
    expect(getSampleElement().generateCountry()).toBeTypeOf('string');
  });
  it('checks the handleNameInput function', () => {
    getSampleElementElements('input')[1].dispatchEvent(
      new CustomEvent('input')
    );
    getSampleElement().handleNameInput(
      { target: { value: 'Samson' } },
      'firstName'
    );
    getSampleElement().handleNameInput(
      { target: { value: 'Oyebamiji' } },
      'lastName'
    );

    expect(getSampleElement().currentName.firstName).toBe('Samson');
    expect(getSampleElement().currentName.lastName).toBe('Oyebamiji');
  });
  it('checks the generateUser function', () => {
    getSampleElement().generateUser();
    expect(getSampleElement().detailList.length).toBe(2);
    getSampleElement().generateUser();
    expect(getSampleElement().detailList.length).toBe(3);
    getSampleElement().handleNameInput({ target: { value: '' } }, 'firstName');
    getSampleElement().handleNameInput({ target: { value: '' } }, 'lastName');
    getSampleElement().generateUser();
    expect(getSampleElement().detailList.length).toBe(3);
  });
  it('checks the deleteUser function', () => {
    getSampleElement().deleteUser(1);
    expect(getSampleElement().detailList.length).toBe(2);
    getSampleElement().deleteUser(1);
    expect(getSampleElement().detailList.length).toBe(1);
  });
});
