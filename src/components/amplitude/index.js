import amplitude from 'amplitude-js';

export const initAmplitude = () => {
  amplitude.getInstance().init(process.env.REACT_APP_AMPLITUDE);
};

export function SaveEvent(name_event) {
    amplitude.getInstance().logEvent(name_event);
}
