export const getTypeZh = (type) => {
  switch (type) {
    case "sound":
      return "音樂作品";
    case "photo":
      return "照片作品";
    case "calligraphy":
      return "書法作品";
    case "diy":
      return "手工作品";
    case "drawing":
      return "繪畫作品";
    default:
      return "空白";
  }
};
