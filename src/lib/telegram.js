import { browser } from '$app/environment'

class TgApp {
  static get WebApp() {
    return browser ? window?.Telegram?.WebApp : null
  }

  static get initData() {
    return this.WebApp?.initData || ''
  }

  static get initDataUnsafe() {
    return this.WebApp?.initDataUnsafe || {}
  }

  static get MainButton() {
    return this.WebApp?.MainButton
  }

  static get HapticFeedback() {
    return this.WebApp?.HapticFeedback
  }

  static get BackButton() {
    return this.WebApp?.BackButton
  }

  static init() {
    this.MainButton?.setParams({
      text: 'Close',
      is_visible: true
    })?.onClick(this.close)
  }

  static ready() {
    this.WebApp?.ready()
  }

  static expand() {
    this.WebApp?.expand()
  }

  static close() {
    this.WebApp?.close()
  }

  static sendData(data) {
    this.WebApp?.sendData(data)
  }

  static toggleMainButton() {
    const mainButton = this.MainButton
    if (!mainButton) return

    if (mainButton.isVisible) mainButton.hide()
    else mainButton.show()
  }

  static toggleBackButton() {
    const backButton = this.BackButton
    if (!backButton) return

    if (backButton.isVisible) backButton.hide()
    else backButton.show()
  }
}

export { TgApp }
