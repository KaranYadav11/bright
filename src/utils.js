import TagManager from "react-gtm-module";

export const sendGTMEvent = (eventName, eventData) => {
  TagManager.dataLayer({
    dataLayer: {
      event: eventName,
      ...eventData,
    },
  });
};
