function generateMarkdown(data) {
  console.log(`${data.title}, ${data.description}, ${data.installation}`);
  return `
# ${data.title}
## ${data.description}
## ${data.installation}
## ${data.usageInfo}

`;
}

module.exports = generateMarkdown;
