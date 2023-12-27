import { CSSResultGroup, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { sampleEleentStyles } from './sample-element.styles';

@customElement('sample-element')
export class SampleElement extends LitElement {
  static styles: CSSResultGroup = sampleEleentStyles;
  @state() detailList = [
    {
      name: 'Samson Oyebamiji',
      age: 16,
      mobile: '02842875453',
      country: 'Nigeria',
      gender: 'Male',
    },
  ];
  @state() currentName = {
    firstName: '',
    lastName: '',
  };
  handleNameInput({ target: { value } }: any, name: string) {
    this.currentName = { ...this.currentName, [name]: value };
  }
  generateCountry() {
    const countries = [
      'Portugal',
      'Japan',
      'Thailand',
      'Singapore',
      'India',
      'Greece',
      'Denmark',
      'United Kingdom',
      'Italy',
      'New Zealand',
      'Spain',
      'Netherlands',
      'Nigeria',
      'Kenya',
      'Ireland ',
      'Croatia',
      'Morocco ',
      'Sweden ',
      'Sri Lanka ',
      'Israel',
      'Turkey',
      'South Africa',
    ];
    return countries[Math.floor(Math.random() * 22)];
  }

  deleteUser(id: number) {
    this.detailList = this.detailList.filter((_, i) => id !== i);
  }
  generateUser() {
    const { firstName, lastName } = this.currentName;
    if (!firstName || !lastName) return;
    const user = {
      name: `${firstName} ${lastName}`,
      age: Math.floor(Math.random() * 25) + 16,
      mobile: this.generateMobileNumber(),
      country: this.generateCountry(),
      gender: ['Male', 'Female'][Math.round(Math.random())],
    };
    this.detailList = [...this.detailList, user];
  }
  generateMobileNumber() {
    return Array(11)
      .fill('')
      .map((_) => Math.floor(Math.random() * 10).toString())
      .join('');
  }
  protected render(): unknown {
    return html`<div>
      <h1 class="title">Random Id generator</h1>
      <div class="name">
        <input
          @input=${(e: Event) => this.handleNameInput(e, 'firstName')}
          placeholder="First Name"
          data-testId="firstName"
        />
        <input
          @input=${(e: Event) => this.handleNameInput(e, 'lastName')}
          placeholder="Last Name"
          data-testId="lastName"
        />
        <button data-testId="generate" @click=${this.generateUser}>
          Generate
        </button>
      </div>

      <div class="display">
        <div class="nom">Name</div>
        <div>Age</div>
        <div class="nom">Gender</div>
        <div>Country</div>
        <div class="nom">Mobile</div>
        <div></div>
        ${this.detailList.map(
          ({ name, age, mobile, country, gender }, i) => html`
            <div class="nom">${name}</div>
            <div>${age}</div>
            <div class="nom">${gender}</div>
            <div>${country}</div>
            <div class="nom">${mobile}</div>
            <div
              data-testId=${`delete-${i}`}
              @click=${() => this.deleteUser(i)}
              class="delete"
            >
              Delete
            </div>
          `
        )}
      </div>
    </div>`;
  }
}
