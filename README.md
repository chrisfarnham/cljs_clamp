# ClojureScript and Clasp for easier Google Apps Script

Proof of concept (i.e., hello world) codebase that compiles ClojureScript to js
files which can be pushed to a Google Apps Suite project
with [clasp](https://github.com/google/clasp), Google's command line utility
for local Apps Script development.

## Usage

  1. Install `lein` and `clasp`
  1. Clone this repository and cd into the base directory
  1. Set up a `clasp` project as instructed
  1. Compile your ClojureScript and push it to your Apps Script project as
  shown below

```
$ lein cljsbuild once
Compiling ClojureScript...
$ clasp push
└─ Code.js
└─ appsscript.json
Pushed 2 files.
```

## License

Copyright © 2019 FIXME

This program and the accompanying materials are made available under the
terms of the Eclipse Public License 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0.

This Source Code may also be made available under the following Secondary
Licenses when the conditions for such availability set forth in the Eclipse
Public License, v. 2.0 are satisfied: GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or (at your
option) any later version, with the GNU Classpath Exception which is available
at https://www.gnu.org/software/classpath/license.html.
