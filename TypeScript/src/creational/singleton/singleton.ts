class Singleton {
  private static _instance: Singleton | null = null
  private _mfcharacters: string[] = []

  private constructor() {}

  static get instance() {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton()
    }

    return Singleton._instance
  }

  set mfcharacters(characters: string[]) {
    this._mfcharacters = this._mfcharacters.concat(characters)
  }
}

const SIModernFamilyCharacters1 = Singleton.instance
SIModernFamilyCharacters1.mfcharacters = ['Phil, Claire']

const SIModernFamilyCharacters2 = Singleton.instance
SIModernFamilyCharacters1.mfcharacters = ['Mith, Cam']

console.log(SIModernFamilyCharacters1)
console.log(SIModernFamilyCharacters2)
console.log(SIModernFamilyCharacters1 === SIModernFamilyCharacters2)
