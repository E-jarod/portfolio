// /* eslint-disable @typescript-eslint/no-non-null-assertion */
// export enum Type {
//   HELMET,
//   CROWN,
//   ARMOR,
//   CLOTHES,
//   WEAPON,
//   LIGHTER,
//   PURSE,
//   POTION,
//   SPELL,
//   FOOD,
// }

// const itemLimits = [
//   { slot: 'head', limit: 1, types: [Type.HELMET, Type.CROWN] },
//   { slot: 'body', limit: 1, types: [Type.ARMOR, Type.CLOTHES] },
//   { slot: 'hands', limit: 2, types: [Type.WEAPON, Type.LIGHTER] },
//   { slot: 'belt', limit: 3, types: [Type.WEAPON, Type.PURSE] },
//   {
//     slot: 'bag',
//     limit: 10,
//     types: [
//       Type.HELMET,
//       Type.CROWN,
//       Type.CLOTHES,
//       Type.LIGHTER,
//       Type.POTION,
//       Type.SPELL,
//       Type.FOOD,
//       Type.PURSE,
//     ],
//   },
// ];

// export class Item {
//   private static counter = 0;
//   private readonly _id: number;
//   private _name: string;
//   private _type: Type;
//   private _price: number;
//   private _effect: string;

//   public constructor(
//     name: string,
//     type: Type,
//     price: number,
//     effect: string,
//   ) {
//     Item.counter++;
//     this._id = Item.counter;
//     this._name = name;
//     this._type = type;
//     this._price = Math.max(price, 0);
//     this._effect = effect;
//   }

//   get id(): number {
//     return this._id;
//   }

//   get price(): number {
//     return this._price;
//   }

//   set price(value: number) {
//     this._price = value;
//   }

//   get name(): string {
//     return this._name;
//   }

//   set name(value: string) {
//     this._name = value;
//   }

//   get type(): Type {
//     return this._type;
//   }

//   set type(value: Type) {
//     this._type = value;
//   }

//   get effect(): string {
//     return this._effect;
//   }

//   set effect(value: string) {
//     this._effect = value;
//   }

//   get category(): string {
//     switch (this._type) {
//       case Type.ARMOR:
//         return '🛡';
//       case Type.CLOTHES:
//         return '👕';
//       case Type.CROWN:
//         return '👑';
//       case Type.POTION:
//         return '🍹';
//       case Type.SPELL:
//         return '🪄';
//       case Type.FOOD:
//         return '🧁';
//       case Type.HELMET:
//         return '🪖';
//       case Type.LIGHTER:
//         return '🪔';
//       case Type.PURSE:
//         return '👛';
//       case Type.WEAPON:
//         return '🗡️';

//       default:
//         return '❌';
//     }
//   }

//   get description(): string {
//     if (this.effect === 'used') return 'used item';
//     if (this.effect === '') return this.name;
//     let string = this.effect.split('')[1] === '+' ? 'Adds ' : 'Removes ';
//     string += `${this.effect
//       .split('')
//       .map((i, index) => {
//         return index >= 2 ? i : '';
//       })
//       .join('')}`;
//     string += ' to your ';
//     switch (this.effect.split('')[0]) {
//       case 'a':
//         string += 'armor temporarily';
//         break;
//       case 'A':
//         string += 'armor permanently';
//         break;
//       case 's':
//         string += 'strength temporarily';
//         break;
//       case 'S':
//         string += 'strength permanently';
//         break;
//       case 'l':
//         string += 'life';
//         break;
//       case 'L':
//         string += 'vitality (max life)';
//         break;
//     }
//     return string;
//   }

//   public static fromJSON(json: string): Item {
//     return JSON.parse(json) as Item;
//   }

//   public static clone(item: Item): Item {
//     return new Item(item.name, item.type, item.price, item.effect);
//   }
// }

