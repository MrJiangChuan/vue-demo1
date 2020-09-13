<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--防止闪屏-->
    <h3 v-cloak>{{msg}}</h3>
    <!--填充文本信息-->
    <p v-text="msg1"></p>
    <p v-html="msg2"></p>
    <p v-pre>{{msg3}}</p>
    <!--只编译一次,后续不需要修改提高性能-->
    <h3 v-once>{{msg4}}</h3>
    <!--双向数据绑定-->
    <input type="text" v-model="msg5" />
    <h3>{{msg5}}</h3>
    <!--双向数据绑定,本质v-bind/v-on-->
    <input type="text" v-bind:value="msg6" v-on:input="msg6=$event.target.value" />
    <h3>{{msg6}}</h3>
    <!--事件处理-->
    <input type="button" value="点击" @click="add" />
    <h3>{{num}}</h3>
    <!--事件处理,传递事件参数-->
    <input type="button" value="参数传递1" v-on:click="handle1" />
    <input type="button" value="参数传递2" v-on:click="handle2(12,$event)" />
    <!--事件绑定，事件修饰符-->
    <div v-on:click="handle3">
      <input type="button" value="点击1" v-on:click.stop="handle4" />
    </div>
    <a href="https://www.baidu.com" v-on:click.prevent="handle5">百度</a>
    <!--事件绑定，按键处理-->
    <input type="text" v-on:keyup.enter="handle6" />
    <input type="text" v-on:keyup.delete="handle7" />
    <!--自定义按键-->
    <input type="text" v-on:keyup.f1="handle8" />
    <!--属性绑定-->
    <a v-bind:href="href">点我跳转{{href}}</a>
    <input type="button" value="切换超链接" v-on:click="handle9" />
    <!--样式绑定-->
    <div :class="{div1: isdiv1, div2: isdiv2}"></div>
    <input type="button" value="切换" @click="handle10" />
    <div v-bind:style="objstyle"></div>
    <!--分支结构-->
    <div v-if="score>=90">优秀</div>
    <div v-else-if="score>=80&&score<90">良好</div>
    <div v-else-if="score>=60&&score<80">一般</div>
    <div v-else>差</div>
    <div v-show="flag">天天</div>
    <input type="button" value="切换" @click="handle11" />
    <!--循环结构-->
    <ol>
      <li :key="index" v-for="(item,index) in list">
        {{index}}----{{item}}
      </li>
    </ol>
    <hr>
    <ul>
      <li :key="index" v-for="(item,index) in maps">
        {{index}}----{{item.name}}----{{item.age}}
      </li>
    </ul>
    <!--遍历对象-->
    <div v-if="value=='value1'" v-for="(value, key, index) in obj">
      {{value+'---'+key+'---'+index}}
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      msg: 'Hello Vue',
      msg1: 'v-text',
      msg2: 'v-html',
      msg3: 'v-pre',
      msg4: 'v-once',
      msg5: '',
      msg6: '',
      num: 0,
      href: 'https://www.baidu.com',
      isdiv1: false,
      isdiv2: false,
      objstyle: {
        width: '300px',
        height: '300px',
        border: 'red 1px solid'
      },
      score: 10,
      flag: false,
      list: ['aa','bb','cc'],
      maps: [
          {
            name: 'tom',
            age: 23
          },
          {
            name: 'jerry',
            age: 24
          },
          {
            name: 'kk',
            age: 35
          }
      ],
      obj: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    }
  },
  methods: {
    add: function() {
      this.num++
    },
    handle1: function(event) {
      console.log(event.target.type)
    },
    handle2(a, event) {
      console.log(a)
      console.log(event.target.value)
    },
    handle3() {
      console.log('冒泡了')
    },
    handle4() {

    },
    handle5() {

    },
    handle6() {
      console.log('enter')
    },
    handle7() {
      console.log('delete')
    },
    handle8(event) {
      console.log(event.keyCode)
    },
    handle9() {
      this.href = 'https://www.taobao.com'
    },
    handle10() {
      this.isdiv1 = !this.isdiv1
      this.isdiv2 = !this.isdiv2
    },
    handle11() {
      this.flag = !this.flag
    }
  }
}
</script>

<style>
  #app {
    color: red;
    text-align: center;
  }
  [v-cloak] {
    display: none;
  }
  .div1 {
    height: 100px;
    width: 100px;
    border: #FF0000 1px solid;
  }
  .div2 {
    background-color: #42B983;
  }
</style>
