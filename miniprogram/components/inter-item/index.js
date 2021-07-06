const service = require("../../utils/service.js")

Component({
  properties: {
    interInfo: {
      type: Object,
    },
  },
  data: {
    interTimeStamp: 0,
    bgColor: '#fff',
  },
  methods: {
    goToDetail: function () {
      service.goPage('interDetail', {
        params: {
          id: this.data.interInfo.id
        }
      });
    }
  },
  observers: {
    'interInfo': function (params) {
      let interStamp = new Date(this.properties.interInfo.interDate + ' ' + this.properties.interInfo.interTime).getTime();
      let now = Date.now();
      let oneHour = 60 * 60 * 1000;

      if (interStamp > now) {
        if (interStamp - now < 8 * oneHour && interStamp - now > oneHour) {
          this.setData({
            bgColor: `linear-gradient(to left, #fdcdc1 , white);`
          })
        } else if (interStamp - now < oneHour) {
          this.setData({
            bgColor: `linear-gradient(to left, rgba(255,0,03,${((interStamp - now) / oneHour).toFixed(2)}) , white);`
          })
        } else {
          this.setData({
            bgColor: `linear-gradient(to left, #cee3f9 , white);`
          })
        }
      } else {
        this.setData({
          bgColor: `linear-gradient(to left, #a6a7a6 , white);`
        })
      }
    }
  }
})
