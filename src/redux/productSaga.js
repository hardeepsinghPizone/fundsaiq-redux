import { takeEvery, put } from 'redux-saga/effects'
import { GET_ALL_SETTINGS,GET_PREFERENCES,GET_FUND_MATCHED_COUNTRY,GET_MARKET_UNIVERSE,GET_PREFERENCES_DATA, SET_API_DATA, GET_PROFILE, GET_ACTIVE_PASSIVE, GET_SEND_ALERTS_EMAIL, GET_ALERT_SETTINGS, GET_ALERTS_NOTIFICATIONS, GET_FUND_ALERTS, GET_TOP_FUND_GROWTH, GET_SEARCH_GROWTH_FUNDS, GET_FUND_SUMMERY_DETAILS, GET_SUMMERY_FUNDS_BATCH, GET_NEWS_FOR_FUND, GET_MARKET_INSIGHTS, GET_SEARCH, GET_MYFUNDS, GET_SESSION, GET_USER_SESSION, GET_PAGE_SESSIONS } from './constant';

function* getAllSettings(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/getAllSettings/${data.data}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}

function* getPreferences(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/getSettingById/${data.data.userId}/${data.data.settingId}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getFundMatchedCountry(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/findFundMatchedCountry?shareClass=${data.data.shareClass}&countries=${data.data.countries}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getMarketUniverse(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/getMarketUniverse/${data.data}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getPreferencesData(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/getpreferencesdata/478affd9-87fc-4743-9491-d6696dcdd83b?date=2021-06-24`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getProfile(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/getProfile/${data.data}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getActivePassive(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/activePassive/${data.data.category}?date=${data.data.date}&year=${data.data.year}&isNew=${data.data.isNew}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getSendAlertsEmail(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/sendAlertsEmail`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getAlertSettings(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/getAlertSettings/${data.data.userId}?category=${data.data.category}&preferencesId=${data.data.preferencesId}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getAlertsNotifications(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/getAlertsNotifications/${data.data.userId}?page=${data.data.page}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getFundAlerts(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/getFundAlerts/${data.data.fundId}?page=${data.data.page}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getTopFundGrowth(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/getpreferencesdata/478affd9-87fc-4743-9491-d6696dcdd83b?date=2021-06-24`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getSearchGrowthFunds(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/searchGrowthFunds/?name=${data.data.name}&offset=${data.data.offset}&page=${data.data.page}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getFundSummeryDetails(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/fundsummerydetails?fundid=${data.data.fundId}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getSummeryFundsBatch(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/summeryfundsbatch?funds=${data.data.fundId}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getNewsForFund(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/getNewsForFund/${data.data.fundId}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getMarketInsights(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/market-insights/${data.data.category}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getSearch(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/search/?name=${data.data.name}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getMyFunds(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/myFunds/${data.data.category}/${data.data.id}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getSession(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/session/${data.data.id}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getUserSession(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/usersession/${data.data.userId}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}
function* getPageSessions(data) {
    let result = yield fetch(`https://qapi.fundsaiq.com/pageSessions/${data.data.sessionId}`);
    result = yield result.json();
    yield put({type: SET_API_DATA, data:result})
}

function* productSaga() {
    yield takeEvery(GET_ALL_SETTINGS, getAllSettings)
    yield takeEvery(GET_PREFERENCES, getPreferences)
    yield takeEvery(GET_FUND_MATCHED_COUNTRY, getFundMatchedCountry)
    yield takeEvery(GET_MARKET_UNIVERSE, getMarketUniverse)
    yield takeEvery(GET_PREFERENCES_DATA, getPreferencesData)
    yield takeEvery(GET_PROFILE, getProfile)
    yield takeEvery(GET_ACTIVE_PASSIVE, getActivePassive)
    yield takeEvery(GET_SEND_ALERTS_EMAIL, getSendAlertsEmail)
    yield takeEvery(GET_ALERT_SETTINGS, getAlertSettings)
    yield takeEvery(GET_ALERTS_NOTIFICATIONS, getAlertsNotifications)
    yield takeEvery(GET_FUND_ALERTS, getFundAlerts)
    yield takeEvery(GET_TOP_FUND_GROWTH, getTopFundGrowth)
    yield takeEvery(GET_SEARCH_GROWTH_FUNDS, getSearchGrowthFunds)
    yield takeEvery(GET_FUND_SUMMERY_DETAILS, getFundSummeryDetails)
    yield takeEvery(GET_SUMMERY_FUNDS_BATCH, getSummeryFundsBatch)
    yield takeEvery(GET_NEWS_FOR_FUND, getNewsForFund)
    yield takeEvery(GET_MARKET_INSIGHTS, getMarketInsights)
    yield takeEvery(GET_SEARCH, getSearch)
    yield takeEvery(GET_MYFUNDS, getMyFunds)
    yield takeEvery(GET_SESSION, getSession)
    yield takeEvery(GET_USER_SESSION, getUserSession)
    yield takeEvery(GET_PAGE_SESSIONS, getPageSessions)

}

export default productSaga;