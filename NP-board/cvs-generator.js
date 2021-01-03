const sprintPrefix = 'NP Day';
const initialSprint = 7;
const lastSprint = 14;
const food = 'Almonds+Peanuts';
const timesOfDay = ['breakfast', 'morning break', 'lunch', 'afternoon break', 'dinner']
const jiraIssueType = 'Task';
const jiraIssueStatus = 'To Do';

const headers = 'Summary,Issue Type,Sprint,Status';
const csvLines = [];

for (let sprint = initialSprint; sprint <= lastSprint; sprint++) {
  for (let timeOfDay of timesOfDay) {
    const issue = {
      summary: `${food} at ${timeOfDay}`,
      sprint: `${sprintPrefix} ${sprint}`,
      type: jiraIssueType,
      status: jiraIssueStatus,
    };
    const issueLine = `${issue.summary},${issue.type},${issue.sprint},${issue.status}`;
    csvLines.push(issueLine);
  }
}

console.log(`${headers}\n${csvLines.join('\n')}`);