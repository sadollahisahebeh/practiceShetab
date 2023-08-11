import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      sliders: null,
      menus:null,
      homeListProducts:null,
      listOfProductsByKey:{}
    };
  },
  getters: {
    getListOfProductsByKey:(state)=>state.listOfProductsByKey,
    getProductsListHome:(state)=>state.homeListProducts,
    getMenus:(state)=>state.menus,
    getSliders:(state)=> state.sliders,
    
  },
  mutations: {
    setListObject(state,dataObj){
      state.listOfProductsByKey[dataObj.key]=dataObj.list
    },
    setHomeListProducts(state,list){
      state.homeListProducts=list;
    },
    setMenus(state,list){
      state.menus=list;
    },
    setSliders(state, newList) {
      state.sliders = newList;
    },
  },
  actions: {
    async getProductListFromServer({commit},key){
      if(!key) return;
      // key==new-products
      // key==most_sales
      await axios.get(`front/${key}`).then((res) => {
        for (const mainKey in res.data.data.response) {
          
          commit(
            "setHomeListProducts", res.data.data.response[mainKey]);
          commit(
            "setListObject",{key:key ,list:res.data.data.response[mainKey]});
        }
      });
    },
    async getMenusFromServer({ commit }) {
      await axios.get("all/menus/header").then((res) => {
        commit("setMenus", res.data.data.menus);
      });
    },
    async getSlidersFromServer(context) {
      await axios
        .get("front/sliders")
        .then((res) => {
          // res.data
          context.commit("setSliders", res.data.data.response.sliders);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getProductFromServer({}, id) {
      await axios
        .get(`front/product/${id}`)
        .then((res) => {
          // res.data
          context.commit("setSliders", res.data.data.response.sliders);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
export default store;
