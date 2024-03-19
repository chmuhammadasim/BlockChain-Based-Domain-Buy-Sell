const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("ETHDaddy", () => {
  let ethDaddy
  let deployer, owner1

  const Name = 'Eth Daddy'
  const Symbol = 'ETHD'

  beforeEach(async () => {
    ///setup accounts
    [deployer, owner1] = await ethers.getSigners();
    ///deploy contract
    const ETHDaddy = await ethers.getContractFactory('ETHDaddy')
     ethDaddy = await ETHDaddy.deploy('Eth Daddy','ETHD')
    ///list domains
    const transactions = await ethDaddy.connect(deployer).list("jack.eth",tokens(10))
    await transactions.wait()
  })
  describe("Deployment", () => {
    it('has a name',async () => {
      let result = await ethDaddy.name()
      expect(result).to.equal(Name)
    })
    it('has a symbol',async () => {
      let result = await ethDaddy.symbol()
      expect(result).to.equal(Symbol)
    })
    it('has a Owner',async () => {
      let result = await ethDaddy.owner()
      expect(result).to.equal(deployer.address)
    })
    it('Returns the max Supply',async () => {
      let result = await ethDaddy.maxSupply()
      expect(result).to.equal(1)
    })
  })
  describe("Domain",()=>{
    it("Returns domain attributes",async () => {
      let domain = await ethDaddy.getDomains(1);
      expect(domain.name).to.be.equal("jack.eth")
      expect(domain.cost).to.be.equal(tokens(10) )
      expect(domain.isOwned).to.be.equal(false)
    })
  })

  describe("Minting",()=>{
    const ID = 1
    const AMOUNT = ethers.utils.parseUnits('10', 'ether')

    beforeEach( async()=>{
      const transactions = await ethDaddy.connect(owner1).mint(ID,{value:AMOUNT})
      await transactions.wait()
    })

    it("Updates the Owner",async () => {
      const owner = await ethDaddy.ownerOf(ID)
      expect(owner).to.be.equal(owner1.address)
    })

    it("Updates the Contract Balance",async () => {
      const result = await ethDaddy.getBalance( )
      expect(result).to.be.equal(AMOUNT)
    })
  })
})
