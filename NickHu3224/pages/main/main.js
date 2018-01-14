// pages/main/main.js
Page({
    data: {
        imgUrls: [
            'http://image.xishiqu.cn/upload/apic/920/180/920180104//7EA29134-E3FA-4534-A0DA-F29C0E5F459F.jpg',
            'http://image6.xishiqu.cn/upload/apic/920/171/920171207//73EE0ED8-1CE2-CC5E-61A3-9FA386F3B815.jpg',
            'http://image6.xishiqu.cn/upload/apic/920/171/920171123//850EA92B-402A-98C9-DCA1-005F8C842724.jpg',
            'http://image4.xishiqu.cn/upload/apic/920/180/920180112//56A1E3BD-439C-3273-90CE-D896A14CC677.jpg',
            'http://image4.xishiqu.cn/upload/apic/920/180/920180112//29809BA4-A023-8E59-953A-A5C729A2781D.jpg',
            'http://image4.xishiqu.cn/upload/apic/920/171/920171201//09B382E5-8D9B-00F2-6006-1D08C46E6DA8.jpg',
            'http://image5.xishiqu.cn/upload/apic/920/180/920180104//EF67E5C8-FC0D-DC7D-B046-0CA475543497.jpg',
            'http://image.xishiqu.cn/upload/apic/920/171/920171228//FA47E4CD-B341-044E-A1C0-26A58DDDA4DD.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        activity_imgUrl:"http://image4.xishiqu.cn/upload/activity/117/072/20170720039/v/b/BE6DF8A5-2251-8B87-1D77-7E108CC7C7A2.jpg",
        activity_title:"2017年最强画展，你不可错过的艺术之旅，全球艺术家的盛典《毕加索 达利真迹展—深圳站》",
        activity_inform:{'time':'2017.10.20/10.30 (2场)', 'area':'深圳市少年宫剧场'},
        activity_price:"60",
        right_icon:"images/ic_arrow_right.png"
    },
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        return {
            title: '亲子·剧',
            path: 'pages/main/main',
            success: function (res) {
                // 转发成功
            },
            fail: function (res) {
                // 转发失败
            }
        }
    },
    onLoad: function (option) {
        wx.navigateTo({url: 'detail'})
    }
})