<template>
  <div>
    <h1>欢迎来到我的世界</h1>
    <div>
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586260066112&di=22fc3d8bbf4f463ad943027d9adc054b&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-10-30%2F59f68513a33ca.jpg"
      />
      <el-row>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
      </el-row>
      <el-carousel :interval="1000" arrow="always">
        <el-carousel-item v-for="item in items" :key="item.id">
          <img :src="item.picture" class="image" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { Button, Carousel } from "element-ui";
Vue.use(Button);
Vue.use(Carousel);
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          picture:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586287566771&di=d5e15514e98dc45f8337f545c4b8bf2f&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F1%2F30%2F7a09511517.jpg"
        },
        {
          id: 1,
          picture:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586287566870&di=fb632e76073e74657a415e55dbc1f740&imgtype=0&src=http%3A%2F%2Fwww.mangowed.com%2Fuploads%2Fallimg%2F130510%2F1-130510213Q2209.jpg"
        },
        {
          id: 2,
          picture:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586288640812&di=9ff35ccbc43ab42e5949bdaf9cf51302&imgtype=0&src=http%3A%2F%2Fimg.hairbobo.com%2Fuploadimg%2F16%2F08%2F19%2F160819200849417.jpg"
        },
        {
          id: 3,
          picture:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586288685693&di=c8a08b0cd68a20722a0304c1b987599d&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D197278149%2C1843408409%26fm%3D214%26gp%3D0.jpg"
        }
      ]
    };
  },
  name: "HelloWorld"
};
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
}
img {
  width: 100%;
}
li {
  list-style: none;
}
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>
