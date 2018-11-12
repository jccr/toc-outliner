# toc-outliner
TOC Outliner Experiment

## How to
Requirements: Recent version of Node.js
1. `npm install`
2. `npm run test` - Run against experimental markup
3. `npm run start <url>` Run against samples. URL values are looked up in `toc-test.mjs`

## Notes/TODO
- Take into account of headings (h1-h6)
- Build into an actual data structure. Right now there's just logging for output.
- Increase robustness when dealing with anchors.
- Find the right pattern for the indended headings/labels for nested lists.
- If there's encouragement and continued interest; I want to add test suites to this.
