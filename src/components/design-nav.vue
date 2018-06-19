<template>
    <div class="design-nav">
        <ButtonGroup>
                <Button @click="link('0')">表单设计</Button>
                <Button @click="link('1')">流程设计</Button>
                <Button @click="link('2')">列表设计</Button>
        </ButtonGroup>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
      link(nodeType){
          console.log(nodeType)
      }
  }
};
</script>

<style scoped lang="scss">
.design-nav {
    position: absolute;
    left: 0;
    top: 60px;
    z-index: 1;
  width: 100%;
  height: 37px;
  line-height: 56px;
  background-color: #f2f2f6;
  box-shadow: 0 2px 5px 0 rgba(99, 99, 99, 0.15);
  padding: 2px 0;
  font-size: 14px;
  color: #fff;
  letter-spacing: 0;

  ul {
    display: inline;
    list-style: none;
    width: auto;
    margin: 0px;
    padding: 0px;

    li {
      display: inline-block;
      margin: 0px;
      font-size: 14px;

      a {
        display: block;
        width: 100px;
        height: 53px;
        line-height: 53px;
        text-decoration: none;
        font-size: 14px;
        color: #b9b9bf;
        text-align: center;
      }

      &.active a {
        color: #ffffff;
      }
    }

    li.active {
      border-bottom: 2px solid #efeff4;
    }
  }

  div {
    position: absolute;
  }

  .sheet-title {
    left: 15px;
    font-size: 16px;
  }

  .designer-tabs {
    width: 100%;
    height: 40px;
    line-height: 36px;
    margin: 0px;
    padding: 0px;
    text-align: center;
  }

  .right-tabs {
    right: 0;
    height: 56px;
    line-height: 56px;
    margin: 0px;
    padding: 0px;
    text-align: center;

    li {
      float: left;
      margin-top: 17px;
      margin-right: 20px;

      a {
        width: 48px;
        height: 22px;
        line-height: 21px;
        font-size: 12px;
      }

      &.help {
        margin-right: 7px;

        a {
          width: 60px;
          font-size: 14px;
          text-align: left;

          i {
            font-size: 18px;
          }

          span {
            magin-left: 6px;
          }
        }
      }

      &.user {
        width: 22px;
        padding-right: 20px;

        .mask {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          z-index: 1000;
        }
      }
    }

    li.back a {
      border: 0.8px solid #b9b9bf;
      border-radius: 2.4px;
      box-sizing: border-box;
    }

    li + li {
      padding-left: 20px;
      border-left: 1px solid #979797;
    }
  }

  .optionengines {
    position: fixed;
    top: 58px;
    right: 2px;
    width: 180px;
    max-height: 400px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 0;
    border-radius: 3px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.22);
    overflow-y: auto;
    background-color: #fff;
    z-index: 9999;

    &:before {
      content: "";
      position: fixed;
      display: inline-block;
      top: 45px;
      right: 20px;
      width: 0;
      height: 0;
      border: 7px solid #561616;
      border-color: transparent transparent #fff;
    }

    ul {
      margin-left: -40px;

      li {
        width: 180px;
        height: 30px;
        line-height: 30px;
        margin: 0;
        padding: 0;
        border: 0;
        text-align: center;
        font-size: 14px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        list-style: none;

        &:hover {
          color: #2d7fff;
          background-color: #e5f5fe;
          cursor: pointer;
        }

        &.divider:hover {
          background-color: #ffffff;
        }

        &.isCurEngine {
          color: #2d7fff;
          margin-right: 0;
          border-bottom: 1px solid #e1e1e1;
        }
      }
    }
  }

  .fa {
    position: relative;
    top: 1px;
    margin: 0 4px;
  }
}
</style>