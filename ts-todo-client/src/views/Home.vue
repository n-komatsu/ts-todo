<template>
  <div class="home">
    <header class="header">
      <h1 class="header-title">TODOS</h1>
    </header>
    <div class="wrapper">
      <div class="text-field">
        <i class="text-field-icon plus"></i>
        <input type="text" class="text-field-input" placeholder="What do needs to be done?">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    background-color: #303F9F;
    padding-top: 40px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

    &-title {
      color: #fff;
      background-color: #3F51B5;
      font-size: 36px;
      font-weight: bold;
      text-align: center;
      padding: 18px 0;
    }
  }

  .wrapper {
    width: 746px;
    margin: 60px auto 0;
  }

  .text-field {
    position: relative;
    padding: 16px 16px 16px 56px;
    background-color: #fff;
    box-shadow: 0 4px 3px rgba(0, 0, 0, 0.2);
    &-input {
      width: 100%;
      font-size: 18px;
      color: #757575;
      border: none;
      &::placeholder {
        color: #212121;
        opacity: .5;
        font-weight: bold;
      }
      &:focus {
        outline: none;
      }
    }

    &-icon {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 15px;
      left: 16px;
      &:hover {
        cursor: pointer; 
      }
      &.plus:before {
        content: '';
        position: absolute;
        display: block;
        width: 20px;
        height: 2px;
        transform: rotate(90deg);
        background-color: #3F51B5;
        top: calc(50% - 1px);
        left: 0;
      }
      &.plus:after {
        content: '';
        position: absolute;
        display: block;
        width: 20px;
        height: 2px;
        background-color: #3F51B5;
        top: calc(50% - 2px);
        left: 0;
      }
    }
  }
</style>
