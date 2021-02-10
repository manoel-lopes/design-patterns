class MonoState {
  private static _mfcharacters: string[] = []

  get mfcharacters() {
    return MonoState._mfcharacters
  }

  set mfcharacters(characters: string[]) {
    MonoState._mfcharacters = MonoState._mfcharacters.concat(characters)
  }
}

const MOModernFamilyCharacters1 = new MonoState()
MOModernFamilyCharacters1.mfcharacters = ['Phil, Claire']

const MOModernFamilyCharacters2 = new MonoState()
MOModernFamilyCharacters1.mfcharacters = ['Mith, Cam']

console.log(MOModernFamilyCharacters1.mfcharacters)
console.log(MOModernFamilyCharacters2.mfcharacters)
console.log(MOModernFamilyCharacters1 === MOModernFamilyCharacters2)
