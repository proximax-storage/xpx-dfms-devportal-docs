---
id: sdk_4
title: Development Guide
---

A key objective is that interoperability becomes a natural design of the ProximaX-SDK. Follow this guideline to collaborate creating a ProximaX SDK, achieving the best quality with the less effort.

## Development

You can base your work on [Go](https://github.com/proximax-storage/nem2-sdk-go) sdk.


### Before Starting

1. Be sure no one is already working on the SDK you want to create. Check the [repository list](./sdk_3.md), if someone is already working on it, we suggest you collaborate with him/her.
2. Claim the SDK [forking this repository](https://help.github.com/articles/creating-a-pull-request/).
3. Consider using one of the suggested [licences](#recommended-licenses).


### Creating the project

1. Add a README with the instructions to install the SDK.
2. Add a Code of Conduct.
3. Add a Contributors guidelines to help others know how they can help you.
4. Setup the Continuous Integration system. We use [travis-ci](https://travis-ci.org/), but feel free to use the one suits you best.
5. A project with a good test coverage it’s more likely to be used and trusted by the developers!

We strongly suggest you to do [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) or Unit-Testing (test last). If you need inspiration, you can adapt the same [tests we did]](https://github.com/proximax-storage/nem2-sdk-go/tree/master/test).


### API Wrapper

The API generation can be done with [Swagger Codegen](https://swagger.io/tools/swagger-codegen/). It supports multiple languages. Hopefully, yours in the list.

### TBD all the other from https://nemtech.github.io/sdk/development.html


### Documenting your SDK

SDKs need to be adopted by other developers. As a contributor, no one knows better than you how a determined SDK works. Consider helping others and spread the usage of the SDK by providing documentation.


### Publishing the SDK as official

When you open-source your code, contact us to share the repository.


### Recommended Licenses

 - MIT: [Expat/MIT/X11 license](https://opensource.org/licenses/MIT)
 - Apache-2.0: [Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
 - BSD-2-Clause: [OSI-approved BSD 2-clause license](https://opensource.org/licenses/BSD-2-Clause)
 - BSD-3-Clause: [OSI-approved BSD 3-clause license](https://opensource.org/licenses/BSD-3-Clause)
 - CC0-1.0: [Creative Commons CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/<Paste>)
 - GNU-All-Permissive: [GNU All-Permissive License](http://www.gnu.org/prep/maintain/html_node/License-Notices-for-Other-Files.html)
 - LGPL-2.1+: [GNU Lesser General Public License (LGPL), version 2.1 or newer](http://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)


