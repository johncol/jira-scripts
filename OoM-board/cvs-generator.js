const sprints = 27;
const tasks = [
  'Read',
  'Meditate',
  'Exercise',
  'Cold shower',
  'Vitamins',
  'Learn pronunciation of:',
  'Plan schedule for tomorrow',
];
const jiraIssueType = 'Task';
const jiraIssueStatus = 'To Do';

const headers = 'Summary,Issue Type,Status';
const csvLines = [];

for (let sprint = 0; sprint < sprints; sprint++) {
  for (let task of tasks) {
    const issue = {
      summary: task,
      type: jiraIssueType,
      status: jiraIssueStatus,
    };
    const issueLine = `${issue.summary},${issue.type},${issue.status}`;
    csvLines.push(issueLine);
  }
}

console.log(`${headers}\n${csvLines.join('\n')}`);
