// components/top-nav-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showBack: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goBack: function () {
      wx.navigateBack({
        delta: 0,
      })
    }
  }
})
