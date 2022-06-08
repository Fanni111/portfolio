
export class ProjectItem {
    imgSrc:string;
    title:string;
    category:string; // TODO: make it Category class
    desc:string;
    images: string[];

    constructor( imgSrc:string,title:string, category:string, desc:string, images: string[]){
            this.imgSrc = imgSrc;
            this.title = title;
            this.category = category;
            this.desc = desc;
            this.images = images;
        }
  }

  export class ProjectCategory {
    icon: string;
    title: string;
    color: string;
    anchorLink: string;

    constructor( icon:string,title:string, color:string, anchorLink: string){
        this.icon = icon;
        this.title = title;
        this.color = color;
        this.anchorLink = anchorLink;
    }
  }