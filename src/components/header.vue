<template>
    <div class="header">
        <div class="g-left">
            <div class="header-breadcrumb">
                <span class="header-breadcrumb-item">
                    <a href="">首页</a>
                </span>
                <span class="header-breadcrumb-split">/</span>
                <span class="header-breadcrumb-item">工作流管理</span>
            </div>
        </div>
        <div class="g-right">
            <Poptip placement="bottom" width="400">
                <Button @click="getModuleList()" type="text">所有应用</Button>
                <div class="api" slot="content">
                    <center>
                        <div class="demo">
                            <div class="demo">
                                <div>
                                    <Row  justify="start" >
                                        <Col span="7" v-for="item in appData">
                                            <div class="icons-item" @click="toApp(item.id, item.moduleName)">
                                                <svg class="icon" style="width: 4em; height: 4em;" aria-hidden="true" v-html="item.icon">
                                                {{item.icon}}
                                                </svg>
                                                <span style="word-break:normal; width:auto; display:block; white-space:pre-wrap;word-wrap : break-word ;overflow: hidden ;">{{item.moduleName}}</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </center>
                </div>
            </Poptip>
            <div class="operate-item">
                <Dropdown>
                    <a>
                        <Icon type="cube" :size="23" style="color:black!important"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem><Button type="text" @click="gotoPage()">应用管理</Button></DropdownItem>
                        <DropdownItem><Button type="text" @click="gotoPage('people-manage')">组织机构</Button></DropdownItem>
                        <DropdownItem><Button type="text" @click="gotoPage('roleIndex')">权限管理</Button></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div class="operate-item" @click="gotoPage()">
                <Tooltip :content="messageCount > 0 ? '有' + messageCount + '条未读消息' : '无未读消息'" placement="bottom">
                    <Badge :count="messageCount" dot>
                        <Icon type="ios-bell" :size="23" style="color:black!important" ></Icon>
                    </Badge>
                </Tooltip>
            </div>
            <div class="operate-item" @click="gotoPage()">
                <Tooltip content="已办" placement="bottom">
                    <Icon type="briefcase" :size="23" style="color:black!important"></Icon>
                </Tooltip>
            </div>
            <div class="operate-item" @click="gotoPage()">
                <Tooltip content="我的提交" placement="bottom">
                    <Icon type="person" :size="23" style="color:black!important"></Icon>
                </Tooltip>
            </div>
            <div class="user">
                <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                    <Dropdown transfer trigger="click" >
                        <a href="javascript:void(0)">
                            <span class="main-user-name">{{ userName }}</span>
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem name="ownSpace">个人中心</DropdownItem>
                            <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Avatar :src="avatorPath" style="background: #619fe7;margin-left: 10px;"></Avatar>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
import HTTP from "../api/app-apply.js";
export default {
  data() {
    return {
      appData: [],
      userName: "请登陆",
      avatorPath: "",
      messageCount: 0
    };
  },
  methods: {
    toApp(itemId) {
      // itemId='0f60c6ecf77a431490ac69fd0d24adf4';
      //   this.$router.push({
      //     name: "start-application",
      //     params: { moduleId: itemId}
      //   });
    },
    getModuleList() {
      this.getLoading = true;
      HTTP.getAllModule()
        .then(res => {
          this.appData = res.page.result;
          for (var index in this.appData) {
            this.appData[index].icon =
              "<use xlink:href=" + this.appData[index].icon + "></use>";
          }
        })
        .catch(err => {
          this.$Message.error("This is an error");
        })
        .finally(() => {
          this.getLoading = false;
        });
    },
    gotoPage() {}
  }
};
</script>

<style scoped lang="scss">
.header {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 10px;
  background: #fff;
  box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);
  &-breadcrumb {
    &-item {
      a {
        color: #495060;
        transition: color 0.2s ease-in-out;
        &:hover {
          color: #57a3f3;
        }
      }
    }
    &-split {
      margin: 0 8px;
      color: #dddee1;
    }
  }
  .g-right {
    display: flex;
    align-items: center;
  }
  .operate-item {
    width: 30px;
    padding: 18px 0;
    margin: 0 2px;
    text-align: center;
    cursor: pointer;
  }
  .user {
    margin-left: 26px;
  }
}
</style>
