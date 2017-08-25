<template>
  <div class="pos">
    <div>
      <el-row>
        <el-col class="pos-order" id="order-list" :span="7">
          <el-tabs>
            <el-tab-pane label="点餐">
              <el-table :data="orderList" border show-summary :summary-method="getSummaries" style="width: 100%" >
                <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                <el-table-column prop="count" label="数量" width="70"></el-table-column>
                <el-table-column prop="price" label="金额" width="80"></el-table-column>
                <el-table-column label="操作" width="100" fixed="right">
                  <template scope="scope">
                    <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="div-btn">
                <el-button type="warning" >挂单</el-button>
                <el-button type="danger" @click="emptyOrderList">删除</el-button>
                <el-button type="success" @click="checkOut">结账</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单">
              挂单
            </el-tab-pane>
            <el-tab-pane label="外卖">
              外卖
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="17">
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul>
                <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                  <span>{{goods.goodsName}}</span>
                  <span class="o-price">￥{{goods.price}}元</span>
                </li>
              </ul>
            </div>
            <div class="goods-type">
              <el-tabs>
                <el-tab-pane label="汉堡">
                  <div>
                    <ul class="goodsList">
                      <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                        <span class="foodImg"><img :src="goods.goodsImg" width="100%"/></span>
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">￥{{goods.price}}元</span>
                      </li>
                    </ul>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="小食"></el-tab-pane>
                <el-tab-pane label="饮料"></el-tab-pane>
                <el-tab-pane label="套餐"></el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import ElTabPane from "../../../node_modules/element-ui/packages/tabs/src/tab-pane.vue";

  export default {
    components: {ElTabPane},
    name: 'Pos',
    data () {
      return {
        orderList: [],
        oftenGoods: [
          {
            goodsId:1,
            goodsName:'香辣鸡腿堡',
            price:18
          }, {
            goodsId:2,
            goodsName:'田园鸡腿堡',
            price:15
          }, {
            goodsId:3,
            goodsName:'和风汉堡',
            price:15
          }, {
            goodsId:4,
            goodsName:'快乐全家桶',
            price:80
          }, {
            goodsId:5,
            goodsName:'脆皮炸鸡腿',
            price:10
          }, {
            goodsId:6,
            goodsName:'魔法鸡块',
            price:20
          }, {
            goodsId:7,
            goodsName:'可乐大杯',
            price:10
          }, {
            goodsId:8,
            goodsName:'雪顶咖啡',
            price:18
          }, {
            goodsId:9,
            goodsName:'大块鸡米花',
            price:15
          }, {
            goodsId:20,
            goodsName:'香脆鸡柳',
            price:17
          }
        ],
        type0Goods: [
          {
            goodsId:1,
            goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
            goodsName:'香辣鸡腿堡',
            price:18
          }, {
            goodsId:2,
            goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
            goodsName:'田园鸡腿堡',
            price:15
          }, {
            goodsId:3,
            goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
            goodsName:'和风汉堡',
            price:15
          }, {
            goodsId:4,
            goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
            goodsName:'快乐全家桶',
            price:80
          }, {
            goodsId:5,
            goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
            goodsName:'脆皮炸鸡腿',
            price:10
          }, {
            goodsId:6,
            goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
            goodsName:'魔法鸡块',
            price:20
          }, {
            goodsId:7,
            goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
            goodsName:'可乐大杯',
            price:10
          }, {
            goodsId:8,
            goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
            goodsName:'雪顶咖啡',
            price:18
          }, {
            goodsId:9,
            goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
            goodsName:'大块鸡米花',
            price:15
          }, {
            goodsId:20,
            goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
            goodsName:'香脆鸡柳',
            price:17
          }

        ],
      }
    },
    methods: {
      addOrderList (goods) {
        let isHave = false;
        for (let i=0; i<this.orderList.length; i++) {
          if (this.orderList[i].goodsId == goods.goodsId) {
            isHave = true;
            break;
          }
        }
        if (isHave) {
          let arr = this.orderList.filter(o => o.goodsId == goods.goodsId);
          console.log(arr);
          arr[0].count++;
        } else {
          let newGoods = {goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1};
          this.orderList.push(newGoods);
        }
      },
      delSingleGoods (goods) {
        this.orderList = this.orderList.filter(o => o.goodsId != goods.goodsId);
      },
      emptyOrderList () {
        this.orderList = []
      },
      checkOut () {
        if (this.orderList.length) {
          this.emptyOrderList();
          this.$message({
            message: '结账成功！',
            type: 'success'
          });
        } else {
          this.$message.error('订单为空，不能结账！');
        }
      },
      getSummaries () {
        const sums = [];
        sums[0] = '合计';
        sums[1] = 0;
        sums[2] = 0;
        this.orderList.forEach((element) => {
          sums[1] += element.count;
          sums[2] += element.price * element.count;
        });
        return sums;
      }
    },
    mounted: function() {
      var orderHeight = document.body.clientHeight;
      document.getElementById("order-list").style.height = orderHeight + 'px';
    }
  }
</script>

<style scoped>
  .pos-order {
    background-color: #F9FAFC;
    border-right: 1px solid #C0CCDA;
    height: 100%;
  }

  .div-btn {
    margin-top: 10px;
  }

  .title {
    height: 20px;
    border-bottom: 1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding: 10px;
  }

  .often-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #E5E9F2;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
    cursor: pointer;
  }

  .o-price {
    color: #58B7FF;
  }

  .goods-type {
    clear: both;
  }

  .goodsList li {
    list-style: none;
    width: 20%;
    border: 1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;
    cursor: pointer;
  }

  .goodsList li span {
    display: block;
    float: left;
  }

  .foodImg {
    width: 40%;
  }

  .foodName {
    font-size: 18px;
    padding-left: 10px;
    padding-right: 50px;
    color: brown;

  }

  .foodPrice {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
  }
</style>
