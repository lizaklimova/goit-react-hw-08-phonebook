import { Notify } from "notiflix";

const info = (message) => {
  Notify.init({
    backOverlay: true,
    timeout: 5000,
    info: {
      notiflixIconColor: "#fff",
      background: "#2230cb",
      textColor: "#fff",
      backOverlayColor: "rgba(0, 0, 0, 0.319)",
    },
  });

  return Notify.info(message);
};

const error = (message) => {
  Notify.init({
    backOverlay: true,
    timeout: 5000,
    error: {
      notiflixIconColor: "#fff",
      background: "#DC143C",
      textColor: "#fff",
      backOverlayColor: "rgba(216, 52, 52, 0.645)",
    },
  });

  return Notify.failure(message);
};

export { info, error };
