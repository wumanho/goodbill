<template>
  <BaseLayout>
    <div class="tags">
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <div class="new">
        <button>新增标签</button>
      </div>
    </div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="请在这里添加备注"/>
      </label>
    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>OK</button>
        <button>0</button>
        <button>.</button>
      </div>
    </div>
  </BaseLayout>
</template>

<script lang="ts">
export default {
  name: 'Bill'
};
</script>

<style lang="scss" scoped>
.types{
  display: flex;
  background: #c4c4c4;
  font-size: 24px;
  > li{
    width: 50%;
    text-align: center;
    line-height: 64px;
    height: 64px;
    position: relative;
    &.selected::after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
.notes{
  display: flex;
  background: #f5f5f5;
  align-items: center;
  font-size: 14px;
  > .name{
    padding:0 16px;
  }
  > input{
    background: transparent;
    border: none;
    padding:16px 0;
    flex-grow: 1;
  }
}
.tags {
  padding: 16px;
  font-size: 14px;

  > .current {
    display: flex;

    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #d9d9d9;
      padding: 0 15px;
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      margin-right: 12px;
    }
  }

  > .new {
    padding-top: 16px;

    > button {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      color: #999;
      padding:0 4px;
    }
  }
}
</style>