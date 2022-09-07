
export class ProjectItem {
    imgSrc:string;
    title:string;
    category: ProjectCategory | undefined; // TODO: make it Category class
    desc:string;
    images: string[];
    videoSrc: string;

    constructor( imgSrc:string,title:string, category:ProjectCategory | undefined, desc:string, images: string[], videoSrc: string){
            this.imgSrc = imgSrc;
            this.title = title;
            this.category = category;
            this.desc = desc;
            this.images = images;
            this.videoSrc = videoSrc;
        }
  }

  export class ProjectCategory {
    icon: string;
    title: string;
    color: string;
    anchorLink: string;
    cssClass: string;

    constructor( icon:string,title:string, color:string, anchorLink: string, cssClass: string){
        this.icon = icon;
        this.title = title;
        this.color = color;
        this.anchorLink = anchorLink;
        this.cssClass = cssClass;
    }
  }