import {sendSignupReport} from "./signup-report";
import {database} from "./database";
import {Email, Emails} from "./email";
import {Doubles} from "./doubles";

test("sendSignupReport", {
  async "sends an email to Eliza"() {
    const newUsers = [{country: "US"}];
    Doubles.replace(database, "run", () => Promise.resolve(newUsers));
    const elizasInbox: Email[] = [];
    Doubles.replace(Emails, "send", (email) => {
      elizasInbox.push(email);
      return Promise.resolve();
    });

    await sendSignupReport();

    expect(elizasInbox, contains, {
      from: "noreply@example.com",
      to: "eliza@example.com",
      subject: "Weekly signup report",
      body: "<li>US - 1</li>",
    });
  },
});

function contains(needle: any, haystack: any[]): boolean {
  return haystack.some((straw: any) => equals(needle, straw));
}
