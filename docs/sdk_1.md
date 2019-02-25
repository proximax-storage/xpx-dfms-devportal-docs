---
id: sdk_1
title: Overview
---

## Overview

The ProximaX Storage Software Development Kit is the primary software development tool to create ProximaX components, such as libraries or applications. Almost all, if not all, components should use ProximaX-SDK instead of raw API.

The new SDK enables developers to focus on their product rather than on the ProximaX storage and blockchain specific API details due to its higher abstraction.

ProximaX-SDK shares the same design/architecture between programming languages to accomplish the next properties:

 - **Fast language adaptation**: There is library for Go, but you need JavaScript for example. As both SDKs share the same design, you can re-write the library faster, adapting the syntax to your language. It also applies to examples, projects, applications...
 - **Cohesion/shared knowledge cross ProximaX developers**: Be able to change between projects that use ProximaX, sharing the same design accompanied by the best practices.
 - **Fast SDK updates**: Migrating any improvement from a ProximaX-SDK implementation to the rest is faster.
 - **Fewer bugs**: If any bug appears in one language, it is faster to check and fix it.

The best way to learn about the SDKs is through [guides](./features_1.md).
