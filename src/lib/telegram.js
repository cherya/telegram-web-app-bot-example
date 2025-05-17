class TgApp {
  static initData = Telegram.WebApp.initData || '';
  static initDataUnsafe = Telegram.WebApp.initDataUnsafe || {};
  static MainButton = Telegram.WebApp.MainButton;
  static HapticFeedback = Telegram.WebApp.HapticFeedback;
  static BackButton = Telegram.WebApp.BackButton;

  static init() {
    Telegram.WebApp.MainButton.setParams({
      text: 'Close',
      is_visible: true
    }).onClick(TgApp.close);
  }

  static ready() {
    Telegram.WebApp.ready();
  }

  static expand() {
    Telegram.WebApp.expand();
  }

  static close() {
    Telegram.WebApp.close();
  }

  static sendData(data) {
    Telegram.WebApp.sendData(data);
  }

  static toggleMainButton() {
    const mainButton = Telegram.WebApp.MainButton;
    if (mainButton.isVisible) {
      mainButton.hide();
    } else {
      mainButton.show();
    }
  }

  static toggleBackButton() {
    const backButton = Telegram.WebApp.BackButton;
    if (backButton.isVisible) {
      backButton.hide();
    } else {
      backButton.show();
    }
  }
}

export { TgApp };

function getInitData() {
  if (Telegram.WebApp.initData) {
    return Telegram.WebApp.initData;
  }

  return "query_id=AAEMjsEBAAAAAAyOwQGvrIHL&user=%7B%22id%22%3A29462028%2C%22first_name%22%3A%22Ilia%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22cherya%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721554069&hash=b9a1a2753acbd55e974fb118f3cc03ea484f98cac8e5c89f5aede16b4b8c2dab";
}

export async function CheckInitData() {
  const initData = getInitData();

  const response = await fetch(`/api/validate?${initData}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  });

  if (!response.ok) {
    const respData = await response.json();
    throw new Error(`Validation failed: ${respData.message}`)
  }

  const respData = await response.json();
  return respData;
}
