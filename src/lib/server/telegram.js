import crypto from 'crypto';

import { TELEGRAM_BOT_TOKEN } from '$env/static/private'

class ValidateTelegramWebAppData {
  /**
   * Creates ValidateTelegramWebAppData instance.
   * @constructor
   * @param {string} telegramBotToken - your Telegram bot's token
   */
  constructor(telegramBotToken) {
    this.telegramBotToken = telegramBotToken;
  }

  /**
   * @param {string} initData - initData received from Telegram
   * @param {number} secondsToExpire - number of seconds to expire from auth_date; enter 0 to ignore expiry check
   * @returns {Object} - Returns an object with keys 'isValid' and 'data'.
   * - Value of 'isValid' will be true if data is valid; false if data is invalid/has expired.
   * - Value of 'data' contains the parsed initData in object
   */
  validateData(initData, secondsToExpire) {
    const params = new URLSearchParams(initData);
    const data = {};
    let hash = '';
    for (const [key, value] of params.entries()) {
      key === 'hash' ? hash = value : data[key] = value;
    }
    const dataCheckString = Object.keys(data)
      .sort()
      .map(key => `${key}=${data[key]}`)
      .join('\n');
    const secretKey = crypto.createHmac('sha256', 'WebAppData').update(this.telegramBotToken).digest();
    const hmac = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');
    const currentTime = Date.now() / 1000;
    const currentAndAuthTimeDiff = currentTime - data.auth_date;

    if (secondsToExpire === 0) {
      return {
        isValid: hmac === hash,
        data
      };
    } else {
      return {
        isValid: currentAndAuthTimeDiff < secondsToExpire && hmac === hash,
        data
      };
    }
  }
}

export const Validator = new ValidateTelegramWebAppData(TELEGRAM_BOT_TOKEN);