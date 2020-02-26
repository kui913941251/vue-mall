import {request} from "./request";

export function getGoodsDetail(id) {
  return request({
    url: "/detail",
    params: {
      iid: id
    }
  })
}

export function getGoodsRecommend() {
  return request({
    url: "/recommend"
  })
}

export class Goods{
  constructor(itemInfo , columns , services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
    this.columns = columns
  }
}

export class Shop{
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParams{
  constructor(itemParams) {
    this.info = itemParams.info
    this.rule = itemParams.rule
  }
}