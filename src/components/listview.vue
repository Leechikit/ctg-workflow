<template>
    <div id="listview">
        <div class="g-left">
            <ul class="sidebar">
                <li class="sidebar-item">
                    <a href="javascript:">
                        <Icon type="ios-paper"></Icon>
                        <span class="text">11111</span>
                    </a>
                </li>
                <li class="sidebar-item active">
                    <a href="javascript:">
                        <Icon type="ios-paper"></Icon>
                        <span class="text">11111</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="javascript:">
                        <Icon type="ios-paper"></Icon>
                        <span class="text">11111</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="g-right">
              <div class="listview-table">
                  <Table border :columns="tableColumns" :data="tableDatas" :stripe="true" no-data-text="--"></Table>
              </div>
        </div>
        <pannel v-show="getPannel.isshow"></pannel>
    </div>
</template>
<script>
import pannel from './pannel'
import {mapGetters,mapMutations} from 'vuex'
export default {
    components:{
        pannel
    },
  props: ["listData", "tableData"],
  data() {
    return {
        isPannel: false,
      listDataMap: this.listData // 数据映射
    };
  },
  computed: {
      ...mapGetters('pannel',['getPannel']),
    // 表格表头
    tableColumns() {
        const that = this;
      let tableArrs = [];
      this.listDataMap.forEach(item => {
        let obj = [];
        if (item.isChildSchema) {
          let isEmpty = true;
          for (let i = 0, len = item.children.length; i < len; i++) {
            if (item.children[i].isVisible) {
              isEmpty = false;
              break;
            }
          }
          if (!isEmpty) {
            obj = {
              title: item.name,
              key: item.id,
              align: "center",
              sortable: item.canSort,
              children: []
            };
            item.children.forEach(child => {
              if (child.isVisible) {
                obj.children.push({
                  title: child.name,
                  key: child.id,
                  align: "center",
                  sortable: item.canSort
                });
              }
            });
            tableArrs.push(obj);
          }
        } else if (item.isVisible) {
          obj = {
            title: item.name,
            key: item.id,
            align: "center",
            sortable: item.canSort
          };
          // 数据标题点击
          if (item.id == "Name") {
            obj.render = (h, params) => {
              return h("a", {
                  on:{
                      click(){
                          that.showPanel(params.row);
                      }
                  }
              },params.row.Name);
            };
          }
          tableArrs.push(obj);
        }
      });
      return tableArrs;
    },
    // 表格数据
    tableDatas() {
      let tableArrs = [];
      this.tableData.forEach(item => {
        let obj = {};
        for (let key in item) {
          const arrs = key.split(".");
          if (arrs.length > 1) {
            obj[arrs[1]] = item[key];
          } else {
            obj[arrs[0]] = item[key];
          }
        }
        tableArrs.push(obj);
      });
      return tableArrs;
    }
  },
  methods:{
      ...mapMutations('pannel',['setPannel']),
      showPanel(obj){
          this.setPannel({
              isshow:true,
              name: obj.Name
          });
      }
  }
};
</script>
<style lang="scss">
#listview {
  height: 100%;
  padding-top: 70px;
  padding-right: 10px;
  background-color: #fff;
  .g-left {
    float: left;
    width: 240px;
    height: 100%;
  }
  .g-right {
    padding-left: 250px;
    height: 100%;
  }
  .sidebar {
    &-item {
      a {
        display: block;
        transition: all 0.2s ease-out 0s;
        padding: 12px 15px;
        padding-left: 26px;
        margin: 0 1px 0 0;
        position: relative;
        border-left: 1px solid #fff;
        &:hover {
          background-color: #d4edfe !important;
        }
        .ivu-icon {
          font-size: 24px;
          margin-right: 10px;
          color: #37abfd;
        }
        .text {
          font-size: 14px;
          vertical-align: text-bottom;
          color: #495060;
        }
      }
    }
    .active {
      a {
        border-top: 0;
        margin-right: 0;
        background-color: #f9fafb;
        color: #37abfd;
      }
    }
  }
  //   .listview-table {
  //     .ivu-table {
  //       overflow-x: auto;
  //       table {
  //         table-layout: auto;
  //       }
  //     }
  //     .ivu-table-header {
  //       overflow: visible;
  //     }
  //     .ivu-table-body {
  //       overflow: visible;
  //     }
  //     .ivu-table-cell {
  //       span {
  //         overflow: hidden;
  //         text-overflow: ellipsis;
  //         white-space: nowrap;
  //       }
  //     }
  //   }
}
</style>
