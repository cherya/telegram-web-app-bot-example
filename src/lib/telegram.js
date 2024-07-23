import { writable } from "svelte/store";

export const AppState = writable({
  valid: null,
  data: {},
});

const baseURL = 'https://powerful-unbiased-gannet.ngrok-free.app'

export const TgApp = {
  initData: Telegram.WebApp.initData || '',
  initDataUnsafe: Telegram.WebApp.initDataUnsafe || {},
  MainButton: Telegram.WebApp.MainButton,
  HapticFeedback: Telegram.WebApp.HapticFeedback,
  BackButton: Telegram.WebApp.BackButton,

  init(options) {
    Telegram.WebApp.ready();
    Telegram.WebApp.MainButton.setParams({
      text: 'Close',
      is_visible: true
    }).onClick(TgApp.close);
  },
  expand() {
    Telegram.WebApp.expand();
  },
  close() {
    Telegram.WebApp.close();
  },
  sendData(data) {
    Telegram.WebApp.sendData(data);
  },
  toggleMainButton(el) {
    const mainButton = Telegram.WebApp.MainButton;
    if (mainButton.isVisible) {
      mainButton.hide();
    } else {
      mainButton.show();
    }
  },
  toggleBackButton(el) {
    const backButton = Telegram.WebApp.BackButton;
    if (backButton.isVisible) {
      backButton.hide();
    } else {
      backButton.show();
    }
  },
  async checkInitData(initData) {
    if (initData) {
      AppState.set({
        valid: null,
        data: {},
      });

      // Fetch data from the API
      let opts = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "ngrok-skip-browser-warning": "69420",
        }
      }

      const response = await fetch(`${baseURL}/validate?${initData}`, opts);

      // Parse the JSON response
      const respData = await response.json();

      if (response.ok) {
        AppState.set({
          valid: true,
          data: respData,
        });

        return respData;
      }

      AppState.set({
        valid: false,
        data: {},
      });

      return {};
    }

    return {};
  },
}

function getInitData() {
  if (Telegram.WebApp.initData) {
    return Telegram.WebApp.initData;
  }

  return "query_id=AAEMjsEBAAAAAAyOwQGvrIHL&user=%7B%22id%22%3A29462028%2C%22first_name%22%3A%22Ilia%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22cherya%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721554069&hash=b9a1a2753acbd55e974fb118f3cc03ea484f98cac8e5c89f5aede16b4b8c2dab";
}

export async function CheckInitData() {
  let initData = getInitData();
  
  const response = await fetch(`/api/validate?${initData}`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json'
		}
	});

	let respData = await response.json();

  if (response.ok) {
    let user = JSON.parse(respData.data.user);
    respData.data.user = user;
  }

  return respData;
}
