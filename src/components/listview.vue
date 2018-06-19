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
                  <Table border :columns="tableColumns" width="100%"></Table>
              </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["listData"],
    data(){
        return {
            listDataMap: this.listData, // 数据映射
        }
    },
    computed:{
        // 表格表头
    tableColumns(){
        let tableArrs = [];
        this.listDataMap.forEach(item=>{
            let obj = [];
            if(item.isChildSchema){
            let isEmpty = true;
            for(let i = 0,len = item.children.length;i<len;i++){
                if(item.children[i].isVisible){
                isEmpty = false;
                break;              
                }
            }
            if(!isEmpty){
                obj = {
                    title: item.name,
                    key: item.id,
                    align: 'center',
                    children: []
                }
                item.children.forEach(child=>{
                if(child.isVisible){
                    obj.children.push({
                        title: child.name,
                        key: child.id,
                        align: 'center'
                    });
                }
                });
                tableArrs.push(obj);
            }
            }else if(item.isVisible){
            obj = {
                title: item.name,
                key: item.id,
                align: 'center'
            }
            tableArrs.push(obj);
            }
        });
        return tableArrs;
        }
    }
}
</script>
<style lang="scss" scoped>
#listview{
    height: 100%;
    padding-top: 60px;
    background-color: #fff;
}
.g-left{
    float: left;
    width: 240px;
    height: 100%;
}
.g-right{
    padding-left: 250px;
    height: 100%;
}
.sidebar{
    &-item{
        a{
            display: block;
            transition: all .2s ease-out 0s;
            padding: 12px 15px;
            padding-left: 26px;
            margin: 0 1px 0 0;
            position: relative;
            border-left: 1px solid #fff;
            &:hover{
                background-color: #d4edfe !important;
            }
            .ivu-icon{
                font-size: 24px;
                margin-right: 10px;
                color: #37abfd;
            }
            .text{
                font-size: 14px;
                vertical-align: text-bottom;
                color: #495060;
            }
        }
    }
    .active{
        a{
            border-top: 0;
            margin-right: 0;
            background-color: #f9fafb;
            color: #37abfd;
        }
    }
}
.listview-table{
    .ivu-table{
      overflow-x: auto;
      table{
        table-layout: auto;
      }
    }
    .ivu-table-header{
      overflow: visible;      
    }
    .ivu-table-body{
      overflow: visible;
    }
    .ivu-table-cell{
      span{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>
