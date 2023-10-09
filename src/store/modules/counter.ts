// counter.ts
import { proxy } from 'valtio';

export const collapsedStore = proxy({
  // state
  collapsed: false, // 导航展开收起
  // action
  setCollapsed: (val?: boolean) => {
    if (val !== undefined) {
      collapsedStore.collapsed = val
    } else {
      collapsedStore.collapsed = !collapsedStore.collapsed
    }
  },
})