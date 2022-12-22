# Marketplace









## Methods

### MAX_BPS

```solidity
function MAX_BPS() external view returns (uint64)
```



*The max bps of the contract. So, 10_000 == 100 %*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined |

### acceptOffer

```solidity
function acceptOffer(uint256 _listingId, address _offeror, address _currency, uint256 _pricePerToken) external nonpayable
```



*Lets a listing&#39;s creator accept an offer for their direct listing.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _listingId | uint256 | undefined |
| _offeror | address | undefined |
| _currency | address | undefined |
| _pricePerToken | uint256 | undefined |

### approve

```solidity
function approve(address to, uint256 tokenId) external nonpayable
```



*See {IERC721-approve}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |
| tokenId | uint256 | undefined |

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256)
```



*See {IERC721-balanceOf}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### bidBufferBps

```solidity
function bidBufferBps() external view returns (uint64)
```



*The minimum % increase required from the previous winning bid. Default: 5%.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined |

### buy

```solidity
function buy(uint256 _listingId, address _buyFor, uint256 _quantityToBuy, address _currency, uint256 _totalPrice) external payable
```



*Lets an account buy a given quantity of tokens from a listing.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _listingId | uint256 | undefined |
| _buyFor | address | undefined |
| _quantityToBuy | uint256 | undefined |
| _currency | address | undefined |
| _totalPrice | uint256 | undefined |

### cancelDirectListing

```solidity
function cancelDirectListing(uint256 _listingId) external nonpayable
```



*Lets a direct listing creator cancel their listing.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _listingId | uint256 | undefined |

### closeAuction

```solidity
function closeAuction(uint256 _listingId, address _closeFor) external nonpayable
```



*Lets an account close an auction for either the (1) winning bidder, or (2) auction creator.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _listingId | uint256 | undefined |
| _closeFor | address | undefined |

### contractType

```solidity
function contractType() external pure returns (bytes32)
```



*Returns the type of the contract.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### contractURI

```solidity
function contractURI() external view returns (string)
```



*Contract level metadata.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### contractVersion

```solidity
function contractVersion() external pure returns (uint8)
```



*Returns the version of the contract.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### cool

```solidity
function cool() external pure returns (bool result)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| result | bool | undefined |

### createListing

```solidity
function createListing(IMarketplace.ListingParameters _params) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _params | IMarketplace.ListingParameters | undefined |

### createListingForCollection

```solidity
function createListingForCollection(IMarketplace.ListingParameters _params) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _params | IMarketplace.ListingParameters | undefined |

### getAllActiveListings

```solidity
function getAllActiveListings(uint256[] listingIds) external view returns (struct IMarketplace.Listing[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| listingIds | uint256[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | IMarketplace.Listing[] | undefined |

### getApproved

```solidity
function getApproved(uint256 tokenId) external view returns (address)
```



*See {IERC721-getApproved}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getPlatformFeeInfo

```solidity
function getPlatformFeeInfo() external view returns (address, uint16)
```



*Returns the platform fee recipient and bps.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint16 | undefined |

### initialize

```solidity
function initialize(uint256 _platformFeeBps) external nonpayable
```



*Initiliazes the contract, like a constructor.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _platformFeeBps | uint256 | undefined |

### isApprovedForAll

```solidity
function isApprovedForAll(address owner, address operator) external view returns (bool)
```



*See {IERC721-isApprovedForAll}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| operator | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### listings

```solidity
function listings(uint256) external view returns (uint256 listingId, address tokenOwner, address assetContract, uint256 tokenId, uint256 startTime, uint256 endTime, uint256 quantity, address currency, uint256 reservePricePerToken, uint256 buyoutPricePerToken, enum IMarketplace.TokenType tokenType, enum IMarketplace.ListingType listingType)
```



*Mapping from uid of listing =&gt; listing info.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| listingId | uint256 | undefined |
| tokenOwner | address | undefined |
| assetContract | address | undefined |
| tokenId | uint256 | undefined |
| startTime | uint256 | undefined |
| endTime | uint256 | undefined |
| quantity | uint256 | undefined |
| currency | address | undefined |
| reservePricePerToken | uint256 | undefined |
| buyoutPricePerToken | uint256 | undefined |
| tokenType | enum IMarketplace.TokenType | undefined |
| listingType | enum IMarketplace.ListingType | undefined |

### name

```solidity
function name() external view returns (string)
```



*See {IERC721Metadata-name}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### noop

```solidity
function noop() external pure returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### offer

```solidity
function offer(uint256 _listingId, uint256 _quantityWanted, address _currency, uint256 _pricePerToken, uint256 _expirationTimestamp) external payable
```



*Lets an account (1) make an offer to a direct listing, or (2) make a bid in an auction.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _listingId | uint256 | undefined |
| _quantityWanted | uint256 | undefined |
| _currency | address | undefined |
| _pricePerToken | uint256 | undefined |
| _expirationTimestamp | uint256 | undefined |

### offers

```solidity
function offers(uint256, address) external view returns (uint256 listingId, address offeror, uint256 quantityWanted, address currency, uint256 pricePerToken, uint256 expirationTimestamp)
```



*Mapping from uid of a direct listing =&gt; offeror address =&gt; offer made to the direct listing by the respective offeror.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| listingId | uint256 | undefined |
| offeror | address | undefined |
| quantityWanted | uint256 | undefined |
| currency | address | undefined |
| pricePerToken | uint256 | undefined |
| expirationTimestamp | uint256 | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### ownerOf

```solidity
function ownerOf(uint256 tokenId) external view returns (address)
```



