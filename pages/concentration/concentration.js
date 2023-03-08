// pages/concentration/concentration.js
import {catalogue} from '../../model/demo'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        contentList:[],
        morecontentList:[],
        remorecontentList:[],
        isshow:false,
        shows:false,
        show:false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getList()
    },

    getList(){
        let arr = catalogue()
        console.log(arr,"+999");
       let contentList = arr
       let morecontentList =arr[0].cityList.slice(0,2)
       let remorecontentList =arr[1].cityList.slice(0,2)
       if(remorecontentList.length==arr[1].cityList.length){
           this.setData({
                isshow:true,
           })
       }
       this.setData({
        contentList:contentList,
        morecontentList:morecontentList,
        remorecontentList:remorecontentList,
       })
    },
    more(){
        let show = !this.data.show
        this.setData({
            show:show
        })
    },
    remore(){
        if(this.data.isshow){
            wx.showToast({
                title: '暂无更多数据',
                icon:'none',
                duration:1000,
              })
        }else{
            let shows = !this.data.shows
            this.setData({
                shows:shows
            })
        }
       
    },
    remores(){
        wx.showToast({
            title: '暂无更多数据',
            icon:'none',
            duration:1000,
          })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },
    destination(){
        wx.navigateTo({
            url:'../search/search',
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})