<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input type="text" class="form-control" v-model="formData.name" />
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <select class="form-control" v-model="formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <button class="btn btn-success" @click.prevent="updata">提交</button>
    </form>
  </div>
</template>
<script>
export default {
    props: ['id'],
    data() {
        return {
            formData: {
                name:'',
                gender:''
            }
        }
    },
    mounted() {
        this.xiugai()
    },
    methods: {
        xiugai() {
            this.axios.get(`heroes/${this.id}`)
            .then((res)=>{
                if(res.status ==200) {
                    this.formData = res.data
                }
            })
        },
        updata() {
            this.axios.put(`heroes/${this.id}`, this.formData)
            .then((res)=>{
                if(res.status == 200) {
                    this.$router.push({name:'hero'})
                }
            })
        }
    }
};
</script>
<style scoped lang='less'>
</style>