import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"





class GiftsService {

  async getGifts() {
    const res = await api.get('api/gifts')
    // logger.log(res.data)
    const gifts = res.data.map(giftPojo => new Gift(giftPojo))
    // logger.log(gifts)
    AppState.gifts = gifts
    logger.log(AppState.gifts)
  }

  async createGift(giftObject) {
    logger.log(giftObject)
    const res = api.post(`api/gifts`, giftObject)
    const newGift = new Gift(res.data)
    AppState.gifts.push(newGift)
  }

}




export const giftsService = new GiftsService()
