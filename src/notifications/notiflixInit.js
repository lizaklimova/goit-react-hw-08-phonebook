import { Notify } from "notiflix";

const info = (message) => {
  Notify.init({
    backOverlay: true,
    info: {
      notiflixIconColor: "#fff",
      background: "#000",
      textColor: "#fff",
      backOverlayColor: "rgba(198, 191, 191, 0.568)",
    },
  });

  return Notify.info(message);
};

const error = (message) => {
  Notify.init({
    backOverlay: true,
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
