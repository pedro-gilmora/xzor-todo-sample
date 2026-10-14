export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const KEY = "xzor-todos";

/** The todo list, kept in localStorage so it survives reloads. */
export class TodoService {
  readonly items: Todo[] = load();
  #nextId = this.items.reduce((max, t) => Math.max(max, t.id), 0) + 1;

  get pending(): number {
    return this.items.filter((t) => !t.done).length;
  }

  add(text: string): void {
    this.items.push({ id: this.#nextId++, text, done: false });
    this.save();
  }

  remove(id: number): void {
    const i = this.items.findIndex((t) => t.id === id);
    if (i >= 0) this.items.splice(i, 1);
    this.save();
  }

  clearDone(): void {
    for (let i = this.items.length - 1; i >= 0; i--) if (this.items[i]!.done) this.items.splice(i, 1);
    this.save();
  }

  save(): void {
    localStorage.setItem(KEY, JSON.stringify(this.items));
  }
}

function load(): Todo[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "") as Todo[];
  } catch {
    return [
      { id: 1, text: "Try xzor", done: true },
      { id: 2, text: "Edit pages/Todos.xzor and watch it rebuild", done: false },
      { id: 3, text: "Ship something", done: false },
    ];
  }
}
