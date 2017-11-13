import React, { Component } from 'react';
import jsPsych from 'jspsych';
import html_keyboard_response from 'jspsych/plugins/jspsych-html-keyboard-response';


// Import plugins
jsPsych.plugins["html-keyboard-response"] = html_keyboard_response;

export default class Experiment extends Component {

  constructor(props){
    super(props);
    const default_timeline = [{
      type: "html-keyboard-response",
      stimulus: "This is the default timeline."
    }];

    if (props.plugins) {
      jsPsych.plugins.push(props.plugins);
    }

    this.timeline = props.timeline || default_timeline;
    this.width = props.width || '100%';
    this.height = props.height || '100%';
    this.default_iti = props.default_iti || 3000;
  };

  render() {
    return (
      <div id="experiment" style={{'height': this.height, 'width': this.width}}></div>
    );
  }

  componentDidMount() {
    /* start the experiment */
    jsPsych.init({
      display_element: "experiment",
      timeline: this.timeline,
      default_iti: this.default_iti
    });
  }
}
