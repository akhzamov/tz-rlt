import { defineStore } from 'pinia'
import item1 from '~/assets/images/item-1.png';
import item2 from '~/assets/images/item-2.png';
import item3 from '~/assets/images/item-3.png';

export const useMainStore = defineStore('main', {
  state: () => ({
    items: [
      { id: 1, count: 99, image: item1 },
      { id: 2, count: 99, image: item2 },
      { id: 3, count: 99, image: item3 },
      { id: 4, count: 0, image: '' },
      { id: 5, count: 0, image: '' },
      { id: 6, count: 0, image: '' },
      { id: 7, count: 0, image: '' },
      { id: 8, count: 0, image: '' },
      { id: 9, count: 0, image: '' },
      { id: 10, count: 0, image: '' },
      { id: 11, count: 0, image: '' },
      { id: 12, count: 0, image: '' },
      { id: 13, count: 0, image: '' },
      { id: 14, count: 0, image: '' },
      { id: 15, count: 0, image: '' },
      { id: 16, count: 0, image: '' },
      { id: 17, count: 0, image: '' },
      { id: 18, count: 0, image: '' },
      { id: 19, count: 0, image: '' },
      { id: 20, count: 0, image: '' },
      { id: 21, count: 0, image: '' },
      { id: 22, count: 0, image: '' },
      { id: 23, count: 0, image: '' },
      { id: 24, count: 0, image: '' },
      { id: 25, count: 0, image: '' }
    ],
    currentDraggedImage: '',
    currentDraggedIndex: -1,
    info: false,
    infoDelItem: false,
    infoImg: '',
    infoIndex: 0,
  }),
  actions: {
    onStartDrag(evt: any) {
      this.currentDraggedImage = this.items[evt.oldIndex].image;
      this.currentDraggedIndex = evt.oldIndex;
    },
    onItemMove(evt: any) {
      const newIndex = evt.newIndex;


      if (this.items[newIndex] && this.items[newIndex].image !== '') {
        console.error('Невозможно переместить изображение в занятую ячейку!');
        return false;
      }


      if (this.items[this.currentDraggedIndex]) {
        this.items[newIndex].image = this.currentDraggedImage;
        this.items[this.currentDraggedIndex].image = '';
      }
    },
    activeInfo(img: string, index: any) {
      this.info = false
      this.infoImg = ''
      this.infoIndex = 0

      if (img !== '') {
        this.info = true
        this.infoImg = img
        this.infoIndex = index
      }
    },
    deActiveInfo() {
      this.info = false
      this.infoImg = ''
    },
    deleteItem(count: string) {
      if (this.infoDelItem && this.infoImg !== '') {
        this.items[this.infoIndex].count = this.items[this.infoIndex].count - Number(count)
        this.infoDelItem = false
        this.info = false
        this.infoImg = ''
        this.infoIndex = 0
      }
    }
  },
  persist: true,
})
