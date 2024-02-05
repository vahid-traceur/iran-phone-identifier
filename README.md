# Iranian Mobile Number Operator Checker

A simple JavaScript library to identify Iranian mobile number operators based on the prefix of the mobile phone number.

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)

## Introduction

This library provides a function to check and identify Iranian mobile number operators such as MCI, MTN, and Rightel. It
uses regular expressions to match the prefixes of mobile phone numbers for each operator.

[//]: # (## Installation)

[//]: # ()
[//]: # (To use this library in your project, you can include the provided JavaScript file or copy the relevant code. If you are)

[//]: # (using Node.js or a bundler like Webpack, you can also install it as a package:)

## Usage

```javascript
const { check } = require('iranian-mobile-operator-checker');

// Example usage
check('0921'); // Output: "Operator: rightel"
```