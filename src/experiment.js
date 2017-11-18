import React, { Component } from 'react';
import jsPsych from 'jspsych';
import html_keyboard_response from 'jspsych/plugins/jspsych-html-keyboard-response';
import image_keyboard_response from 'jspsych/plugins/jspsych-image-keyboard-response';


class Experiment extends Component {

  constructor(props){
    super(props);
    const default_timeline = [{
      type: "html-keyboard-response",
      stimulus: "This is the default timeline."
    }];

    // Import plugins
    const plugins = {
    "html-keyboard-response": html_keyboard_response,
    "image_keyboard_response": image_keyboard_response
    }

    Object.assign(jsPsych.plugins, plugins, props.plugins)

    this.experimentDiv = null;
    this.timeline = props.timeline || default_timeline;
    this.width = props.width || '100%';
    this.height = props.height || '100%';
    this.default_iti = props.default_iti || 3000;
  };

  render() {
    return (
      <div id="experiment"
           style={{'height': this.height, 'width': this.width}}
           ref={(e) => { this.experimentDiv = e; }}
      />
    );
  }

  componentDidMount() {
    /* start the experiment */
    jsPsych.init({
      display_element: this.experimentDiv,
      timeline: this.timeline,
      default_iti: this.default_iti
    });
  }
}

export { jsPsych, Experiment };
