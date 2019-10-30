import animation from "jspsych/plugins/jspsych-animation.js";
import audio_button_response from "jspsych/plugins/jspsych-audio-button-response.js";
import audio_keyboard_response from "jspsych/plugins/jspsych-audio-keyboard-response.js";
import audio_slider_response from "jspsych/plugins/jspsych-audio-slider-response.js";
import call_function from "jspsych/plugins/jspsych-call-function.js";
import categorize_html from "jspsych/plugins/jspsych-categorize-html.js";
import external_html from "jspsych/plugins/jspsych-external-html.js";
import free_sort from "jspsych/plugins/jspsych-free-sort.js";
import fullscreen from "jspsych/plugins/jspsych-fullscreen.js";
import html_button_response from "jspsych/plugins/jspsych-html-button-response.js";
import html_keyboard_response from "jspsych/plugins/jspsych-html-keyboard-response.js";
import html_slider_response from "jspsych/plugins/jspsych-html-slider-response.js";
import iat_html from "jspsych/plugins/jspsych-iat-html.js";
import iat_image from "jspsych/plugins/jspsych-iat-image.js";
import image_keyboard_response from "jspsych/plugins/jspsych-image-keyboard-response.js";
import image_slider_response from "jspsych/plugins/jspsych-image-slider-response.js";
import image_button_response from "jspsych/plugins/jspsych-image-button-response.js";
import instructions from "jspsych/plugins/jspsych-instructions.js";
import reconstruction from "jspsych/plugins/jspsych-reconstruction.js";
import resize from "jspsych/plugins/jspsych-resize.js";
import same_different_html from "jspsych/plugins/jspsych-same-different-html.js";
import same_different_image from "jspsych/plugins/jspsych-same-different-image.js";
import serial_reaction_time_mouse from "jspsych/plugins/jspsych-serial-reaction-time-mouse.js";
import serial_reaction_time from "jspsych/plugins/jspsych-serial-reaction-time.js";
import survey_likert from "jspsych/plugins/jspsych-survey-likert.js";
import survey_multi_choice from "jspsych/plugins/jspsych-survey-multi-choice.js";
import survey_multi_select from "jspsych/plugins/jspsych-survey-multi-select.js";
import survey_text from "jspsych/plugins/jspsych-survey-text.js";
import video from "jspsych/plugins/jspsych-video.js";
import visual_search_circle from "jspsych/plugins/jspsych-visual-search-circle.js";
import vsl_animate_occlusion from "jspsych/plugins/jspsych-vsl-animate-occlusion.js";
import vsl_grid_scene from "jspsych/plugins/jspsych-vsl-grid-scene.js";

import callback_html_keyboard_response from "./callback_plugins/callback_html_keyboard_response";
import callback_image_keyboard_response from "./callback_plugins/callback_image_keyboard_response";

const plugins = {
  "animation": animation,
  "audio-button-response": audio_button_response,
  "audio-slider-response": audio_slider_response,
  "audio-keyboard-response": audio_keyboard_response,
  "call-function": call_function,
  "categorize-html": categorize_html,
  "external-html": external_html,
  "free-sort": free_sort,
  "fullscreen": fullscreen,
  "html-button-response": html_button_response,
  "html-slider-response": html_slider_response,
  "html-keyboard-response": html_keyboard_response,
  "iat-html": iat_html,
  "iat-image": iat_image,
  "image-slider-response": image_slider_response,
  "image-keyboard-response": image_keyboard_response,
  "image-button-response": image_button_response,
  "instructions": instructions,
  "reconstruction": reconstruction,
  "resize": resize,
  "same-different-html": same_different_html,
  "same-different-image": same_different_image,
  "serial-reaction-time-mouse": serial_reaction_time_mouse,
  "serial-reaction-time": serial_reaction_time,
  "survey-likert": survey_likert,
  "survey-multi-choice": survey_multi_choice,
  "survey-multi-select": survey_multi_select,
  "survey-text": survey_text,
  "video": video,
  "visual-search-circle": visual_search_circle,
  "vsl-animate-occlusion": vsl_animate_occlusion,
  "vsl-grid-scene": vsl_grid_scene,
  "callback-html-keyboard-response": callback_html_keyboard_response,
  "callback-image-keyboard-response": callback_image_keyboard_response
};

export default plugins;
