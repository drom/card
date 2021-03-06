'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('             Aliaksei Chapyzhenka'),
  handle: chalk.white('drom'),
  work: chalk.white('Engineer @ SiFive'),
  // opensource: chalk.white('Node.js Community Committee ') + chalk.green('⬢'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('wavedrom'),
  observable: chalk.gray('https://observablehq.com/@') + chalk.blueBright('drom'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~drom'),
  github: chalk.gray('https://github.com/') + chalk.green('drom'),
  gitlab: chalk.gray('https://gitlab.com/') + chalk.redBright('drom'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.yellow('drom'),
  web: chalk.cyan('https://drom.io'),
  npx: chalk.red('npx') + ' ' + chalk.white('drom'),
  labelWork: chalk.white.bold('      Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelObservable: chalk.white.bold('Observable:'),
  labelnpm: chalk.white.bold('       npm:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelGitLab: chalk.white.bold('    GitLab:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}` // ` / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
// const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const observing = `${data.labelObservable}  ${data.observable}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const gitlabing = `${data.labelGitLab}  ${data.gitlab}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               // opensourcing + newline + newline + // data.labelOpenSource + data.opensource
               twittering + newline + // data.labelTwitter + data.twitter
               observing + newline +
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               gitlabing + newline + // data.labelGitLab + data.gitlab
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
