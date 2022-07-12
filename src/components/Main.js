import { useDispatch,useSelector } from "react-redux";
import { getActivePassive, getAlertSettings, getAlertsNotifications, getAllSettings,getFundAlerts,getFundMatchedCountry,getFundSummeryDetails,getMarketInsights,getMarketUniverse,getMyFunds,getNewsForFund,getPageSessions,getPreferences,getPreferencesData, getProfile, getSearch, getSearchGrowthFunds, getSendAlertsEmail, getSession, getSummeryFundsBatch, getTopFundGrowth, getUsersession } from "../redux/productAction";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
//   let data = [
//     {
//     id: "0001",
//     type: "donut",
//     name: "Cake",
//     image: {
//       url: "images/0001.jpg",
//       width: 200,
//       height: 200,
//     },
//     thumbnail: {
//       url: "images/thumbnails/0001.jpg",
//       width: 32,
//       height: 32,
//     },
//   },
// ];
  
  return (<>
    <div>
      <h1 className="API-heading">All Get APIs</h1>
      <div className="product-container">
        <button className="btn" onClick={() => {dispatch(getAllSettings('478affd9-87fc-4743-9491-d6696dcdd83b'))}}>
          Get All Settings
        </button>
        <button className="btn" onClick={() => dispatch(getPreferences({
          userId: '478affd9-87fc-4743-9491-d6696dcdd83b',
          settingId: '9b517252-b7d7-4003-aba4-9ee9897f1ca0'
        }))}>
          Get Settings By Id
        </button>
        <button className="btn" onClick={() => dispatch(getFundMatchedCountry({
          shareClass:'65135813,68231046,60004905,68141111,68225645',
          countries: 'Argentina,Australia,Austria'
        }))}>
          Get Fund Matched Country
        </button>
        <button className="btn" onClick={() => dispatch(getMarketUniverse('2022-06-03'))}>
          Get Market Universe
        </button>
        <button className="btn" onClick={() => dispatch(getPreferencesData({
          userId: '478affd9-87fc-4743-9491-d6696dcdd83b',
          date: '2021-06-24'
        }))}>
          Get Preferences Data
        </button>
        <button className="btn" onClick={() => {dispatch(getProfile('478affd9-87fc-4743-9491-d6696dcdd83b'))}}>
          Get User Profile
        </button>
        <button className="btn" onClick={() => {dispatch(getActivePassive({
          category: 'ASIA_Mid',
          date: '2021-06-09',
          year: '2021',
          isNew: 'false'
        }))}}>
          Get Active Passive
        </button>
        <button className="btn" style={{color:"red"}} onClick={() => {dispatch(getSendAlertsEmail(''))}}>
          Get Send Alerts Email X
        </button>
        <button className="btn" onClick={() => {dispatch(getAlertSettings({
          userId: '9b517252-b7d7-4003-aba4-9ee9897f1ca0',
          category: 'ASIA_Mid',
          preferencesId: '9b517252-b7d7-4003-aba4-9ee9897f1ca0'
        }))}}>
          Get Alerts Settings
        </button>
        <button className="btn" onClick={() => {dispatch(getAlertsNotifications({
          userId: "9b517252-b7d7-4003-aba4-9ee9897f1ca0",
          page: "0"
        }))}}>
          Get Alerts Notifications
        </button>
        <button className="btn" onClick={() => {dispatch(getFundAlerts({
          fundId: '68239740',
          page: '0'
        }))}}>
          Get Fund Alerts
        </button>
        <button className="btn" onClick={() => {dispatch(getTopFundGrowth({
          userId: '6a260cd6-6385-4239-8c73-59a8b5502530',
          category: 'AFRICA',
          date: '2021-06-09',
          start_date: '2020-06-03',
          end_date: '2022-06-03',
          time_period:'2Y'
        }))}}>
          Get Top Fund Growth
        </button>
        <button className="btn" onClick={() => {dispatch(getSearchGrowthFunds({
          name: 'b',
          offset: '10',
          page: '0',
        }))}}>
          Get Search Growth Funds
        </button>
        <button className="btn" onClick={() => {dispatch(getFundSummeryDetails({
          fundId: '68239740',
        }))}}>
          Get Fund Summery Details
        </button>
        <button className="btn" onClick={() => {dispatch(getSummeryFundsBatch({
         fundId: '68239740',
        }))}}>
          Get Summery Funds Batch
        </button>
        <button className="btn" onClick={() => {dispatch(getNewsForFund({
         fundId: '68239740',
        }))}}>
          Get News For Fund
        </button>
        <button className="btn" style={{color:"red"}} onClick={() => {dispatch(getMarketInsights({
         category: 'ASIA_Large',
        }))}}>
          Get Market Insights X
        </button>
        <button className="btn"  onClick={() => {dispatch(getSearch({
         name: 'Budapest%20Bonitas%20ba',
        }))}}>
          Get Search
        </button>
        <button className="btn" onClick={() => {dispatch(getMyFunds({
         category: 'ASIA_Large',
         id: '68239740'
        }))}}>
          Get My Funds
        </button>
        <button className="btn" onClick={() => {dispatch(getSession({
         id: 'f60d7b47-67ba-4ff6-b29c-fe083ec8038a',
        }))}}>
          Get Session
        </button>
        <button className="btn" onClick={() => {dispatch(getUsersession({
         userId: '478affd9-87fc-4743-9491-d6696dcdd83b',
        }))}}>
          Get User Session
        </button>
        <button className="btn" onClick={() => {dispatch(getPageSessions({
         sessionId: '4cbcd57c-a740-4aa7-8d64-52fa15596bce',
        }))}}>
          Get Page Session
        </button>
      </div>
    </div>
    <div
        style={{
          width: "80%",
          marginTop: "10%",
          marginLeft: "10%",
          marginBottom:"10%",
          height: "100%",
          border: "1px solid green",
        }}
      >
        <pre style={{ color: "green", textAlign: "left", marginLeft: "10px"}}>
          {JSON.stringify(data, null, 100)}
        </pre>
      </div>
    </>);
}

export default Main;
