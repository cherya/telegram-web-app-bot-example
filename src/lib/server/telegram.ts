import crypto from 'crypto';
import { TELEGRAM_BOT_TOKEN } from '$env/static/private';

interface TelegramWebAppData {
  user: string;
  auth_date: number;
}

interface ValidationResult {
  isValid: boolean;
  data: TelegramWebAppData;
  error?: string;
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

    console.log('time diff', currentAndAuthTimeDiff);

    if (hmac !== hash) {
      return {
        isValid: false,
        error: 'Telegram data hash mismatch',
        data,
      }
    }

    if (secondsToExpire !== 0 && currentAndAuthTimeDiff > secondsToExpire) {
      return {
        isValid: false,
        error: 'Telegram data expired',
        data,
      }
    }

    return {
      isValid: true,
      data,
    }
  }
}

export const Validator = new ValidateTelegramWebAppData(TELEGRAM_BOT_TOKEN);
