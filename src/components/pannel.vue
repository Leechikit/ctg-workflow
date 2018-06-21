<template>
    <div class="pannel">
        <div class="pannel-mask" @click="closeMask"></div>
        <div class="pannel-wrapper">
            <div class="pannel-header">
                <div class="pannel-header-mark" v-text="getPannel.name"></div>
                <div class="pannel-header-submark">
                    <Icon type="close" size="20" color="#8AAED1" @click="closeMask"></Icon>
                </div>
            </div>
            <div class="pannel-content"></div>
        </div>
    </div>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  data() {
    return {};
  },
  computed:{
      ...mapGetters('pannel',['getPannel'])
  },
  methods:{
      ...mapMutations('pannel',['setPannel']),
      closeMask(){
          this.setPannel(false);
      }
  }
};
</script>
<style lang="scss" scoped>
.pannel{
    width: 100%;
    height: 100%;
    position: fixed;
    left:0;
    top: 0;
    z-index: 10;
    &-mask{
        width: 100%;
        height: 100%;
        position: absolute;
        left:0;
        top: 0;
        background-color: rgba(55,55,55,.6);
    }
    &-wrapper{
        width: 80%;
        height: 80%;
        position: absolute;
        left:0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 27px 0px;
        overflow: hidden;
    }
    &-header{
        display: flex;
        align-items: center;
        height: 50px;
        background-color: #F9FAFB;
        box-shadow: 0 1px 0 0 #E3E3E3;
        padding: 0 20px;
        &-mark{
            flex-grow: 1;
            line-height: 50px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 16px;
            color: #333333;
        }
        &-submark{
            .ivu-icon{
                cursor: pointer;
            }
        }
    }
}
</style>
