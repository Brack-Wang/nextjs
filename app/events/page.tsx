// import Link from "next/link"

// export default function events() {
//     return (
//       <main className="flex min-h-screen flex-col items-center justify-between p-24">
   
//       </main>
//     )
//   }

import Link from 'next/link';

const eventsData = [
      {
    imageUrl: '/1116戒指.JPG', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/o/2SKQrZ2AwhQ', // 替换为对应的网站链接
    altText: '25/11/26 DIY银戒指 @HotPot Studio', // 图片的替代文本
  },  
   {
    imageUrl: '/921小桌.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/o/4wEZjWgmUcE', // 替换为对应的网站链接
    altText: '25/9/21 小桌聊天 @Sweet Bean', // 图片的替代文本
  },  
         {
    imageUrl: '/824golf.JPG', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'https://www.xiaohongshu.com/user/profile/5c25ac9d000000000700db3c?xsec_token=YBolyG7kbrB9Cp8KXGHfCqX5dB9Q8gqsn-NykhWEqR2-Q=&xsec_source=app_share&xhsshare=CopyLink&appuid=5c25ac9d000000000700db3c&apptime=1755730538&share_id=92fb819a4b2047e78f78319790c14961', // 替换为对应的网站链接
    altText: '25/8/24 @Topgolf Schaumburg', // 图片的替代文本
  },  
   {
    imageUrl: '/香水.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/m/24JnS4vzkKI', // 替换为对应的网站链接
    altText: '25/8/3 DIY香水 @Lovely Intentions', // 图片的替代文本
  },  
      {
    imageUrl: '/727划船.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'https://www.xiaohongshu.com/user/profile/5c25ac9d000000000700db3c?xsec_token=YBolyG7kbrB9Cp8KXGHfCqX5dB9Q8gqsn-NykhWEqR2-Q=&xsec_source=app_share&xhsshare=CopyLink&appuid=5c25ac9d000000000700db3c&apptime=1755730538&share_id=92fb819a4b2047e78f78319790c14961', // 替换为对应的网站链接
    altText: '25/7/27 Kayak @Lake Geneva', // 图片的替代文本
  },  
      {
    imageUrl: '/密室.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'https://www.xiaohongshu.com/user/profile/5c25ac9d000000000700db3c?xsec_token=YBolyG7kbrB9Cp8KXGHfCqX5dB9Q8gqsn-NykhWEqR2-Q=&xsec_source=app_share&xhsshare=CopyLink&appuid=5c25ac9d000000000700db3c&apptime=1755730538&share_id=92fb819a4b2047e78f78319790c14961', // 替换为对应的网站链接
    altText: '25/7/20 密室逃脱 @The Escape Game Chicago', // 图片的替代文本
  },  
      {
    imageUrl: '/野餐.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/m/4GmgYsjlKNr', // 替换为对应的网站链接
    altText: '25/7/13 野餐式小桌🧺 @Burnham Park Promontory Point', // 图片的替代文本
  },  
      {
    imageUrl: '/629laser.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/m/9Px6OXhq5rs', // 替换为对应的网站链接
    altText: '25/6/29 LaserTag @WhirlyBall Chicago', // 图片的替代文本
  },  
      {
    imageUrl: '/mishmash.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/m/6hjnBjmoZRI', // 替换为对应的网站链接
    altText: '25/6/22 @Mish Mash Adventures', // 图片的替代文本
  },  
      {
    imageUrl: '/615草莓.JPG', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/m/7j7h1df7yRo', // 替换为对应的网站链接
    altText: '25/6/15 摘草莓 @TOM’s Farm Market', // 图片的替代文本
  },  
      {
    imageUrl: '/68hiking.JPG', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'https://www.xiaohongshu.com/user/profile/5c25ac9d000000000700db3c?xsec_token=YBolyG7kbrB9Cp8KXGHfCqX5dB9Q8gqsn-NykhWEqR2-Q=&xsec_source=app_share&xhsshare=CopyLink&appuid=5c25ac9d000000000700db3c&apptime=1755730538&share_id=92fb819a4b2047e78f78319790c14961', // 替换为对应的网站链接
    altText: '25/6/8 Hiking @Matthiessen State Park', // 图片的替代文本
  },  
      {
    imageUrl: '/83香薰.JPG', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/m/AP3rV00pnlt', // 替换为对应的网站链接
    altText: '25/8/3 DIY香薰 @Uni Uni Bubble Tea-Wick Park', // 图片的替代文本
  },  
      {
    imageUrl: '/518小桌.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/m/bPlCHBFb3v', // 替换为对应的网站链接
    altText: '25/5/18 小桌聊天 @Sweet Bean', // 图片的替代文本
  },  
       {
    imageUrl: '/54奶茶.JPG', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/m/1vLt8LSFVGj', // 替换为对应的网站链接
    altText: '25/5/4 奶茶分享会 @Uni Uni Bubble Tea-Wick Park', // 图片的替代文本
  },  
   {
    imageUrl: '/427zipline.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/m/6XADTa47xfZ', // 替换为对应的网站链接
    altText: '25/4/27 Zipline @Go Ape Treetop Adventure', // 图片的替代文本
  },  
      {
    imageUrl: '/420小桌.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/m/8QxyKaNJphl', // 替换为对应的网站链接
    altText: '25/4/20 小桌聊天 @Sweet Bean', // 图片的替代文本
  },  
    {
    imageUrl: '/413hiking.JPG', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/m/aG7DQq10Zj', // 替换为对应的网站链接
    altText: '25/4/13 Hiking @Matthiessen State Park', // 图片的替代文本
  },  
    {
    imageUrl: '/46高尔夫.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/m/9ESM9qnOCvN', // 替换为对应的网站链接
    altText: '25/4/6 迷你高尔夫 @Puttshack', // 图片的替代文本
  },  
    {
    imageUrl: '/323activated.JPG', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/m/A0RGclqgZ56', // 替换为对应的网站链接
    altText: '25/3/23 室内游戏 @Activated Oak Brook', // 图片的替代文本
  },  
       {
    imageUrl: '/316小桌.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/m/2beIAuTzgTn', // 替换为对应的网站链接
    altText: '25/3/16 小桌聊天 @Sweet Bean', // 图片的替代文本
  }, 
      {
    imageUrl: '/31陶瓷.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'https://www.xiaohongshu.com/user/profile/5c25ac9d000000000700db3c?xsec_token=YBolyG7kbrB9Cp8KXGHfCqX5dB9Q8gqsn-NykhWEqR2-Q=&xsec_source=app_share&xhsshare=CopyLink&appuid=5c25ac9d000000000700db3c&apptime=1755730538&share_id=92fb819a4b2047e78f78319790c14961', // 替换为对应的网站链接
    altText: '25/3/1 做陶瓷🏺️ @Freestyle Ceramics & Tufting', // 图片的替代文本
  }, 
      {
    imageUrl: '/29小桌.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/m/2sraYzfIDsk', // 替换为对应的网站链接
    altText: '25/3/16 小桌聊天 @Sweet Bean', // 图片的替代文本
  }, 
      {
    imageUrl: '/22保龄球.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'https://www.xiaohongshu.com/user/profile/5c25ac9d000000000700db3c?xsec_token=YBolyG7kbrB9Cp8KXGHfCqX5dB9Q8gqsn-NykhWEqR2-Q=&xsec_source=app_share&xhsshare=CopyLink&appuid=5c25ac9d000000000700db3c&apptime=1755730538&share_id=92fb819a4b2047e78f78319790c14961k', // 替换为对应的网站链接
    altText: '25/2/2 室内保龄球🎳 @Pinstripes', // 图片的替代文本
  }, 
      {
    imageUrl: '/112射箭.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'https://www.xiaohongshu.com/user/profile/5c25ac9d000000000700db3c?xsec_token=YBolyG7kbrB9Cp8KXGHfCqX5dB9Q8gqsn-NykhWEqR2-Q=&xsec_source=app_share&xhsshare=CopyLink&appuid=5c25ac9d000000000700db3c&apptime=1755730538&share_id=92fb819a4b2047e78f78319790c14961k', // 替换为对应的网站链接
    altText: '25/1/12 室内射箭🏹️ @Chicago Archery', // 图片的替代文本
  }, 
      {
    imageUrl: '/1231跨年.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'https://www.xiaohongshu.com/user/profile/5c25ac9d000000000700db3c?xsec_token=YBolyG7kbrB9Cp8KXGHfCqX5dB9Q8gqsn-NykhWEqR2-Q=&xsec_source=app_share&xhsshare=CopyLink&appuid=5c25ac9d000000000700db3c&apptime=1755730538&share_id=92fb819a4b2047e78f78319790c14961k', // 替换为对应的网站链接
    altText: '24/12/31 跨年！🎆', // 图片的替代文本
  }, 
      {
    imageUrl: '/1221画廊.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/m/5XPUBkXSaPP', // 替换为对应的网站链接
    altText: '24/12/21 Gallery Day', // 图片的替代文本
  }, 
     // 到这了
      {
    imageUrl: '/1215小桌.jpeg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/a/0HnDvktyWKR1', // 替换为对应的网站链接
    altText: '24/12/15 主题性小桌聊天Coffee Chat @Sweet Bean & Avec', // 图片的替代文本
  },  
   {
    imageUrl: '/1208花园2.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/a/yNogU93H9Dq1', // 替换为对应的网站链接
    altText: '24/12/8 温室花园 @Garfield Park Conservatory', // 图片的替代文本
  },  
   {
    imageUrl: '/1109VR2.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/a/uTbXoIhCTWg0', // 替换为对应的网站链接
    altText: '24/11/9 鱿鱼游戏 @Sandbox VR + D Cuisine', // 图片的替代文本
  },  
      {
    imageUrl: '/1026鬼屋.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/a/k4lp6eSxZWg0', // 替换为对应的网站链接
    altText: '24/10/26 🎃鬼屋Coffee Chat @Midnight Terror Haunted House', // 图片的替代文本
  },  
      {
    imageUrl: '/1020枫叶.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/a/vLT5jV841Wg0', // 替换为对应的网站链接
    altText: '24/10/20 赏枫 @Hollyhill', // 图片的替代文本
  },  
      {
    imageUrl: '/1013手工2.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'https://www.xiaohongshu.com/user/profile/5c25ac9d000000000700db3c?xhsshare=CopyLink&appuid=5c25ac9d000000000700db3c&apptime=1732313975&share_id=41d3a11a3c51414db8f615803d875138', // 替换为对应的网站链接
    altText: '24/10/13 画盘子 @Glazed Expressions', // 图片的替代文本
  },  
   
   {
    imageUrl: '/1006小桌.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/a/l7PBCZWBJBpX', // 替换为对应的网站链接
    altText: '24/10/6 主题性小桌聊天Coffee Chat @West Town', // 图片的替代文本
  },  
         {
    imageUrl: '/922BBQ.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'https://www.xiaohongshu.com/user/profile/5c25ac9d000000000700db3c?xhsshare=CopyLink&appuid=5c25ac9d000000000700db3c&apptime=1732313975&share_id=41d3a11a3c51414db8f615803d875138', // 替换为对应的网站链接
    altText: '24/9/22 BBQ @Blackwell Forest Preserve', // 图片的替代文本
  },  
         {
    imageUrl: '/0915小桌.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/a/MFBKAYCyAkNW', // 替换为对应的网站链接
    altText: '24/9/15 主题性小桌聊天Coffee Chat @West Town', // 图片的替代文本
  },  
   {
    imageUrl: '/0908酒庄.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/a/Fjaf3ZDbPApX', // 替换为对应的网站链接
    altText: '24/9/8 酒庄tour @Valentino Winery', // 图片的替代文本
  },  
      {
    imageUrl: '/0817vr.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/a/WwCZsvALukNW', // 替换为对应的网站链接
    altText: '24/8/17 VR @Sandbox VR', // 图片的替代文本
  },  
   {
    imageUrl: '/0803小桌.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/a/YSK8syKUtkNW', // 替换为对应的网站链接
    altText: '24/8/3 主题性小桌聊天Coffee Chat @Sawada Coffee', // 图片的替代文本
  },  
      {
    imageUrl: '/0727sixflag.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/a/6g6gRbCcqkNW', // 替换为对应的网站链接
    altText: '24/7/27 @Six Flag', // 图片的替代文本
  },  
   {
    imageUrl: '/0713小桌.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/oxEFiR', // 替换为对应的网站链接
    altText: '24/7/13 主题性小桌聊天Coffee Chat @Sawada Coffee', // 图片的替代文本
  },
          {
    imageUrl: '/630hiking.JPG', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/ddGFiR', // 替换为对应的网站链接
    altText: '24/6/30 Hiking🚶 @Starved Rock State Park', // 图片的替代文本
  },
       {
    imageUrl: '/622草莓 2.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/kOm0iO', // 替换为对应的网站链接
    altText: '24/6/22 摘草莓🍓 @Stade‘s Farm and Market', // 图片的替代文本
  },
    {
    imageUrl: '/618野餐小桌.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/tJTmKM', // 替换为对应的网站链接
    altText: '24/6/15 野餐式小桌聊天🧺Coffee Chat @Gilson Park', // 图片的替代文本
  },
        {
    imageUrl: '/0608goape.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/', // 替换为对应的网站链接
    altText: '24/6/8 🐒户外丛林探险 @Go Apes Chicago', // 图片的替代文本
  },
        {
    imageUrl: '/61cs.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/KcGo1L', // 替换为对应的网站链接
    altText: '24/6/1 Laser Tag版真人室内CS @Combat Chicago', // 图片的替代文本
  },
        {
    imageUrl: '/518小桌.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/bKPo1L', // 替换为对应的网站链接
    altText: '24/5/18 主题性小桌聊天Coffee Chat @Sawada Coffee', // 图片的替代文本
  },
     {
    imageUrl: '/0511密室.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/x8vfmJ', // 替换为对应的网站链接
    altText: '24/5/11 密逃 @The Escape Game Chicago', // 图片的替代文本
  },
   {
    imageUrl: '/bbq.jpeg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/HsCa1I', // 替换为对应的网站链接
    altText: '24/5/4 BBQ @Blackwell Forest Preserve', // 图片的替代文本
  },
   {
    imageUrl: '/427小桌.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/S3xPOH', // 替换为对应的网站链接
    altText: '24/4/27 主题性小桌聊天Coffee Chat @320 River Bar', // 图片的替代文本
  },
  {
    imageUrl: '/0420activate.png', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/h7rcrH', // 替换为对应的网站链接
    altText: '24/4/20 室内游戏 @Activate & 粤菜 @D Cuisine', // 图片的替代文本
  },
  // Add the events as the following template ahead
   {
    imageUrl: '/0413whirlyball.jpg', // 替换为图片路径
    websiteUrl: 'http://xhslink.com/p8YcyG', // 替换为对应的网站链接
    altText: '24/4/13 Whirlyball @WhirlyBall Chicago'
   },
   {
    imageUrl: '/0406riverbar.jpg', // 替换为图片路径
    websiteUrl: 'http://xhslink.com/EZ9q3F', // 替换为对应的网站链接
    altText: '24/4/6 主题性小桌聊天Coffee Chat @320 River Bar'
   },
   {
    imageUrl: '/laser tag.jpg', // 替换为图片路径
    websiteUrl: 'http://xhslink.com/nQnUeF', // 替换为对应的网站链接
    altText: '24/3/30 Laser Tag版真人室内CS @Combat Chicago'
   },
   {
    imageUrl: '/0323bowling.jpg', // 替换为图片路径
    websiteUrl: 'http://xhslink.com/NaFwUE', // 替换为对应的网站链接
    altText: '24/3/23 保龄球 @Pinstripes'
   },
   {
    imageUrl: '/0316activate.jpg', // 替换为图片路径
    websiteUrl: 'http://xhslink.com/J5WxgE', // 替换为对应的网站链接
    altText: '24/3/16 超火室内游戏 @Activate & 粤菜 @D Cuisine', // 图片的替代文本
   },
   {
    imageUrl: '/0310CF.png', // 替换为图片路径
    websiteUrl: 'http://xhslink.com/eT9ozD', // 替换为对应的网站链接
    altText: '24/3/10 主题性小桌聊天Coffee Chat @320 River Bar', // 图片的替代文本
  },
   {
    imageUrl: '/mar3coffeechat.jpg', 
    websiteUrl: 'http://xhslink.com/u4Qy9C', 
    altText: '24/3/3 主题性小桌聊天Coffee Chat @Sawada Coffee', 
  },
  {
    imageUrl: '/fulihua.jpg',
    websiteUrl: 'http://xhslink.com/osNE9C',
    altText: '24/2/27 Chat @富丽华粤菜',
  },
  {
    imageUrl: '/0222aura.jpg',
    websiteUrl: 'http://xhslink.com/fF1A9C',
    altText: '24/2/22 香薰制作 @AURA Candle Bar',
  },
  {
    imageUrl: '/chushang.png',
    websiteUrl: 'http://xhslink.com/vtOz9C',
    altText: '24/2/20 Chat @厨尚JM Seafood ',
  },
  {
    imageUrl: '/0212ny.jpg',
    websiteUrl: 'http://xhslink.com/ln0C9C',
    altText: '24/2/12 新年快乐！@D Cruisine & KTV',
  },
  {
    imageUrl: '/0204sw.jpg',
    websiteUrl: 'http://xhslink.com/bMiA9C',
    altText: '24/2/4 Coffee chat @Sweet Bean & 口福阁',
  },
  {
    imageUrl: '/0127climbing.jpg',
    websiteUrl: 'http://xhslink.com/0omE9C',
    altText: '24/1/27 Climbing @First Ascent Block 37',
  },
  {
    imageUrl: '/0123tary.jpg',
    // websiteUrl: 'http://xhslink.com/0omE9C',
    altText: '24/1/23 MilkTea @TARY Coffee House. Our starting point, welcome every new friend!',
  },
  // 可以继续添加更多事件
];

export default function events() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsData.map((event, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={event.imageUrl} alt={event.altText} />
            <div className="px-6 py-4">
                <a href={event.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:underline">
                  {event.altText}
                </a>
            </div>
          </div>
        ))}
      </div>
      <a href="/" style={{
        display: 'inline-block',
        padding: '10px 20px',
        margin: '10px',
        backgroundColor: '#0070f3',
        color: 'white',
        borderRadius: '5px',
        textDecoration: 'none',
        textAlign: 'center',
        // Add more styling as needed
      }}>Homepage</a>
    </main>
  );
}
