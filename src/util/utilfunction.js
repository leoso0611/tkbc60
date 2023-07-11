export const getTypeZh = (type) => {
  switch (type) {
    case "sound":
      return "音樂作品";
    case "media":
      return "照片作品";
    case "calligraphy":
      return "書法作品";
    case "zothers":
      return "手工作品";
    case "drawing":
      return "繪畫作品";
    default:
      return "空白";
  }
};
