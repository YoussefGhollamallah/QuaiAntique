export default class Route {
 constructor(url, title, pathHtml, patchJs = "") {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.patchJs = patchJs;
     }
}