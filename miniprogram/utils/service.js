const routeMap = {
  interDetail: "/pages/inter-detail/index",
  home: "/pages/index/index",
  interEdit: "/pages/add-edit-inter/index",
  interCalendar: "/pages/inter-calendar/index",
}
function goPage(name, config) {
  let url = routeMap[name]
  if (config && config.params) {
    url += '?';
    Object.keys(config.params).forEach(key => {
      url += `${key}=${config.params[key]}&`
    });

    url = url.substr(0, url.length - 1)
  }

  wx.navigateTo({
    url: url
  })
}

module.exports.goPage = goPage;