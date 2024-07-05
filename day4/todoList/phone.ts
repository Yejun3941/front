interface PhoneNumberDict{
  [phone:string]:{num:number;}
}

type Contact = {name:string,address:string,phones:PhoneNumberDict}

enum PhoneType{
  Home='home',
  Office="office",
  Studio='studio'
}

async function fetchContacts():Promise<Contact[]>{
  const contacts:Contact[]=[
    {name:"마동석",
      address:"서울시 강남구",
      phones:{
        home:{
          num:8201077778888,
        },
        office:{
          num:8201099990000,
        },
      }
    }
  ]
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts),2000);
  })
}

class AddressBook{
  contacts:Contact[]=[];

  // constructor(){
  //   this.fetchData()
  // }
  async fetchData():Promise<void> {
    await fetchContacts().then((response) => {
      this.contacts = response
    })

  }
  findContactByName(name:string):Contact[]{
    return this.contacts.filter((contact)=>contact.name===name)
  }
  findContactByAddress(address:string):Contact[]{
    return this.contacts.filter((contact)=>contact.address===address)
  }
  findContactByPhone(phone:number,phoneType:PhoneType):Contact[]{
    return this.contacts.filter((contact)=>contact.phones[phoneType].num===phone)
  }

  addContact(contact:Contact):void{
    this.contacts.push(contact);
  }
  displayListByName():string[]{
    return this.contacts.map((contact)=>contact.name)
  }
  displayListByAddress():string[]{
    return this.contacts.map((contact)=>contact.address)
  }
}
async function test2() {
  let addressBook:AddressBook = new AddressBook();
  await addressBook.fetchData();
  console.log(addressBook.contacts)
  let answer = addressBook.findContactByName("마동석")
  console.log(answer)
}
test2();
