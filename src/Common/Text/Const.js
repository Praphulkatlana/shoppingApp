import * as animationData from './../../Common/Media/search.json'
import * as orderConfrmAnimation from './../../Common/Media/orderConfrm.json'
import * as emptyCartAnimation from './../../Common/Media/emptyCart.json'

import { TbTruckDelivery } from 'react-icons/tb';
import { SiHellofresh } from 'react-icons/si';
import { MdSupportAgent } from 'react-icons/md';
import { GiFruitBowl } from 'react-icons/gi';

import  indexImg1  from '../../Common/Media/Image/indexImg1.png';
import  indexImg2  from '../../Common/Media/Image/indexImg2.png';
import  indexImg3  from '../../Common/Media/Image/indexImg3.png';
import  indexImg4  from '../../Common/Media/Image/indexImg4.png';

import  dealImg  from '../../Common/Media/Image/DealImg.png';
import  experReviewImg1  from '../../Common/Media/Image/experReviewImg1.png';
import  experReviewImg2  from '../../Common/Media/Image/experReviewImg2.png';

import  catagoryFruits  from '../../Common/Media/Image/catagoryFruits.png';
import  catagoryDried  from '../../Common/Media/Image/catagoryDried.png';
import  catagoryJuices  from '../../Common/Media/Image/catagoryJuices.png';
import  catagoryVegetables  from '../../Common/Media/Image/catagoryVegetables.png';
import { footer_mobileNumber, footer_whatsUpmobileNumber } from '../LongText';


export const placeholderValue = ["Patato", "Carrot", "Apple", "Tomato", "Banana"];
export const Search="Search"
export const type_text="text"
export const type_email="email"
export const type_number="number"
export const type_radio="radio"
export const type_submit="submit"
export const SearchItem="Search Item"


