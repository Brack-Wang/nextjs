// import Link from "next/link"

// export default function events() {
//     return (
//       <main className="flex min-h-screen flex-col items-center justify-between p-24">
   
//       </main>
//     )
//   }

import Link from 'next/link';

const eventsData = [
     // Add the events as the following template ahead
   {
    imageUrl: '/427小桌.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/h7rcrH', // 替换为对应的网站链接
    altText: '4/27 主题性小桌聊天 @320 River Bar', // 图片的替代文本
  },
  {
    imageUrl: '/0420activate.png', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/h7rcrH', // 替换为对应的网站链接
    altText: '4/20 室内游戏 @Activate & 粤菜 @D Cuisine', // 图片的替代文本
  },
  // Add the events as the following template ahead
   {
    imageUrl: '/0413whirlyball.jpg', // 替换为图片路径
    websiteUrl: 'http://xhslink.com/p8YcyG', // 替换为对应的网站链接
    altText: '4/13 Whirlyball @WhirlyBall Chicago'
   },
   {
    imageUrl: '/0406riverbar.jpg', // 替换为图片路径
    websiteUrl: 'http://xhslink.com/EZ9q3F', // 替换为对应的网站链接
    altText: '4/6 主题性小桌聊天 @320 River Bar'
   },
   {
    imageUrl: '/laser tag.jpg', // 替换为图片路径
    websiteUrl: 'http://xhslink.com/nQnUeF', // 替换为对应的网站链接
    altText: '3/30 Laser Tag版真人室内CS @Combat Chicago'
   },
   {
    imageUrl: '/0323bowling.jpg', // 替换为图片路径
    websiteUrl: 'http://xhslink.com/NaFwUE', // 替换为对应的网站链接
    altText: '3/23 保龄球 @Pinstripes'
   },
   {
    imageUrl: '/0316activate.jpg', // 替换为图片路径
    websiteUrl: 'http://xhslink.com/J5WxgE', // 替换为对应的网站链接
    altText: '3/16 超火室内游戏 @Activate & 粤菜 @D Cuisine', // 图片的替代文本
   },
   {
    imageUrl: '/0310CF.png', // 替换为图片路径
    websiteUrl: 'http://xhslink.com/eT9ozD', // 替换为对应的网站链接
    altText: '3/10 主题性小桌聊天 @320 River Bar', // 图片的替代文本
  },
   {
    imageUrl: '/mar3coffeechat.jpg', 
    websiteUrl: 'http://xhslink.com/u4Qy9C', 
    altText: '3/3 主题性小桌聊天 @Sawada Coffee', 
  },
  {
    imageUrl: '/fulihua.jpg',
    websiteUrl: 'http://xhslink.com/osNE9C',
    altText: '2/27 Chat @富丽华粤菜',
  },
  {
    imageUrl: '/0222aura.jpg',
    websiteUrl: 'http://xhslink.com/fF1A9C',
    altText: '2/22 香薰制作 @AURA Candle Bar',
  },
  {
    imageUrl: '/chushang.png',
    websiteUrl: 'http://xhslink.com/vtOz9C',
    altText: '2/20 Chat @厨尚JM Seafood ',
  },
  {
    imageUrl: '/0212ny.jpg',
    websiteUrl: 'http://xhslink.com/ln0C9C',
    altText: '2/12 新年快乐！@D Cruisine & KTV',
  },
  {
    imageUrl: '/0204sw.jpg',
    websiteUrl: 'http://xhslink.com/bMiA9C',
    altText: '2/4 Coffee chat @Sweet Bean & 口福阁',
  },
  {
    imageUrl: '/0127climbing.jpg',
    websiteUrl: 'http://xhslink.com/0omE9C',
    altText: '1/27 Climbing @First Ascent Block 37',
  },
  {
    imageUrl: '/0123tary.jpg',
    // websiteUrl: 'http://xhslink.com/0omE9C',
    altText: '1/23 MilkTea @TARY Coffee House. Our starting point, welcome every new friend!',
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
