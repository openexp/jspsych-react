<!-- Logo -->
<p align="center">
    <img height="128" width="128" src="/jspsych-react-logo.jpg">
</p>

<!-- Name -->
<h1 align="center">
  <a href="https://www.jspsych.org//">jsPsych React</a>
</h1>

> jsPsych React is a very new project, but will hopefully be of use to anyone crazy enough to be building experimental psychology apps in JavaScript!:

## Getting Started

jsPsych React is not yet an npm module. For now:

Clone this repo
`git clone https://github.com/makebrainwaves/jspsych-react`

`npm link` your version of the local repo

In the project you want to use jsPsyc React in, run `npm link jspsych-react`

You can use the `Experiment` component from jsPsych React to include a jsPsych experiment in your project. It requires two props: `timeline` and `plugins`

```javascript
import { Experiment } from "jspsych-react";
import { visualOddball } from "../examples/timelines";
import { callbackHTMLDisplay, callbackImageDisplay } from "../examples/plugins";

// ...

render() {
    return (
    <div>
      <Experiment
        timeline={visualOddball}
        plugins={{ callbackHTMLDisplay, callbackImageDisplay }}
      />
    </div>
  );
}
```
