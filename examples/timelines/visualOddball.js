import { jsPsych } from "jspsych-react";
import { readdirSync } from "fs";

// Default Parameters
const params = {
  trial_duration: 300,
  stim_duration: 300,
  iti: 300,
  jitter: 200,
  n_trials: 170, // Around two minutes at a rate of ~700 ms per trial
  prob: 0.15,
  plugin_name: "callbackImageDisplay"
};

//  Default directories containing stimuli
const targetsDir = "../assets/cat_dog/cats/";
const nontargetsDir = ".../assets/cat_dog/dogs/";

// Oddball sampling function
// Assumes first half of the trials are oddball stimuli
// TODO: Make this autogenerate from reading dir
const oddballSamplingFunction = trials => {
  const trialOrder = new Array(params.n_trials).fill(0).map(() => {
    if (Math.random() > params.prob) {
      return Math.floor(
        Math.random() * (trials.length - trials.length / 2) + trials.length / 2
      );
    }
    return Math.floor(Math.random() * (trials.length / 2));
  });
  return trialOrder;
};

export const visualOddball = callback => [
  {
    id: "welcome",
    type: "callbackHTMLDisplay",
    stimulus: "Welcome to the experiment. Press any key to begin.",
    on_load: () => callback("start"),
    post_trial_gap: 1000
  },
  {
    id: "oddballTimeline",
    timeline: [
      {
        id: "interTrial",
        type: "callbackImageDisplay",
        stimulus: "../assets/cat_dog/fixation.jpg",
        trial_duration: () => params.iti + Math.random() * params.jitter,
        post_trial_gap: 0
      },
      {
        id: "trial",
        type: "callbackImageDisplay",
        stimulus: jsPsych.timelineVariable("stimulusVar"),
        on_load: jsPsych.timelineVariable("callbackVar"),
        choices: ["f", "j"],
        trial_duration: params.trial_duration,
        post_trial_gap: 0
      }
    ],
    timeline_variables: readdirSync(targetsDir)
      .map(filename => ({
        stimulusVar: filename,
        callbackVar: () => callback("target")
      }))
      .concat(
        readdirSync(nontargetsDir).map(filename => ({
          stimulusVar: filename,
          callbackVar: () => callback("nontarget")
        }))
      ),
    sample: {
      type: "custom",
      fn: oddballSamplingFunction
    }
  },
  {
    id: "end",
    type: "callbackHTMLDisplay",
    stimulus: "Thanks for participating",
    post_trial_gap: 500,
    on_load: () => callback("stop")
  }
];
