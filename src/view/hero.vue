<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <!-- <a class="btn btn-success" href="add.html">添加</a> -->
    <router-link :to="{name:'heroadd'}" class="btn btn-success">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.id" v-for="(item, index) in list">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <!-- <a href="edit.html">编辑</a> -->
              <router-link :to="{name:'heroxx', params:{id:item.id}}">编辑</router-link>
              &nbsp;&nbsp;
              <a href="javascript:" @click.prevent="del(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios.get("heroes").then(res => {
        if (res.status == 200) {
          this.list = res.data;
        } else {
          alert("错误");
        }
      });
    },
    del(id) {
      if (!confirm("确认删除？")) {
        return false;
      }
      this.axios
      .delete(`heroes/${id}`)
      .then((res) => {
        if (res.status == 200) {
          this.getData();
        }
      });
    }
  }
};
</script>

<style scoped lang='less'>
</style>