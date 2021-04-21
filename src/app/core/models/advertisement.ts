/* tslint:disable:variable-name */
export class Advertisement {
  id: number;
  name: string;
  date: Date;
  title: string;
  field: string;
  old_value: string;
  new_value: string;

  constructor(id: number, name: string, date: Date, title: string, field: string, old_value: string, new_value: string) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.title = title;
    this.field = field;
    this.old_value = old_value;
    this.new_value = new_value;
  }
}
