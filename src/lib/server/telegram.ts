import crypto from 'crypto';
import { TELEGRAM_BOT_TOKEN } from '$env/static/private';

interface TelegramWebAppData {
  user: string;
  auth_date: number;
}

interface ValidationResult {
  isValid: boolean;
  data: TelegramWebAppData;
}

class ValidateTelegramWebAppData {
  telegramBotToken: string;

  constructor(telegramBotToken: string) {
    this.telegramBotToken = telegramBotToken;
  }

  validateData(initData: string, secondsToExpire: number): ValidationResult {
    const params = new URLSearchParams(initData);
    const data = {} as TelegramWebAppData;
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
    const authDate = Number(data.auth_date);
    const currentAndAuthTimeDiff = currentTime - authDate;

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
