//index.js
const app = getApp()

Page({
  data: {
  
  },
  
  goAddPage(){
    wx.navigateTo({
      url: '/pages/add-inter/index',
    })
  },

  showInfo(){
    wx.getStorageInfo({
      success: (option) => {
        console.log(option)
        // this.setData = {
          
        // }
      },
    })
  }
  
})
