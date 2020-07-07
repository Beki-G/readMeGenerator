function generateMarkdown(data, licenseDescription) {
  //console.log(`${data.title}, ${data.description}, ${data.installation}`);
  return `
# ${data.title}

![badmath](https://img.shields.io/static/v1?label=license&message=`+encodeURI(data.license)+`&color=green)

## Description 

${data.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usageInfo}

## License
${data.license} - ${licenseDescription}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
If there are any questions please reach out to me on my Github [www.github.com/${data.githubUsername}](www.github.com/${data.githubUsername}) or my email at [${data.email}](${data.email})

`;
}

module.exports = generateMarkdown;
