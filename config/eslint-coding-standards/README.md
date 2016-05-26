# ESLint Coding Standards

See http://eslint.org/docs/rules/ for more information.

This package enables errors on all of the available flags except the following:

| Flag | Description | Value |
|------|-------------|--------|
| dot-location | Enforce consistent newlines before and after dots | `0` |
| no-process-env | Disallow the use of `process.env` | `0` |
| no-process-exit | Disallow the use of `process.exit()` | `0` |
| max-len | Enforce a maximum line length | `[1, 100, 4, {"ignoreComments": true}]` |
| newline-before-return | Require an empty line before return statements | `0` |
| one-var | Enforce variables to be declared either together or separately in functions | `0` |
| quotes | Enforce the consistent use of either backticks, double, or single quotes | `[2, "single"]` |