// const items = [
//   new Item('conic helmet', Type.HELMET, 200, 'A+10'),
//   new Item('great crown of apologia', Type.CROWN, 200, 'A+20'),
//   new Item('band of joy', Type.CROWN, 100, 'L+10'),
//   new Item('leather armor', Type.ARMOR, 100, 'A+10'),
//   new Item('broigne', Type.ARMOR, 200, 'A+20'),
//   new Item('hauberk', Type.ARMOR, 500, 'A+40'),
//   new Item('plate armor', Type.ARMOR, 1000, 'A+60'),
//   new Item('tuxedo', Type.CLOTHES, 600, 'L+1'),
//   new Item('cursed swimsuit', Type.CLOTHES, 10, 'A-10'),
//   new Item('unicorn cosplay', Type.CLOTHES, 200, 'L+10'),
//   new Item('dagger', Type.WEAPON, 100, 'S+5'),
//   new Item('cursed dagger', Type.WEAPON, 100, 'S-5'),
//   new Item('short sword', Type.WEAPON, 200, 'S+10'),
//   new Item('cursed short sword', Type.WEAPON, 200, 'S-10'),
//   new Item('long sword', Type.WEAPON, 300, 'S+20'),
//   new Item('cursed long sword', Type.WEAPON, 300, 'S-20'),
//   new Item('axe', Type.WEAPON, 100, 'S+10'),
//   new Item('cursed axe', Type.WEAPON, 100, 'S-10'),
//   new Item('great axe', Type.WEAPON, 200, 'S+20'),
//   new Item('cursed great axe', Type.WEAPON, 200, 'S-20'),
//   new Item('torch', Type.LIGHTER, 2, ''),
//   new Item('oil lamp', Type.LIGHTER, 10, ''),
//   new Item('leather purse', Type.PURSE, 10, ''),
//   new Item('protection potion', Type.POTION, 100, 'a+10'),
//   new Item('health potion', Type.POTION, 100, 'l+10'),
//   new Item('strength potion', Type.POTION, 100, 's+10'),
//   new Item('fireball', Type.SPELL, 1000, ''),
//   new Item('ice cone', Type.SPELL, 1000, ''),
//   new Item('total healing', Type.SPELL, 1000, ''),
//   new Item('invisibility', Type.SPELL, 1000, ''),
//   new Item('levitation', Type.SPELL, 1000, ''),
//   new Item('apple', Type.FOOD, 1, 'l+1'),
//   new Item('chicken', Type.FOOD, 10, 'l+5'),
//   new Item('beef', Type.FOOD, 15, 'l+10'),
//   new Item('wine', Type.FOOD, 2, 'l+2'),
// ];

// export class Perso {
//   private static counter = 0;
//   private readonly _id = Perso.counter;
//   private _armor = 0;
//   private _slots: Slot[] = [
//     new Slot(1, 'head'),
//     new Slot(2, 'body'),
//     new Slot(3, 'hands'),
//     new Slot(4, 'belt'),
//     new Slot(5, 'bag'),
//   ];
//   private _boughtItems: Item[] = [];
//   private _name: string;
//   private _level: number;
//   private _vitality: number;
//   private _life: number;
//   private _strength: number;
//   private _gold: number;

//   constructor(name: string, level: number) {
//     Perso.counter++;
//     this._name = name;
//     this._level = level;
//     this._vitality = 50 * level;
//     this._life = this._vitality;
//     this._strength = 20 * level;
//     this._gold = Math.floor(Math.random() * 100 * level);
//   }

//   public buy(item: Item, shop: Shop): void {
//     if (item.price > this.gold)
//       throw new Error("You don't have enough gold.");

//     this.gold -= item.price;
//     this.boughtItems.push(
//       shop.itemStock.splice(shop.itemStock.indexOf(item), 1)[0]!,
//     );
//   }

//   public assign(itemIndex: number, slotIndex: number): boolean {
//     if (slotIndex === -1) return false;
//     if (!this.boughtItems[itemIndex] || !this.slots[slotIndex])
//       throw new Error('Wrong index to assign');

//     const item = this.boughtItems[itemIndex]!;
//     const slot = this.slots[slotIndex]!;
//     if (item.type !== Type.POTION && item.type !== Type.FOOD)
//       for (const limit of itemLimits)
//         if (limit.slot === slot.name)
//           if (limit.limit === slot.items.length)
//             throw new Error('limit reached for the slot ' + slot.name);
//           else if (!limit.types.includes(item.type))
//             throw new Error('This type is not assignable.');

//     if (item.effect[0] === 'a' || item.effect[0] === 's')
//       if (slot.name !== 'bag')
//         throw new Error('You can only assign this item in the Bag');
//     if (
//       slot.name !== 'bag' ||
//       item.effect[0] === 'a' ||
//       item.effect[0] === 's' ||
//       item.type === Type.POTION ||
//       item.type === Type.FOOD
//     )
//       this.addEffect(item, true);
//     this.slots.forEach((s) => {
//       s.items.filter((i) => i.effect !== 'used');
//     });
//     this.boughtItems.filter((i) => i.effect !== 'used');
//     slot.addItem(this.boughtItems.splice(itemIndex, 1)[0]!);
//     return true;
//   }

//   /**
//    * Change the item of place
//    * @param item
//    * @param slot
//    * >= 0 for a slot, <0 for boughtItems
//    */
//   public assignAgain(item: Item, slot: number): void {
//     let oldSlot = null;
//     for (let i = 0; i < this.slots.length; i++)
//       if (this.slots[i]?.items.includes(item)) {
//         oldSlot = this.slots[i];
//         break;
//       }

