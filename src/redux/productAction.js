import { GET_ALL_SETTINGS,GET_PREFERENCES,GET_FUND_MATCHED_COUNTRY,GET_MARKET_UNIVERSE,GET_PREFERENCES_DATA, GET_PROFILE, GET_ACTIVE_PASSIVE, GET_SEND_ALERTS_EMAIL, GET_ALERT_SETTINGS, GET_ALERTS_NOTIFICATIONS, GET_FUND_ALERTS, GET_TOP_FUND_GROWTH, GET_SEARCH_GROWTH_FUNDS, GET_FUND_SUMMERY_DETAILS, GET_SUMMERY_FUNDS_BATCH, GET_NEWS_FOR_FUND, GET_MARKET_INSIGHTS, GET_SEARCH, GET_MYFUNDS, GET_SESSION, GET_USER_SESSION, GET_PAGE_SESSIONS } from "./constant"

export const getAllSettings = (data) => {
   
    return {
        type: GET_ALL_SETTINGS,
        data
    }
}

export const getPreferences = (data) => {
    
    return {
        type: GET_PREFERENCES,
        data
    }
}

export const getFundMatchedCountry = (data) => {
   
    return {
        type: GET_FUND_MATCHED_COUNTRY,
        data
    }
}
export const getMarketUniverse = (data) => {
    
    return {
        type: GET_MARKET_UNIVERSE,
        data
    }
}
export const getPreferencesData = (data) => {
   
    return {
        type: GET_PREFERENCES_DATA,
        data
    }
}
export const getProfile = (data) => {
   
    return {
        type: GET_PROFILE,
        data
    }
}
export const getActivePassive = (data) => {
   
    return {
        type: GET_ACTIVE_PASSIVE,
        data
    }
}
export const getSendAlertsEmail = (data) => {
   
    return {
        type: GET_SEND_ALERTS_EMAIL,
        data
    }
}
export const getAlertSettings = (data) => {
   
    return {
        type: GET_ALERT_SETTINGS,
        data
    }
}
export const getAlertsNotifications = (data) => {
   
    return {
        type: GET_ALERTS_NOTIFICATIONS,
        data
    }
}
export const getFundAlerts = (data) => {
   
    return {
        type: GET_FUND_ALERTS,
        data
    }
}
export const getTopFundGrowth = (data) => {
   
    return {
        type: GET_TOP_FUND_GROWTH,
        data
    }
}
export const getSearchGrowthFunds = (data) => {
   
    return {
        type: GET_SEARCH_GROWTH_FUNDS,
        data
    }
}
export const getFundSummeryDetails = (data) => {
   
    return {
        type: GET_FUND_SUMMERY_DETAILS,
        data
    }
}
export const getSummeryFundsBatch = (data) => {
   
    return {
        type: GET_SUMMERY_FUNDS_BATCH,
        data
    }
}
export const getNewsForFund = (data) => {
   
    return {
        type: GET_NEWS_FOR_FUND,
        data
    }
}
export const getMarketInsights = (data) => {
   
    return {
        type: GET_MARKET_INSIGHTS,
        data
    }
}
export const getSearch = (data) => {
   
    return {
        type: GET_SEARCH,
        data
    }
}
export const getMyFunds = (data) => {
   
    return {
        type: GET_MYFUNDS,
        data
    }
}
export const getSession = (data) => {
   
    return {
        type: GET_SESSION,
        data
    }
}
export const getUsersession = (data) => {
   
    return {
        type: GET_USER_SESSION,
        data
    }
}
export const getPageSessions = (data) => {
   
    return {
        type: GET_PAGE_SESSIONS,
        data
    }
}