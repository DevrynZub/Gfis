

export class Gift {
  constructor(data) {
    this.id = data.id
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened || false
    this.creatorId = data.creatorId

  }
}


