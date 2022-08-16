import intefUrl from "./interface"
import $ from './http'
/* *接口数据的统一调用* */
export default {
    /***    获取通用内容    ***/
    // 获取国家/氏族
    getState() {
    },
    // 获取行政区域
    getRegion(params) {
        return $.post(intefUrl.yearUrl, params);
    },
    // 获取文化分区
    getCulture(params) {
        return $.get(intefUrl.nameUrl, params);
    },
    /* 获取省市区三级联动   */
    getProvice() {
    },
    // 获取城市列表
    getCity() {
    },
    // 获取年代
    getEra() {
    },
    // 获取年度
    getYear() {
    },
    /**  列表页面 **/
    // 获取数据列表
    getDataList() {
    },
    /** 列表详情 **/
    getDataDetail() {
    }
}
