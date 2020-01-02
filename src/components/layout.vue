
<template>
  <Layout>
    <!-- 导航 -->
    <Header>
      <div class="logo">于洋的图书馆</div>
      <div class="quit">
        <Button type="primary">退出</Button>
      </div>
    </Header>
    <!-- 主题部分 -->
    <Layout>
      <!-- 左侧菜单栏 -->
      <Sider hide-trigger>
        <Menu active-name="1-2" :open-names="['1']" theme="dark" @on-select="select">
          <Submenu :name="item.name" v-for="item in menu" :key="item.id">
            <template slot="title">
              <Icon :type="item.icon"/>{{item.title}}
            </template>
            <MenuItem :name="items.name" v-for="(items,index) in item.submenu" :key="index">{{items.title}}</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <!-- 主要部分 -->
      <Content>
        <router-view></router-view>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
export default {
  data() {
    return {
      open: 1,
      menu: [
        {
          name:1,
          icon:'ios-paper',
          title:'内容管理',
          submenu:[
            {
              name:'1-1',
              title:'文章管理'
            },
            {
              name:'1-2',
              title:'文章管理'
            },
            {
              name:'1-3',
              title:'文章管理'
            }
          ]
        },
        {
          name:2,
          icon:'ios-paper',
          title:'内容管理',
          submenu:[
            {
              name:'2-1',
              title:'文章管理'
            },
            {
              name:'2-2',
              title:'文章管理'
            },
            {
              name:'2-3',
              title:'文章管理'
            }
          ]
        },
        {
          name:3,
          icon:'ios-paper',
          title:'内容管理',
          submenu:[
            {
              name:'3-1',
              title:'文章管理'
            },
            {
              name:'3-2',
              title:'文章管理'
            },
            {
              name:'3-3',
              title:'文章管理'
            }
          ]
        }
      ]
    };
  },
  methods: {
    select(val){
      console.log(val)
    }
  }
};
</script>
<style scoped lang="less">
//导航样式
.ivu-layout-header {
  height: 7vh !important;
  display: flex;
  justify-content: space-between;
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
}
//左侧菜单栏
.ivu-layout-sider {
  height: 93vh;
  width: auto !important;
  min-width: auto !important;
  max-width: none !important;
}
</style>