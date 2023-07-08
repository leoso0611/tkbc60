export const returnTitle = (type) => {
  switch (type) {
    case "photo":
      return "照片作品";
    case "drawing":
      return "繪畫作品";
    case "calligraphy":
      return "書法作品";
    case "diy":
      return "手工作品";
    case "sound":
      return "音樂作品";
    default:
      return "";
  }
};

export const returnFontColor = (type) => {
  switch (type) {
    case "photo":
    case "diy":
    case "sound":
      return "text-white";
    default:
      return "text-black";
  }
};