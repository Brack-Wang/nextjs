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
    imageUrl: '/chushang.jpg', // 替换为图片路径
    websiteUrl: 'http://xhslink.com/t0hEdD', // 替换为对应的网站链接
    altText: 'introduce', // 图片的替代文本
  },
  {
    imageUrl: '/mar3coffeechat.jpg', // 替换为图片路径
    websiteUrl: 'http://xhslink.com/u4Qy9C', // 替换为对应的网站链接
    altText: '3/3 主题性小桌聊天@Sawada Coffee', // 图片的替代文本
  },
  {
    imageUrl: '/fulihua.jpg',
    websiteUrl: 'http://xhslink.com/osNE9C',
    altText: '2/27 Chat@富丽华粤菜',
  },
  {
    imageUrl: '/xiangxun.jpg',
    websiteUrl: 'http://xhslink.com/fF1A9C',
    altText: '2/22 香薰制作@AURA Candle Bar',
  },
  {
    imageUrl: '/chushang.jpg',
    websiteUrl: 'http://xhslink.com/vtOz9C',
    altText: '2/20 Chat@厨尚JM Seafood ',
  },
  {
    imageUrl: '/newyear.jpg',
    websiteUrl: 'http://xhslink.com/ln0C9C',
    altText: '2/12 新年快乐！@D Cruisine & KTV',
  },
  {
    imageUrl: '/grandpalace.jpg',
    websiteUrl: 'http://xhslink.com/bMiA9C',
    altText: '2/4 Coffee chat@Sweet Bean & 口福阁',
  },
  {
    imageUrl: '/climbing.jpg',
    websiteUrl: 'http://xhslink.com/0omE9C',
    altText: '1/27 Climbing@First Ascent Block 37',
  },
  {
    imageUrl: '/first_event.jpg',
    // websiteUrl: 'http://xhslink.com/0omE9C',
    altText: '1/23 MilkTea@TARY Coffee House.Our starting point, welcome every new friend!',
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