//     if (oldSlot == undefined)
//       throw new Error("Couldn't find the item in your slots");
//     const itemToPush = oldSlot.items.splice(
//       oldSlot.items.indexOf(item),
//       1,
//     )[0];
//     if (itemToPush) this.boughtItems.push();
//     else throw Error('item undefined ?');

//     if (oldSlot.name !== 'bag') this.addEffect(item, false);
//     if (slot >= 0) this.assign(this.boughtItems.indexOf(item), slot);
//   }

//   /**
//    * Adds or removes the effect of the given item
//    * @param item
//    * @param add
//    * true to add the effect, false to remove it
//    * @private
//    */
//   private addEffect(item: Item, add: boolean): void {
//     // eslint-disable-next-line @typescript-eslint/no-this-alias
//     const that = this;
//     let nb = +item.effect
//       .split('')
//       .map((i: string, index: number) => {
//         return index >= 2 ? i : '';
//       })
//       .join('');
//     nb *= item.effect.split('')[1] === '+' ? 1 : -1;
//     nb *= add ? 1 : -1;
//     switch (item.effect.split('')[0]) {
//       case 'a':
//         this.armor += nb;
//         setTimeout(function () {
//           that.armor -= nb;
//           item.effect = 'used';
//         }, 1000 * 60 * 5);
//         break;
//       case 'A':
//         this.armor += nb;
//         break;
//       case 'l':
//         if (this.life < this.vitality) {
//           this.life = Math.min(this.life + nb, this.vitality);
//           item.effect = 'used';
//         } else {
//           throw new Error('Your health is already full');
//         }
//         break;
//       case 'L':
//         this.vitality += nb;
//         break;
//       case 's':
//         if (item.type === Type.POTION) {
//           this.strength += nb;
//           item.effect = 'used';
//         } else {
//           this.strength += nb;
//           setTimeout(function () {
//             that.strength -= nb;
//             item.effect = 'used';
//           }, 1000 * 60 * 5);
//         }
//         break;
//       case 'S':
//         this.strength += nb;
//         if (item.type === Type.POTION) item.effect = 'used';
//         break;
//     }
//   }

//   public sell(price: number, item: Item): void {
//     this.gold += price;
//     // removes the item from its slot
//     try {
//       this.assignAgain(item, -1);
//     } catch (e) {
//       console.log('');
//     }
//     this.boughtItems.splice(this.boughtItems.indexOf(item), 1);
//   }

//   public static fromJSON(json: string): Perso {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//     const obj: Perso = JSON.parse(json);
//     const perso = new Perso(obj.name, obj.level);
//     perso.vitality = obj.vitality;
//     perso.life = obj.life;
//     perso.strength = obj.strength;
//     perso.armor = obj.armor;
//     perso.gold = obj.gold;
//     obj.slots.forEach(function (s: Slot) {
//       perso.slots.push(s);
//     });
//     obj.boughtItems.forEach(function (i: Item) {
//       perso.boughtItems.push(i);
//     });

//     return perso;
//   }

//   get id(): number {
//     return this._id;
//   }

//   get name(): string {
//     return this._name;
//   }

//   set name(value: string) {
//     this._name = value;
//   }

//   get level(): number {
//     return this._level;
//   }

//   set level(value: number) {
//     this._level = value;
//   }

//   get vitality(): number {
//     return this._vitality;
//   }

//   set vitality(value: number) {
//     this._vitality = value;
//   }

//   get life(): number {
//     return this._life;
//   }

//   set life(value: number) {
//     this._life = value;
//   }

//   get strength(): number {
//     return this._strength;
//   }

//   set strength(value: number) {
//     this._strength = value;
//   }

//   get armor(): number {
//     return this._armor;
//   }

//   set armor(value: number) {
//     this._armor = value;
//   }

//   get gold(): number {
//     return this._gold;
//   }

//   set gold(value: number) {
//     this._gold = value;
//   }

//   get slots(): Slot[] {
//     return this._slots;
//   }

//   set slots(value: Slot[]) {
//     this._slots = value;
//   }

//   get boughtItems(): Item[] {
//     return this._boughtItems;
//   }

//   set boughtItems(value: Item[]) {
//     this._boughtItems = value;
//   }
// }

// export class Slot {
//   private _name: string;
//   private readonly _id: number;
//   private _items: Item[];
//   constructor(id: number, name: string) {
//     this._id = id;
//     this._name = name;
//     this._items = [];
//   }

//   get name(): string {
//     return this._name;
//   }

//   set name(value: string) {
//     this._name = value;
//   }

