export class Advertisement {
    public title : string;
    public category : string;
    public image : string;
    public content : string;
    public publish : boolean;
    public id : number;

    constructor(title:string, category:string, image:string, content : string, 
        publish:boolean) {
        this.title = title;
        this.category = category;
        this.image = image;
        this.content = content;
        this.publish = publish;
    }
}
