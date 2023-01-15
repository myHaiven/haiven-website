# Haiven website

[Live website on firebase](https://haiven-hub.web.app/)

# Instructions

## Frontend

- To run the app locally with hot reload and do:
  ```{bash}
  npm run dev
  ```
- To lint the code, do:
  ```{bash}
  npm run lint
  ```
  - Note that this command only checks the `pages`, `components`, and `lib`
    directories.
- To emulate Firebase hosting locally:
  ```{bash}
  npm run emulateFirebase
  ```
  This builds the website at `out` which is what Firebase hosts.
