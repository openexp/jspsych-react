<!-- Logo -->
<p align="center">
    <img width="400" src="https://raw.githubusercontent.com/makebrainwaves/jspsych-react/master/jspsych-react-logo.jpg">
</p>


> jsPsych React is a very new project, but will hopefully be of use to anyone crazy enough to be building experimental psychology apps in JavaScript!:

## Getting Started

jsPsych React is now an npm module:

`npm install jspsych-react`


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
