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

export async function CheckInitData(initData) {
  AppState.set({
    valid: null,
    data: {},
  });
  
  const response = await fetch(`/validate?${initData}`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json'
		}
	});

	let respData = await response.json();

  if (response.ok) {
    let user = JSON.parse(respData.data.user);
    respData.data.user = user;

    AppState.set({
      valid: respData.isValid,
      data: respData.data,
    });

    return respData;
  }

  AppState.set({
    valid: false,
    data: {},
  });

  return respData;
}