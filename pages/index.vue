<template>
  <div id="map-wrap">
    <!-- Hello :<span>{{ $store.state.username }}</span> -->
    <client-only>
      <l-map
        ref="map"
        style="width: 100%; height: 100%"
        :zoom="zoom"
        :center="center"
        :minZoom="minZoom"
        :maxZoom="maxZoom"
      >
        <l-tile-layer :url="url"></l-tile-layer>

        <template v-for="p of footprintList">
          <l-marker
            :lat-lng="[p.latitude, p.longitude]"
            :icon="icon"
            :key="p._id"
          >
            <l-popup>
              <h3 v-text="p.place"></h3>
              <p v-text="p.travelDate"></p>
              <p v-text="p.description"></p>
              <div class="photos" v-viewer>
                <img
                  v-for="url of p.photos"
                  :src="url"
                  :key="url"
                  width="120px"
                />
              </div>
            </l-popup>
          </l-marker>
        </template>
      </l-map>
    </client-only>
  </div>
</template>

<script>
import { post } from "@/shared/request";
export default {
  middleware: "page", //跳转到该页面时，执行page中间件
  head() {
    // 基于vue-meta，在页面级组件配置title等meta标签
    return {
      title: "Nuxt App",
    };
  },
  data() {
    return {
      url:
        "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
      zoom: 4,
      minZoom: 3,
      maxZoom: 16,
      center: [35.63452, 109.132287],
      listLoading: false,
      footprintList: [],
      icon: null,
    };
  },
  /**
   * asyncData:
   * **在服务端执行  通过服务端获取数据**
   * 在客户端执行 会把结果合并到data上
   * 只能在页面组件才能用；不能在layout、component中写
   * fetch方法，不会返回结果，操作vuex
   */
  async asyncData(context) {
    // let res = await context.$axios.get("xxx");
    return {
      // name: res.name
      label: "Async Data",
    };
  },
  mounted() {
    /**
     * 写在data()当中，会提示L没有定义；
     * 因为在服务端渲染时，vue-leaflet并没有引入
     * 所以要将L.icon写到mounted当中
     */
    this.icon = L.icon({
      iconUrl: "./images/foot.png",
      iconSize: [28, 28],
      iconAnchor: [10, 10],
    });
    //进度条要等加载完成后才能执行
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish();
      }, 1000);
    });
    // code
    this.getFootprints();
    // 这里的代码
    const query = this.$route.query;
    // mounted 触发时，map还没渲染，所以延迟执行
    setTimeout(() => {
      if (query.longitude && query.latitude) {
        // 定位到此marker
        const point = [query.latitude, query.longitude];
        this.$refs.map.mapObject.setView(point, 8);
        this.$refs.map.mapObject.panTo([query.latitude, query.longitude]);
      }
    }, 200);
  },
  methods: {
    getFootprints() {
      this.listLoading = true;
      // 查询所有足迹点
      this.footprintList = [
        {
          latitude: 39.92,
          longitude: 116.46,
          place: "北京",
          travelDate: "2020/01/10",
          description: "北京旅游",
        },
      ];
      post("/footprint/pageList", { page: 1, size: 9999 }).then((response) => {
        response.data.forEach((item) => {
          item.travelDate =
            item.travelDate && item.travelDate.length === 2
              ? item.travelDate.join(" ~ ")
              : item.travelDate.join("");
        });
        this.footprintList = response.data;
        this.listLoading = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#map-wrap {
  height: calc(100vh - 60px);
}
.container {
  margin: 0 auto;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

