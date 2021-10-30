interface Features {
  [featureName: string]: boolean
}

export default class UsersAccess {
  private users: Map<string, Features>

  constructor() {
    this.users = new Map()
  }

  retrieve(email: string, featureName: string): boolean {
    return this.users.get(email)?.[featureName] || false
  }

  create(email: string, featureName: string, enable: boolean) {
    if (!email || !featureName) {
      throw new Error('Bad Input')
    }
    const foundUser = this.users.get(email)
    if (foundUser) {
      foundUser[featureName] = !!enable
      return this.users.set(email, foundUser)
    }

    return this.users.set(email, {
      [featureName]: !!enable,
    })
  }
}
