import { isNgTemplate } from "@angular/compiler";
import { ProjectCategory } from "./projectItem";

export const projectCategoryList: ProjectCategory[] = [
    new ProjectCategory("assets/images/motion_design_arrow.png",
    "Motion design", "linear-gradient(to left, #00FFA9, #3EA6DB)", "motivapp-anchor", "motion-design"),
    new ProjectCategory("assets/images/icon_webdesign.png",
    "Web design", "linear-gradient(to left, #CD4AB6, #00FFA9)", "eskuvokorzo-anchor", "web-design"),
    new ProjectCategory("assets/images/icon_cam.png",
    "Videography", "linear-gradient(to left, #3EA6DB, #CD4AB6)", "neptanc-anchor", "videography")
  ];

  export const motionDesignCategory = projectCategoryList.find((item: ProjectCategory) => item.title == "Motion design");
  export const webDesignCategory = projectCategoryList.find((item: ProjectCategory) => item.title == "Web design");
  export const videographyCategory = projectCategoryList.find((item: ProjectCategory) => item.title == "Videography");