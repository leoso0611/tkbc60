export const returnTitle = (type) => {
  switch (type) {
    case "media":
      return "照片作品"; // 影視
    case "drawing":
      return "繪畫作品";
    case "calligraphy":
      return "書法作品";
    case "zothers":
      return "其他作品"; // 其他
    case "sound":
      return "音樂作品"; 
    default:
      return "";
  }
};

export const returnFontColor = (type) => {
  switch (type) {
    case "media":
    case "zothers":
    case "sound":
      return "text-white";
    default:
      return "text-black";
  }
};

export const returnHoverBackgroundColor = (type) => {
  // return ("hover:bg-" + type).toString();
  switch (type) {
    case "media":
      return "hover:bg-media";
    case "drawing":
      return "hover:bg-drawing";
    case "calligraphy":
      return "hover:bg-calligraphy";
    case "zothers":
      return "hover:bg-zothers";
    case "sound":
      return "hover:bg-sound";
    default:
      return "";
  }
};
