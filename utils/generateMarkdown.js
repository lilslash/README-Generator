// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none'){
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-blueviolet.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none'){
    return `[${license}](#${license})`
  }else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none'){
    return `## license 
    
    [${license}](https://opensource.org/licenses/${license})`
  } else {
    return ``
  }
}
renderLicenseSection()


module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
}