export const indexGifSize=30;
export const indexGifOption= {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  export const orderConfrmGifSize=120;
export const orderConfrmOption= {
    loop: true,
    autoplay: true, 
    animationData: orderConfrmAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  export const emptyCartGifSize=250;

  export const emptyCartOption= {
    loop: true,
    autoplay: true, 
    animationData: emptyCartAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


export const images = [
    indexImg1,
    indexImg2,
    indexImg3,
    indexImg4,
  ]
  
export const addtoSize=24;
export const FeatureSize=54;
export const features=[
  {
    id: 0,
    title: 'FREE SHIPPING',
    subtitle: 'ON ORDER OVER $100',
    logo: <TbTruckDelivery size={FeatureSize}/>,
  },
  {
    id: 1,
    title: 'ALWAYS FRESH',
    subtitle: 'PRODUCT WELL PACKAGE',
    logo: <SiHellofresh size={FeatureSize}/>,
  },
  {
    id: 2,
    title: 'SUPERIOR QUALITY',
    subtitle: 'QUALITY PRODUCTS',
    logo: <GiFruitBowl size={FeatureSize}/>,
  },
  {
    id: 3,
    title: 'SUPPORT',
    subtitle: '24/7 SUPPORT',
    logo: <MdSupportAgent size={FeatureSize}/>,
  },
]
export const Feature="Feature";

export const fruits="Fruits"
export const vegetabels="Vegetables"
export const juices="Juice"
export const dried="DryFruit"
export const shopNow="Shop Now"

export const now="now"
export const only="only"
export const off="off"
export const currencySymbol="₹"
export const percentageSymbol="%"
export const perKG="/kg"
export const perHalfKG="/500g"
export const perPack="/pack"


export const days_text="Days"
export const hours_text="Hours"
export const minutes_text="Minutes"
export const seconds_text="Seconds"

export const dealProduct={
  id: 1,
  name: 'Organic Tomatoes',
  price: 80,
  discountedPrice: 60,
  img:dealImg,
  endDealTime:'2023-08-31T23:59:59',
  perSybmol:perKG,
}
export const defaultEndDealDate="2023-08-19T18:59:59";

export const shoppingReviews = [
  {
    id: 1,
    img: experReviewImg1,
    title: 'Fresh Veggie Paradise',
    position: 'Shop Review',
    description: 'Absolutely love this place! They always have a wide variety of fresh and organic vegetables. The staff is friendly and helpful.',
  },
  {
    id: 2,
    img:experReviewImg2,
    title: 'Best Prices in Town',
    position: 'Customer Review',
    description: `I've been shopping here for years, and I'm always amazed by the affordable prices they offer for high-quality vegetables. Highly recommended!`,
  },
  {
    id: 3,
    img: experReviewImg1,
    title: 'Great Selection',
    position: 'Customer Review',
    description: 'The store has an impressive selection of exotic and local vegetables. It\'s like a treasure trove for vegetable enthusiasts.',
  },
  {
    id: 4,
    img: experReviewImg2,
    title: 'Friendly Staff',
    position: 'Customer Review',
    description: 'The staff here is not only knowledgeable but also friendly. They often provide recommendations and helpful cooking tips.',
  },
  {
    id: 5,
    img: experReviewImg1,
    title: 'Convenient Location',
    position: 'Customer Review',
    description: `The store's central location makes it a convenient stop for fresh produce on the way home from work.`,
  },
  {
    id: 6,
    img: experReviewImg2,
    title: 'Weekly Ritual',
    position: 'Regular Shopper',
    description: 'Visiting this store has become a weekly ritual for me. I appreciate the consistency in quality and the diverse options available.',
  },
  {
    id: 7,
    img:experReviewImg1,
    title: 'Farm-to-Table Goodness',
    position: 'Foodie Review',
    description: 'As a food enthusiast, I can tell the difference in taste when I cook with vegetables from this shop. It\'s like farm-to-table goodness!',
  },
  {
    id: 8,
    img: experReviewImg2,
    title: 'Crisp and Fresh',
    position: 'Customer Review',
    description: 'One thing I love about this place is that their vegetables are always crisp and fresh. It\'s a pleasure to cook with such quality produce.',
  },
  {
    id: 9,
    img: experReviewImg2,
    title: 'Eco-Friendly Packaging',
    position: 'Environment Advocate',
    description: 'I appreciate their efforts to reduce plastic waste. They use eco-friendly packaging options for their vegetables, which is a big plus.',
  },
  {
    id: 10,
    img: experReviewImg1,
    title: 'Supporting Local Farmers',
    position: 'Community Member',
    description: 'By shopping here, I know I\'m supporting local farmers and contributing to the community. It\'s a win-win!',
  },
  {
    id: 11,
    img: experReviewImg2,
    title: 'Healthy Lifestyle Choice',
    position: 'Health Enthusiast',
    description: 'Eating more vegetables has been a priority for me, and this store has made it easier to maintain a healthy and nutritious diet.',
  },
];


export const numberOfReview=shoppingReviews&&shoppingReviews.length>0?shoppingReviews.length:0;

export const catagoryImg=[catagoryFruits,catagoryVegetables,catagoryJuices,catagoryDried]

export const footerIconSize=25;
export const footerSocialIconSize=30;
export const footer_BlackIconSize=25;
export const footer_instaLink="https://www.instagram.com/prafulkatlana22/"
export const footer_twitterLink="https://twitter.com/ShoNelsona"
export const footer_youtubeLink="https://www.youtube.com/channel/UCeLJBHQX062u3yU32m_ZxWA"
export const footer_whatsupLink=`https://api.whatsapp.com/send?phone=${footer_whatsUpmobileNumber}`
export const footer_emailaddress="vegfoods@gmail.com"
export const footer_emailLink=`mailto:${footer_emailaddress}`
export const footer_numberLink=`tel:${footer_mobileNumber}`


export const NavBarIconSize=40;
export const NavLogo_size=40;
export const numberOfItemInCart=3;

//page indexing
export const homepageIndex1="one"
export const homepageIndex2="two"
export const homepageIndex3="three"
export const homepageIndex4="four"
export const homepageIndex5="five"
export const homepageIndex6="six"
export const homepageIndex7="seven"
export const homepageIndex8="eight"

export const all="All";


export const catagoryId=[
  { id: 0, value: all },
  { id: 1, value: fruits },
  { id: 2, value: vegetabels },
  { id: 3, value: juices },
  { id: 4, value: dried }
]

export const catagory=[
  {
    id: 1,
    tag: fruits,
    image: catagoryFruits,
  },
  {
    id: 2,
    tag: vegetabels,
    image: catagoryVegetables,
  },
  {
    id: 3,
    tag: juices,
    image:catagoryJuices,
  },
  {
    id: 4,
    tag: dried,
    image:catagoryDried,
  },
]


export const value_text="value"
export const id_text="id"


///Listing page
export const ListingIconSize=28;
export const explore="explore"
export const Searchresultfor ="Search result for "

//PDP

export const addtoCart="Add to Cart";
export const ProceedToCart="Proceed to cart";
export const minusSymbol="-";
export const addSymbol="+";
export const outOfStarnumber=5;
export const ratingIconSize=25

//cart
export const cart="cart";
export const cartNumber="cartNumber"
export const YourBasketList="Your basket list";
export const deleteSureMsg="Are you sure you want to delete this?"
export const emptyCartMessage="Your cart is empty please add some product";
export const cartListData=[
  {
    id: 1,
    imgurl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    title: 'Carrot',
    subtitle: 'Root Vegetable',
    price: 17,
    quantity: 4,
    total: 68
  },
  {
    id: 2,
    imgurl: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmFuYW5hfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    title: 'Banana',
    subtitle: 'Fruit',
    price: 26,
    quantity: 3,
    total: 78
  },
  {
    id: 3,
    imgurl: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGV0dHVjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Lettuce',
    subtitle: 'Leafy Green',
    price: 23,
    quantity: 4,
    total: 92
  },
  {
    id: 4,
    imgurl: 'https://images.unsplash.com/photo-1637715924886-cbe4485f90b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEdyYXBlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Grapes',
    subtitle: 'Berries',
    price: 17,
    quantity: 5,
    total: 85
  },
  {
    id: 5,
    imgurl: 'https://images.unsplash.com/photo-1522579479806-486feddb6d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHx2ZWdldGFibGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Tomato',
    subtitle: 'Fruit, Culinary Vegetable',
    price: 39,
    quantity: 4,
    total: 156
  },
  {
    id: 6,
    imgurl: 'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGluZWFwcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    title: 'Pineapple',
    subtitle: 'Tropical Fruit',
    price: 18,
    quantity: 2,
    total: 36
  },
  {
    id: 7,
    imgurl: 'https://images.unsplash.com/photo-1615484477201-9f4953340fab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWdncGxhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Eggplant',
    subtitle: 'Berry, Culinary Vegetable',
    price: 23,
    quantity: 5,
    total: 115
  },
  {
    id: 8,
    imgurl: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Mango',
    subtitle: 'Tropical Fruit',
    price: 45,
    quantity: 3,
    total: 135
  },
  {
    id: 9,
    imgurl: 'https://images.unsplash.com/photo-1615485021022-dec8994adeba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJyb2Njb2xpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    title: 'Broccoli',
    subtitle: 'Cruciferous Vegetable',
    price: 16,
    quantity: 5,
    total: 80
  },
  {
    id: 10,
    imgurl: 'https://plus.unsplash.com/premium_photo-1674382739482-5d36b98d653a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2l3aXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Kiwi',
    subtitle: 'Tropical Fruit',
    price: 42,
    quantity: 1,
    total: 42
  }
]


export const Code="Code";
export const CouponCode="Coupon Code";
export const CouponCodeText="Enter your coupon code if you have one";
export const ApplyCoupon="Apply Coupon";

export const yourDetail="Your Details";
export const name="Name";
export const mobile="Mobile";
export const email="Email";
export const address="Address";
export const additionalMessage="Additional Message";
export const additionalMessage_form="Additional_Message";
export const update="Update";

export const additionalMessage_placeholder="Optional";


export const cartTotal="Cart Totals";
export const Subtotal="Subtotal";
export const Delivery="Delivery";
export const Discount="Discount";
export const ProceedToCheckout="Proceed to Checkout";

export const emailRegx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const mobileRegx=/^\d{10}$/
export const onlySpecialCharsRegex = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;

export const dataErrorMessage="Please provide a valid input"
export const dataEntryMessage="Please provide your details"


//cartList
export const yourWishlist="Your wishlist"
export const productList="Product List";
export const Price="Price";
export const Quantity="Quantity";
export const Total="Total";
export const showMoreText="Show More"
export const showLessText="Show Less"

export const expandCollapseIconSize=35;
export const cartListIconSize=25;


//checkout
export const PaymentMode="Payment Mode"
export const PaymentModeType="PaymentModeType"
export const UPI="UPI"
export const card="Card"
export const cashOnDelivery="Cash On Delivery"
export const pay="Pay"
export const paymentDoneText="Payment Done";
export const orderSoonDelivered="Your order soon delivered to your address";
export const thnxForPurchasing="Thanks for Purchasing, keep shopping!!"
export const continueShopping="Continue Shopping";

export const ArrayOfPaymentModeType=[UPI,card,cashOnDelivery]


export const couponCode=[
  {
    id:"FLAT10",
    value:10
  },
  {
    id:"FLAT30",
    value:30
  },
  {
    id:"FLAT50",
    value:50
  },
  {
    id:"FLAT500",
    value:500
  }
]

export const minProfitValue=50;