//   get id(): number {
//     return this._id;
//   }

//   get items(): Item[] {
//     return this._items;
//   }

//   addItem(item: Item): void {
//     this._items.push(item);
//   }

//   public static fromJSON(json: string): Slot {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//     const obj: Slot = JSON.parse(json);
//     const slot = new Slot(obj.id, obj.name);
//     obj.items.forEach((i: Item) => {
//       slot.addItem(i);
//     });
//     return slot;
//   }
// }
// export class Shop {
//   private static _counter = 0;
//   private _id = Shop._counter;
//   private _name: string;
//   private _itemCat: Type[];
//   private _itemOrder: Item[] = [];
//   private _itemStock: Item[] = [];

//   constructor(name: string, itemCat: Type[]) {
//     Shop._counter++;
//     this._name = name;
//     this._itemCat = itemCat;
//     this.fillStock();
//     this.fillOrder();
//   }

//   /**
//    * Fills the stock with 10 different (random) items (or less if 10 different are not available)
//    * @public
//    */
//   public fillStock(): void {
//     const _items = items.filter((it) => this.itemCat.includes(it.type));
//     for (let i = 0; i < 10 && _items.length > 0; i++)
//       this.itemStock.push(
//         Item.clone(
//           _items.splice(Math.floor(Math.random() * _items.length), 1)[0]!,
//         ),
//       );

//     this.itemStock.sort((i1, i2) => {
//       if (i1.type === i2.type) return 0;
//       const sort: Type[] = [i1.type, i2.type].sort();
//       return sort[0] === i1.type ? -1 : 1;
//     });
//   }

//   /**
//    * Fills the order list with 5 different (random) items (or less)
//    * @public
//    */
//   public fillOrder(): void {
//     let item = items.filter((it) => this.itemCat.includes(it.type));

//     /*
//         Somehow, it.filter wasn't working
//         Don't ask me why, I wouldn't know.
//          */
//     const newIt: Item[] = [];
//     for (let i = 0; i < item.length; i++) {
//       for (let j = 0; j < this.itemStock.length; j++)
//         if (
//           this.itemStock[j]!.name === item[i]!.name &&
//           i < item.length &&
//           j < this.itemStock.length
//         ) {
//           i++;
//           j = i < item.length ? 0 : Number.MAX_VALUE;
//         }

//       if (item[i]) newIt.push(item[i]!);
//     }
//     item = newIt;
//     console.log(item);

//     for (let i = 0; i < 5 && item.length > 0; i++)
//       this.itemOrder.push(
//         Item.clone(
//           item.splice(Math.floor(Math.random() * item.length), 1)[0]!,
//         ),
//       );

//     this.itemOrder.sort((i1, i2) => {
//       if (i1.type === i2.type) return 0;
//       const sort: Type[] = [i1.type, i2.type].sort();
//       return sort[0] === i1.type ? -1 : 1;
//     });
//   }

//   public sell(id: number): void {
//     if (!this.itemStock[id]) return;
//     this.itemStock.splice(id, 1);
//   }

//   public estimate(item: Item): number {
//     if (!this.itemCat.includes(item.type)) return -1;
//     return Math.max(
//       Math.round(item.price - Math.random() * 0.9 * item.price),
//       0,
//     );
//   }

//   public buy(item: Item): void {
//     this.itemStock.push(item);
//   }

//   public order(id: number): void {
//     if (!this.itemOrder[id]) throw new Error(`Wrong id : ${id}`);
//     // eslint-disable-next-line @typescript-eslint/no-this-alias
//     const that = this;
//     setTimeout(function () {
//       that.itemStock.push(...that.itemOrder.splice(id, 1));
//     }, 30_000);
//   }

//   public static fromJSON(json: string): Shop {
//     return JSON.parse(json) as Shop;
//   }

//   static get counter(): number {
//     return this._counter;
//   }

//   static set counter(value: number) {
//     this._counter = value;
//   }

//   get id(): number {
//     return this._id;
//   }

//   set id(value: number) {
//     this._id = value;
//   }

//   get name(): string {
//     return this._name;
//   }

//   set name(value: string) {
//     this._name = value;
//   }

//   get itemCat(): Type[] {
//     return this._itemCat;
//   }

//   set itemCat(value: Type[]) {
//     this._itemCat = value;
//   }

//   get itemOrder(): Item[] {
//     return this._itemOrder;
//   }

//   set itemOrder(value: Item[]) {
//     this._itemOrder = value;
//   }

//   get itemStock(): Item[] {
//     return this._itemStock;
//   }

//   set itemStock(value: Item[]) {
//     this._itemStock = value;
//   }
// }
