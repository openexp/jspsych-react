import React, { Component } from "react";
import jsPsych from "jspsych";
import plugins from "./plugins"; // load all built-in plugins

class ExperimentWindow extends Component {
  constructor(props) {
    super(props);
    const default_timeline = [
      {
        type: "html-keyboard-response",
        stimulus: "This is the default timeline."
      }
    ];

    Object.assign(jsPsych.plugins, plugins, props.plugins);

    this.handleKeyEvent = e => {
      if (e.redispatched) {
        return;
      }
      let new_event = new e.constructor(e.type, e);
      new_event.redispatched = true;
      this.experimentDiv.dispatchEvent(new_event);
    };

    this.experimentDiv = null;
    this.width = props.width || "100%";
    this.height = props.height || "100%";

    this.settings = {
      ...props.settings,
      timeline: props.settings.timeline || default_timeline
    };
  }

  render() {
    return (
      <div
        id="experimentWindow"
        style={{ height: this.height, width: this.width }}
        ref={e => {
          this.experimentDiv = e;
        }}
      />
    );
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyEvent, true);
    window.addEventListener("keydown", this.handleKeyEvent, true);
    jsPsych.init({ ...this.settings, display_element: this.experimentDiv });
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyEvent, true);
    window.removeEventListener("keydown", this.handleKeyEvent, true);
    try {
      jsPsych.endExperiment("Ended Experiment");
    } catch (e) {
      console.log("Experiment closed before unmount");
    }
  }
}

export { jsPsych, ExperimentWindow };
