import axios from "axios";
const FRIENDURL = "http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=B1B7A2E56045EA3CBCF32A09D00A1F7D&steamid=";
const RECENTURL = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=B1B7A2E56045EA3CBCF32A09D00A1F7D&steamid=";
const ALLURL = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=B1B7A2E56045EA3CBCF32A09D00A1F7D&steamid="
const PROFILEURL = " http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=B1B7A2E56045EA3CBCF32A09D00A1F7D&steamids="
const FRIENDKEY = "&relationship=friend";
const RECENTKEY = "&format=json"

export default {
  profile: function(query) {
    return axios.get(PROFILEURL + query);
  },

  friends: function(query) {
    return axios.get(FRIENDURL + query + FRIENDKEY);
  },

  recent: function(query) {
    return axios.get(RECENTURL + query + RECENTKEY);
  },

  all: function(query) {
    return axios.get(ALLURL + query + RECENTKEY);
  }
};
