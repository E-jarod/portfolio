export class LocalStorageService {
  private static _instance?: LocalStorageService;

  private constructor() {}

  static get instance(): LocalStorageService {
    if (!this._instance) this._instance = new LocalStorageService();
    return this._instance;
  }

  get localStorage(): Storage {
    return localStorage;
  }

  getItem<T>(key: string): T | undefined {
    const item = this.localStorage.getItem(key);
    if (!item) return;
    return JSON.parse(item) as T;
  }

  setItem<T>(key: string, value: T): void {
    const json = JSON.stringify(value);
    this.localStorage.setItem(key, json);
  }

  get length(): number {
    return this.localStorage.length;
  }
}

export const localStorageService = LocalStorageService.instance;
