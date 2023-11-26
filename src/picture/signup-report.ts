import {database, queryFrom} from "./database";
import {weeksAgo} from "./time";
import {Emails} from "./email";
import {User} from "./user";

export async function sendSignupReport() {
  const newUsers = await database.run(
    queryFrom("users").where("signup_date", ">", weeksAgo(1)),
  );

  const reportData = breakdownByCountry(newUsers);

  const reportHtml = formatReportAsHtml(reportData);

  await Emails.send({
    from: "noreply@example.com",
    to: "eliza@example.com",
    subject: "Weekly signup report",
    body: reportHtml,
  });
}

function breakdownByCountry(users: User[]): Record<string, number> {
  return users.reduce(countByCountry, {});

  function countByCountry(
    counts: Record<string, number>,
    user: User,
  ) {
    counts[user.country] ||= 0;
    counts[user.country]++;
    return counts;
  }
}

function formatReportAsHtml(report: Record<string, number>): string {
  return Object.entries(report)
    .map(([country, count]) => `${country} - ${count}`)
    .map((row) => `<li>${row}</li>`)
    .join("");
}
