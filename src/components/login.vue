<template>
  <div class="main">
    <Card title="欢迎登录" class="login">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="请输入用户名">
            <Icon type="ios-person" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="请输入密码">
            <Icon type="md-lock" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请填写用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码长度不能少于6位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods:{
    handleSubmit(){
      this.$router.push('/layout')
    }
  }
};
</script> 

<style scoped lang="less">
@deep: ~'>>>';
.main {
  width: 100%;
  height: 100vh;
  background: url(../assets/images/login.jpg);
  background-size: cover;
  background-position: 50%;
  .login{
    width: 300px;
    position: absolute;
    right: 10%;
    top: 30%;
    @{deep}.ivu-card-head p span{
      font-size: 14px!important;
      font-weight: 600!important;
    }
    .ivu-form-item{
      width: 100%;
      .ivu-form-item-content{
        width: 100%;
        .ivu-btn-primary{
          width: 100%;
        }
      }
    }
  }
}
</style>
