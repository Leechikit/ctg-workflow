<template>
    <div class="pannel">
        <div class="pannel-mask" @click="maskClick"></div>
        <div class="pannel-wrapper">
            <div class="pannel-header">
                <div class="pannel-header-mark"></div>
            </div>
            <div class="pannel-content"></div>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {};
  },
  methods:{
      ...mapMutations('pannel',['setPannel']),
      maskClick(){
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
        height: 50px;
        background-color: #F9FAFB;
        box-shadow: 0 1px 0 0 #E3E3E3;
        margin-left: 20px;
        &-mark{
            line-height: 50px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 16px;
            color: #333333;
        }
    }
}
</style>
