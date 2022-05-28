
export class ProjectItem {
    imgSrc:string;
    title:string;
    category:string; // TODO: make it Category class
    desc:string;

    constructor( imgSrc:string,title:string, category:string, desc:string){
            this.imgSrc = imgSrc;
            this.title = title;
            this.category = category;
            this.desc = desc
            ;
        }
  }

  export class ProjectCategory {
    icon: string;
    title: string;
    color: string;

    constructor( icon:string,title:string, color:string){
        this.icon = icon;
        this.title = title;
        this.color = color;
        ;
    }
  }