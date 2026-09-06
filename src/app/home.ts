import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './app.scss'
})
export class Home {
  prepareInquiry(event: SubmitEvent): void {
    event.preventDefault();
    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement) || !form.reportValidity()) return;

    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) ?? '').trim();
    const subject = `Event inquiry: ${value('eventType')} — ${value('name')}`;
    const body = [
      `Name: ${value('name')}`,
      `Email: ${value('email')}`,
      `Phone: ${value('phone') || 'Not provided'}`,
      `Event: ${value('eventType')}`,
      `Date: ${value('date') || 'Still deciding'}`,
      `Venue / city: ${value('venue') || 'Still deciding'}`,
      '',
      value('message')
    ].join('\n');

    window.location.href = `mailto:MinMusicDJ@GMAIL.COM?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
