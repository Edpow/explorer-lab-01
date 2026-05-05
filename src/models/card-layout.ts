export type CardType = "mastercard" | "visa" | "default"

export class CardLayout {
  private ccBgColor01: SVGPathElement | null = null
  private ccBgColor02: SVGPathElement | null = null
  private ccLogo: HTMLImageElement | null = null
  private securityCode: HTMLElement | null = null
  private _type: CardType | undefined = undefined

  constructor() {
    this.ccBgColor01 = document.querySelector(
      ".cc-bg svg > g g:nth-child(1) path",
    )
    this.ccBgColor02 = document.querySelector(
      ".cc-bg svg > g g:nth-child(2) path",
    )
    this.ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

    this.securityCode = document.querySelector("#security-code")
  }

  set CardType(value: CardType) {
    this._type = value

    const colors: Record<CardType, string[]> = {
      visa: ["#436D99", "#2D57F2"],
      mastercard: ["#DF6F29", "#C69347"],
      default: ["black", "gray"],
    }

    if (this.ccBgColor01 !== null) {
      this.ccBgColor01.setAttribute("fill", colors[this._type][0])
    }

    if (this.ccBgColor02 !== null) {
      this.ccBgColor02.setAttribute("fill", colors[this._type][1])
    }

    if (this.ccLogo !== null) {
      this.ccLogo.setAttribute("src", `cc-${this._type}.svg`)
    }
  }
}
