<!-- <template>
  <table id="bag-ops">
    <thead>
      <tr>
        <th>slot</th>
        <th>item</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-if="assignedSlot !== undefined">{{ assignedSlot.name }}</td>
        <td v-else>Bought items</td>
        <td v-if="item !== undefined">{{ item.name }}</td>
        <td v-else>Please select an item</td>
      </tr>
    </tbody>
  </table>
  <button v-if="item !== undefined" @click="this.assign(item)">
    Assign
  </button>
  <span class="error" v-if="err !== undefined">{{ err }}</span>
  <button v-if="shop !== undefined && item !== undefined" @click="sell()">
    Sell for {{ price }}
  </button>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { Shop, Slot, Perso, Item } from './test';

export default {
  name: 'BagOps',
  props: {
    perso: { type: Object as PropType<Perso>, default: undefined },
    item: { type: Object as PropType<Item>, default: undefined },
    assignedSlot: { type: Object as PropType<Slot>, default: undefined },
    shop: { type: Object as PropType<Shop>, default: undefined },
  },
  methods: {
    assign(item: Item): void {
      /*I love typescript (not here)*/
      this.perso.assignAgain(
        item,
        this.assignedSlot
          ? this.perso.slots.indexOf(this.assignedSlot)
          : -1,
      );
      this.err = undefined;
      try {
        this.perso.assign(
          this.perso.boughtItems.indexOf(item),
          this.perso.slots.indexOf(this.assignedSlot),
        );
        this.err = undefined;
      } catch (e) {
        this.err = e.message;
        const that = this;
        setTimeout(function () {
          that.err = undefined;
        }, 10000);
      }
    },
    sell(): void {
      this.shop.buy(this.item);
      this.perso.sell(this.price, this.item);
      this.$emit('item');
    },
  },
  data(): { err: string | undefined; price: number | undefined } {
    return {
      err: undefined,
      price: undefined,
    };
  },
  emits: ['item'],
  watch: {
    itemWatch() {
      if (this.item && this.shop) {
        this.price = this.shop.estimate(this.item);
      }
    },
    shopWatch() {
      if (this.item && this.shop) {
        this.price = this.shop.estimate(this.item);
      }
    },
  },
};
</script> -->
