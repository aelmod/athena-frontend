export class Page<T> {

  public size: number;
  public totalElements: number;
  public totalPages: number;
  public number: number;

  public list: T[];

  public static fromResponse<T>(res: any, key: string): Page<T> {
    const page: Page<T> = new Page<T>();
    const pageObject = res.json();
    page.list = pageObject._embedded[key];
    page.size = pageObject.page.size;
    page.totalElements = pageObject.page.totalElements;
    page.totalPages = pageObject.page.totalPages;
    page.number = pageObject.page.number;
    return page;
  }
}