*See {IERC721-ownerOf}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId) external nonpayable
```



*See {IERC721-safeTransferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId, bytes data) external nonpayable
```



*See {IERC721-safeTransferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |
| data | bytes | undefined |

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external nonpayable
```



*See {IERC721-setApprovalForAll}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined |
| approved | bool | undefined |

### setAuctionBuffers

```solidity
function setAuctionBuffers(uint256 _timeBuffer, uint256 _bidBufferBps) external nonpayable
```



*Lets a contract admin set auction buffers.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _timeBuffer | uint256 | undefined |
| _bidBufferBps | uint256 | undefined |

### setContractURI

```solidity
function setContractURI(string _uri) external nonpayable
```



*Lets a contract admin set the URI for the contract-level metadata.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _uri | string | undefined |

### setPlatformFeeInfo

```solidity
function setPlatformFeeInfo(address _platformFeeRecipient, uint256 _platformFeeBps) external nonpayable
```



*Lets a contract admin update platform fee recipient and bps.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _platformFeeRecipient | address | undefined |
| _platformFeeBps | uint256 | undefined |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*See {IERC165-supportsInterface}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```



*See {IERC721Metadata-symbol}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### timeBuffer

```solidity
function timeBuffer() external view returns (uint64)
```



*The amount of time added to an auction&#39;s &#39;endTime&#39;, if a bid is made within `timeBuffer`       seconds of the existing `endTime`. Default: 15 minutes.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined |

### tokenURI

```solidity
function tokenURI(uint256 tokenId) external view returns (string)
```



*See {IERC721Metadata-tokenURI}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### totalListings

```solidity
function totalListings() external view returns (uint256)
```



*Total number of listings ever created in the marketplace.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 tokenId) external nonpayable
```



*See {IERC721-transferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### updateListing

```solidity
function updateListing(uint256 _listingId, uint256 _quantityToList, uint256 _reservePricePerToken, uint256 _buyoutPricePerToken, address _currencyToAccept, uint256 _startTime, uint256 _secondsUntilEndTime) external nonpayable
```



*Lets a listing&#39;s creator edit the listing&#39;s parameters.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _listingId | uint256 | undefined |
| _quantityToList | uint256 | undefined |
| _reservePricePerToken | uint256 | undefined |
| _buyoutPricePerToken | uint256 | undefined |
| _currencyToAccept | address | undefined |
| _startTime | uint256 | undefined |
| _secondsUntilEndTime | uint256 | undefined |

### winningBid

```solidity
function winningBid(uint256) external view returns (uint256 listingId, address offeror, uint256 quantityWanted, address currency, uint256 pricePerToken, uint256 expirationTimestamp)
```



*Mapping from uid of an auction listing =&gt; current winning bid in an auction.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| listingId | uint256 | undefined |
| offeror | address | undefined |
| quantityWanted | uint256 | undefined |
| currency | address | undefined |
| pricePerToken | uint256 | undefined |
| expirationTimestamp | uint256 | undefined |



## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| approved `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### AuctionBuffersUpdated

```solidity
event AuctionBuffersUpdated(uint256 timeBuffer, uint256 bidBufferBps)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| timeBuffer  | uint256 | undefined |
| bidBufferBps  | uint256 | undefined |

### AuctionClosed

```solidity
event AuctionClosed(uint256 indexed listingId, address indexed closer, bool indexed cancelled, address auctionCreator, address winningBidder)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| listingId `indexed` | uint256 | undefined |
| closer `indexed` | address | undefined |
| cancelled `indexed` | bool | undefined |
| auctionCreator  | address | undefined |
| winningBidder  | address | undefined |

### Initialized

```solidity
event Initialized(uint8 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint8 | undefined |

### ListingAdded

```solidity
event ListingAdded(uint256 indexed listingId, address indexed assetContract, address indexed lister, IMarketplace.Listing listing)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| listingId `indexed` | uint256 | undefined |
| assetContract `indexed` | address | undefined |
| lister `indexed` | address | undefined |
| listing  | IMarketplace.Listing | undefined |

### ListingRemoved

```solidity
event ListingRemoved(uint256 indexed listingId, address indexed listingCreator)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| listingId `indexed` | uint256 | undefined |
| listingCreator `indexed` | address | undefined |

### ListingUpdated

```solidity
event ListingUpdated(uint256 indexed listingId, address indexed listingCreator)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| listingId `indexed` | uint256 | undefined |
| listingCreator `indexed` | address | undefined |

### NewOffer

```solidity
event NewOffer(uint256 indexed listingId, address indexed offeror, enum IMarketplace.ListingType indexed listingType, uint256 quantityWanted, uint256 totalOfferAmount, address currency)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| listingId `indexed` | uint256 | undefined |
| offeror `indexed` | address | undefined |
| listingType `indexed` | enum IMarketplace.ListingType | undefined |
| quantityWanted  | uint256 | undefined |
| totalOfferAmount  | uint256 | undefined |
| currency  | address | undefined |

### NewSale

```solidity
event NewSale(uint256 indexed listingId, address indexed assetContract, address indexed lister, address buyer, uint256 quantityBought, uint256 totalPricePaid)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| listingId `indexed` | uint256 | undefined |
| assetContract `indexed` | address | undefined |
| lister `indexed` | address | undefined |
| buyer  | address | undefined |
| quantityBought  | uint256 | undefined |
| totalPricePaid  | uint256 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### PlatformFeeInfoUpdated

```solidity
event PlatformFeeInfoUpdated(address indexed platformFeeRecipient, uint256 platformFeeBps)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| platformFeeRecipient `indexed` | address | undefined |
| platformFeeBps  | uint256 | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |



